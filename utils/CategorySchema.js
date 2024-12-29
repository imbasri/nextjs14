import { z } from "zod";

export const CategoryFormSchema = z.object({
  name: z.string().min(6, "Minimal 6 name category character").trim(),
  description: z.string().min(6, "Minimal 6 description category character").trim(),
});
