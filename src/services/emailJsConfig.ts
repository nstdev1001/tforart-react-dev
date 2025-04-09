export const emailjsConfig: {
  serviceId: string;
  templateId: string;
  userId: string;
} = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
  userId: import.meta.env.VITE_EMAILJS_USER_ID as string,
};
