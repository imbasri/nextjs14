'use server'
import { CategoryFormSchema } from "@/utils/CategorySchema";
import connectDB from "@/config/database";
import Categories from "@/models/category";
import { redirect } from "next/navigation";
export async function categoryCreate(state, formData) {
  // Validate form fields
  // connectDB
  await connectDB()
  const validatedFields = CategoryFormSchema.safeParse({
    name: formData.get("name"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
  const { name } = validatedFields.data;
  try {
    const newCategory = await Categories({
      name,
    });
    newCategory.save();
    redirect("/dashboard/category");
  } catch (error) {
    console.log("🚀 ~ categoryCreate ~ error:", error);
  }
}
