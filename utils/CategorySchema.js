import {z} from "zod";

export const CategoryFormSchema = z.object({
    name : z.string()
            .min(6,"Minimal 6 character")
            .trim()
})