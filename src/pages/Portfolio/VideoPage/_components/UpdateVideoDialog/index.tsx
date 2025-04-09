/* eslint-disable @typescript-eslint/no-misused-promises */
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
import useControlVideo from "@/hooks/useControlVideo";
import { VideoData } from "@/types/videoDataType";
import { useEffect } from "react";

interface Props {
  videoData: VideoData | null;
  isOpen: boolean;
  onClose: () => void;
}

const UpdateVideoDialog = ({ videoData, isOpen, onClose }: Props) => {
  const { form, isPending, editVideoMutation } = useControlVideo();

  useEffect(() => {
    if (videoData) {
      form.setValue("linkURL", videoData.linkURL);
      form.setValue("videoTitle", videoData.videoTitle);
      form.setValue("videoDescription", videoData.videoDescription || "");
    }
  }, [videoData, form]);

  const handleSubmit = () => {
    if (videoData) {
      const formValues = form.getValues();
      const updatedData = {
        ...formValues,
        videoDescription: formValues.videoDescription || null,
      };

      editVideoMutation.mutate({
        videoId: videoData.id,
        updatedData,
      });
    }
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-fit !max-w-fit">
        <div className="add-box w-[400px] h-[400px]">
          <h1 className="text-center text-2xl">Cập nhật video</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8 mt-5"
            >
              <FormField
                control={form.control}
                name="linkURL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL video</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập URL video YouTube" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="videoTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tiêu đề</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Nhập tiêu đề video"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="videoDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mô tả</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Nhập mô tả video" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isPending} className="w-full" type="submit">
                Cập nhật video
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateVideoDialog;
