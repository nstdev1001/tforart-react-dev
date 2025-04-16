import AddAlbumDialog from "./_components/AddAlbumDialog";
import UpdateAlbumDialog from "./_components/UpdateAlbumDialog";
import styles from "./style.module.css";
import DeleteConfirmDialog from "@/components/DeleteConfirmDialog";
import { Button } from "@/components/ui/button";
import { defaultOpacityMotionProps } from "@/config/motion_config";
import useAuth from "@/hooks/useAuth";
import useControlAlbum from "@/hooks/useControlAlbum";
import { AlbumData } from "@/types/albumDataType";
import { GraphicProjectData } from "@/types/graphicDataType";
import {
  closestCenter,
  defaultDropAnimationSideEffects,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { UseMutateFunction } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface SortableProjectProps {
  project: GraphicProjectData;
  index: number;
  checkIsLogin: boolean;
  handleEditClick: (project: GraphicProjectData) => void;
  handleDeleteClick: (project: GraphicProjectData) => void;
  deleteAlbumMutaion: {
    mutate: UseMutateFunction<void, unknown, string, unknown>;
  };
  toUrlSlug: (title: string) => string;
  navigate: NavigateFunction;
}

interface DragProjectPreviewProps {
  project: GraphicProjectData;
}

const SortableAlbum = ({
  project,
  index,
  checkIsLogin,
  handleEditClick,
  handleDeleteClick,
  toUrlSlug,
  navigate,
}: SortableProjectProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 100 : 1,
  };

  return (
    <motion.div
      className={`${styles.album} relative ${
        isDragging ? `${styles.dragging}` : ""
      }`}
      ref={setNodeRef}
      style={style}
      {...defaultOpacityMotionProps}
      transition={{ duration: 1.5, delay: index * 0.2 }}
      onClick={(e) => {
        const target = e.target as Element;
        const isInteractiveElement =
          target.closest(".dragHandle") ||
          target.closest(".control-album") ||
          target.closest("button");

        if (!isInteractiveElement) {
          navigate(
            `/portfolio/photos/${project.id}/${toUrlSlug(project.projectTitle)}`
          );
        }
      }}
    >
      {checkIsLogin && (
        <>
          <div className={styles.dragHandle} {...attributes} {...listeners}>
            <i className="fa-solid fa-grip-lines"></i>
          </div>
          <div
            className="control-album hidden md:block absolute top-1 right-1 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Button onClick={() => handleEditClick(project)}>
              <i className="fa-regular fa-pen-to-square"></i>
            </Button>
            <Button
              variant="destructive"
              className="ml-2"
              onClick={() => handleDeleteClick(project)}
            >
              <i className="fa-regular fa-trash-can"></i>
            </Button>
          </div>
        </>
      )}

      <img
        src={project.thumbnailUrl}
        alt={project.projectTitle}
        className="cursor-pointer"
        onClick={() =>
          navigate(
            `/portfolio/photos/${project.id}/${toUrlSlug(project.projectTitle)}`
          )
        }
      />
      <div
        className={`${styles.overlay} cursor-pointer`}
        onClick={() =>
          navigate(
            `/portfolio/graphic/${project.id}/${toUrlSlug(
              project.projectTitle
            )}`
          )
        }
      >
        <h3 className={styles.title}>{project.projectTitle}</h3>
      </div>
    </motion.div>
  );
};

const DragAlbumPreview = ({ project }: DragProjectPreviewProps) => {
  return (
    <div className={`${styles.album} relative ${styles.previewDrag}`}>
      <img
        src={project.thumbnailUrl}
        alt={project.projectTitle}
        className="cursor-move"
      />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{project.projectTitle}</h3>
      </div>
    </div>
  );
};

const AlbumPage = () => {
  const { checkIsLogin } = useAuth();
  const navigate = useNavigate();
  const { albums, toUrlSlug, deleteAlbumMutaion, updateAlbumPositionMutation } =
    useControlAlbum();
  const [editAlbumData, setEditAlbumData] = useState<GraphicProjectData | null>(
    null
  );
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [orderedAlbums, setOrderedAlbums] = useState<AlbumData[]>([]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  // Sensors for drag detection
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // Minimum drag distance before activation
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    if (albums) {
      setOrderedAlbums([...albums]);
    }
  }, [albums]);

  const handleEditClick = (project: GraphicProjectData) => {
    setEditAlbumData(project);
    setIsEditDialogOpen(true);
  };
  const handleDeleteClick = (project: GraphicProjectData) => {
    setEditAlbumData(project);
    setIsDeleteDialogOpen(true);
  };

  // Find active album for overlay
  const activeAlbum = activeId
    ? orderedAlbums.find((album) => album.id === activeId)
    : null;

  // DnD handlers
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (over && active.id !== over.id) {
      setOrderedAlbums((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);

        if (updateAlbumPositionMutation) {
          const updatedPositions = newItems.map((album, index) => ({
            ...album,
            id: album.id,
            position: index,
          }));
          updateAlbumPositionMutation.mutate(updatedPositions);
        }
        return newItems;
      });
    }
  };

  // Custom drop animation to show insertion point
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <Fragment>
      {checkIsLogin && <AddAlbumDialog />}

      <DeleteConfirmDialog
        data={{
          id: editAlbumData?.id || "",
          title: editAlbumData?.albumTitle || "",
        }}
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        deleteMutation={deleteAlbumMutaion}
        dialogTitle="Bạn có chắc chắn muốn xóa album"
      />

      <UpdateAlbumDialog
        albumData={editAlbumData}
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
      />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={() => setActiveId(null)}
      >
        <div
          className={`album-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ${
            checkIsLogin ? `${styles.sortableEnabled}` : ""
          }`}
        >
          <SortableContext
            items={orderedAlbums.map((album) => album.id)}
            strategy={rectSortingStrategy}
          >
            {orderedAlbums.map((album, index) => (
              <SortableAlbum
                key={album.id}
                project={project}
                index={index}
                checkIsLogin={checkIsLogin}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                deleteAlbumMutaion={deleteAlbumMutaion}
                toUrlSlug={toUrlSlug}
                navigate={navigate}
              />
            ))}
          </SortableContext>
        </div>

        <DragOverlay dropAnimation={dropAnimation}>
          {activeId && activeAlbum ? (
            <DragAlbumPreview project={activeAlbum} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </Fragment>
  );
};

export default AlbumPage;
