import CompressImageLoading from "@/components/Loading/CompressImageLoading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useState } from "react";

const AddProjectDialog = () => {
  const { form, watch, isPending, onSubmit } = useControlGraphicProject();
  const [isOpen, setIsOpen] = useState(false);
  const {
    handleDragOver,
    handleDrop,
    handleFileChange,
    selectedFiles,
    previewUrls,
    setSelectedFiles,
    isCompressing,
  } = useSelectImages({ isThumbnail: true });

  const projectTitle = watch("projectTitle");

  const handleSubmitAddProject = async () => {
    try {
      if (!selectedFiles) {
        console.error("No file selected");
        return;
      }
      for (const file of selectedFiles) {
        await onSubmit(file);
      }
      form.reset();
      setIsOpen(false);
      setSelectedFiles([]);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        disabled={isPending}
        className="cursor-pointer hidden md:block p-3 border rounded-lg"
      >
        <i className="fa-regular fa-plus text-3xl"></i>
      </DialogTrigger>

      <DialogContent
        aria-describedby="add-project-description"
        className="w-fit md:scale-75 lg:scale-100 !max-w-fit flex justify-between gap-[80px]"
      >
        <div className="add-box w-[400px] flex flex-col gap-8">
          <DialogTitle className="text-center text-xl">
            Tạo mới project
          </DialogTitle>

          {/* Phần mô tả được tham chiếu bởi aria-describedby */}
          <p id="add-project-description" className="sr-only">
            Fill in the form to create a new project. You can upload an image or
            video and provide a title and description.
          </p>

          <Form {...form}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void form.handleSubmit(handleSubmitAddProject)();
              }}
              className="space-y-8 flex flex-col"
            >
              <FormField
                control={form.control}
                name="projectTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tiêu đề</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Nhập tên project"
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
                    <FormLabel>Mô tả</FormLabel>
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
                className="flex flex-col gap-10 items-center justify-center w-full max-w-lg mx-auto p-6 border-2 border-dashed border-gray-500 rounded-lg"
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
                      Kéo và thả file để tải Thumnnail
                    </p>
                    <span className="text-gray-500 text-sm">- or -</span>
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
                  <div className="selected-file-section w-full">
                    <h4 className="text-gray-700 font-medium">
                      Selected Files:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {selectedFiles.map((file, index) => (
                        <p
                          className="break-words overflow-hidden text-ellipsis mb-1 italic"
                          key={index}
                        >
                          {file.name}
                        </p>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Button
                disabled={isPending || isCompressing}
                className="w-full"
                type="submit"
              >
                Tạo project
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
              previewUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={selectedFiles[0]?.name || "Preview"}
                  className="w-full h-auto object-cover"
                />
              ))
            ) : (
              <p className="text-gray-600">Chưa có ảnh để hiển thị</p>
            )}
            <div className="overlay">
              <h3 className="title">{projectTitle}</h3>
            </div>
          </div>
          <div className="preview-description max-w-[384px]">
            <h3 className="text-center font-bold">Mô tả: </h3>
            <p>{watch("projectDescription")}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectDialog;
