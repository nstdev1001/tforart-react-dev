import { emailSchema } from "@/schema/emailSchema";
import { emailjsConfig } from "@/services/emailJsConfig";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import emailjs from "emailjs-com";
import NProgress from "nprogress";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const useControlEmail = () => {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      budget: "",
      text: "",
      date: "",
    },
  });

  const sentEmailMutation = useMutation({
    mutationFn: async () => {
      NProgress.start();
      const formValues = form.getValues();

      return await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          ...formValues,
        },
        emailjsConfig.userId
      );
    },
    onSuccess: () => {
      NProgress.done();
      toast.success("Email sent successfully!");
      form.reset();
    },
    onError: (error) => {
      NProgress.done();
      toast.error("Failed to send email, please try again later.");
      console.error("Error sending email:", error);
    },
  });

  const onSubmit = async () => {
    await form.handleSubmit(async () => {
      try {
        await sentEmailMutation.mutateAsync();
        return true;
      } catch (error) {
        console.error("Error submitting form:", error);
        return false;
      }
    })();
  };

  return {
    form,
    onSubmit,
    isLoading: sentEmailMutation.isPending,
  };
};

export default useControlEmail;
