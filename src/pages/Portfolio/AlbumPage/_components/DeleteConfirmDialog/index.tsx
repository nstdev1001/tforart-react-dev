import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AlbumData } from "@/types/albumDataType";
import { UseMutateFunction } from "@tanstack/react-query";

interface Props {
  albumData: AlbumData | null;
  isOpen: boolean;
  onClose: () => void;
  deleteAlbumMutaion: {
    mutate: UseMutateFunction<void, unknown, string, unknown>;
  };
}

const DeleteConfirmDialog = ({
  albumData,
  isOpen,
  onClose,
  deleteAlbumMutaion,
}: Props) => {
  const handleClose = () => {
    onClose();
  };
  const handleDeleteAlbum = () => {
    if (albumData) {
      deleteAlbumMutaion.mutate(albumData.id);
    }
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogTitle className="text-2xl text-center">
          Bạn chắc chắn muốn xóa album{" "}
          <p className="italic text-red-500">{albumData?.albumTitle} ?</p>
        </DialogTitle>
        {/* Phần mô tả được tham chiếu bởi aria-describedby */}
        <p id="add-album-description" className="sr-only">
          Confirm delete album
        </p>
        <div className="flex justify-center gap-3">
          <Button
            variant="destructive"
            className="w-full"
            onClick={handleDeleteAlbum}
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
