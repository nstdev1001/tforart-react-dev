import { z } from "zod";

export const graphicProjectSchema = z.object({
  projectTitle: z
    .string()
    .min(1, "Project title must be at least 1 character")
    .max(80, "Project title must be at most 80 characters"),
  projectDescription: z
    .string()
    .max(250, "Project description must be at most 250 characters")
    .optional(),
});
