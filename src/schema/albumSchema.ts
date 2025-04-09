import { z } from "zod";

export const albumSchema = z.object({
  albumTitle: z
    .string()
    .min(1, "Album title must be at least 1 character")
    .max(80, "Album title must be at most 80 characters"),
  albumDescription: z
    .string()
    .max(250, "Album description must be at most 250 characters")
    .optional(),
});
