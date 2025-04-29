/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

interface EdiProjectFormProps {
  form: UseFormReturn<any>;
  onSubmit: () => void;
  onCancel: () => void;
}

const EditProjectForm = ({ form, onSubmit, onCancel }: EdiProjectFormProps) => {
  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit(onSubmit)();
        }}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col items-center gap-5">
          <FormField
            control={form.control}
            name="projectTitle"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Type title of project"
                    {...field}
                    className="text-4xl font-semibold w-[300px] md:w-[500px] text-center"
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
                <FormControl>
                  <Textarea
                    placeholder="Description of project"
                    {...field}
                    className="w-[300px] md:w-[500px] text-center"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="control-button-update flex gap-2 items-end justify-end">
          <Button
            variant="secondary"
            className="w-[40px] h-[40px] flex items-center justify-center"
            type="button"
            onClick={onCancel}
          >
            <i className="fa-solid fa-xmark"></i>
          </Button>
          <Button
            variant="secondary"
            className="w-[40px] h-[40px] flex items-center justify-center"
            type="submit"
          >
            <i className="fa-solid fa-check"></i>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditProjectForm;
