import CompressImageLoading from "@/components/Loading/CompressImageLoading";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useControlGraphicProject from "@/hooks/useControlGraphicProject";
import { useSelectImages } from "@/hooks/useSelectImages";
import { GraphicProjectData } from "@/types/graphicDataType";
import { useEffect } from "react";

interface Props {
  projectData: GraphicProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

const UpdateProjectDialog = ({ projectData, isOpen, onClose }: Props) => {
  const { form, watch, editProjectMutation, isPending } =
    useControlGraphicProject();

  const projectTitle = watch("projectTitle");

  useEffect(() => {
    if (projectData) {
      form.setValue("projectTitle", projectData.projectTitle);
      form.setValue("projectDescription", projectData.projectDescription || "");
    }
  }, [projectData, form]);

  const {
    handleDragOver,
    handleDrop,
    handleFileChange,
    selectedFiles,
    previewUrls,
    setSelectedFiles,
    setPreviewUrls,
    isCompressing,
  } = useSelectImages({
    isThumbnail: true,
    initialImageUrl: projectData?.thumbnailUrl,
  });

  const handleClose = () => {
    form.reset();
    setSelectedFiles([]);
    setPreviewUrls(projectData?.thumbnailUrl ? [projectData.thumbnailUrl] : []);
    onClose();
  };

  const handleUpdateProject = () => {
    const formValues = form.getValues();
    const updatedData = {
      ...projectData,
      projectTitle: formValues.projectTitle,
      projectDescription: formValues.projectDescription || null,
    };

    if (selectedFiles.length > 0) {
      // If a new thumbnail is selected
      editProjectMutation.mutate({
        projectId: projectData?.id,
        updatedData,
        thumbnailFile: selectedFiles[0],
      });
    } else {
      // If no new thumbnail is selected
      editProjectMutation.mutate({
        projectId: projectData?.id,
        updatedData,
        oldThumbnailUrl: projectData?.thumbnailUrl,
      });
    }
    form.reset();
    onClose();
    setSelectedFiles([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-fit !max-w-fit flex justify-between gap-[80px]">
        <div className="add-box w-[400px] flex flex-col gap-8">
          <h1 className="text-center text-2xl font-semibold">
            Cập nhật project
          </h1>
          <Form {...form}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void form.handleSubmit(handleUpdateProject)();
              }}
              className="flex flex-col gap-8"
            >
              <FormField
                control={form.control}
                name="projectTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Tiêu đề</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Nhập tiêu đề project"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Mô tả</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Nhập mô tả project (không bắt buộc)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div
                className="flex flex-col items-center justify-center w-full max-w-lg mx-auto p-6 border-2 border-dashed border-gray-500 rounded-lg"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {isCompressing ? (
                  <div className="loading-effect flex flex-col gap-1 items-center">
                    <CompressImageLoading />
                    <p>Đang nén ảnh...</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 items-center">
                    <p className="text-lg text-gray-600 text-center w-52">
                      Kéo và thả file để tải Ảnh thumbnail
                    </p>
                    <span className="text-gray-500 text-sm">- hoặc -</span>
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition"
                    >
                      Chọn tệp
                      <Input
                        id="file-upload"
                        type="file"
                        accept="image/*,video/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                )}
                {selectedFiles && (
                  <div className="mt-4 w-full">
                    <h4 className="text-gray-700 font-medium">Tệp đã chọn:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {selectedFiles.map((file) => (
                        <li key={file.name}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Button className="w-full" type="submit" disabled={isPending}>
                Cập nhật project
              </Button>
            </form>
          </Form>
        </div>
        <div className="preview-project flex flex-col items-center justify-center gap-8">
          <h1 className="text-center text-2xl">Xem trước project</h1>
          <div
            className="project h-[348px] w-[384px] relative"
            key={`project-${"project.id"}`}
          >
            {previewUrls.length > 0 ? (
              <img
                src={previewUrls[0]}
                alt={selectedFiles[0]?.name || "Project thumbnail"}
                className="w-full h-auto object-cover"
              />
            ) : (
              <p className="text-gray-600">Chưa có ảnh để hiển thị</p>
            )}
            <div className="overlay">
              <h3 className="title">{projectTitle}</h3>
            </div>
          </div>
          <div className="preview-description max-w-[350px]">
            <h3 className="text-center font-bold">Mô tả: </h3>
            <p className="max-w-[350px] break-words">
              {watch("projectDescription")}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProjectDialog;
