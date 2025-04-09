import { z } from "zod";

export const videoSchema = z.object({
  linkURL: z.string().min(10, "Link invalid"),
  videoTitle: z
    .string()
    .min(1, "Video title must be at least 1 characters")
    .max(80, "Video title must be at most 80 characters"),
  videoDescription: z.string().optional(),
});
