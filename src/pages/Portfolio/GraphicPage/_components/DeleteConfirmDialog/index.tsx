import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { GraphicProjectData } from "@/types/graphicDataType";
import { UseMutateFunction } from "@tanstack/react-query";

interface Props {
  projectData: GraphicProjectData | null;
  isOpen: boolean;
  onClose: () => void;
  deleteProjectMutaion: {
    mutate: UseMutateFunction<void, unknown, string, unknown>;
  };
}

const DeleteConfirmDialog = ({
  projectData,
  isOpen,
  onClose,
  deleteProjectMutaion,
}: Props) => {
  const handleClose = () => {
    onClose();
  };
  const handleDeleteProject = () => {
    if (projectData) {
      deleteProjectMutaion.mutate(projectData.id);
    }
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogTitle className="text-2xl text-center">
          Bạn chắc chắn muốn xóa project{" "}
          <p className="italic text-red-500">{projectData?.projectTitle} ?</p>
        </DialogTitle>
        {/* Phần mô tả được tham chiếu bởi aria-describedby */}
        <p id="add-project-description" className="sr-only">
          Confirm delete project
        </p>
        <div className="flex justify-center gap-3">
          <Button
            variant="destructive"
            className="w-full"
            onClick={handleDeleteProject}
          >
            Có
          </Button>
          <Button variant="secondary" className="w-full" onClick={handleClose}>
            Khum
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmDialog;
