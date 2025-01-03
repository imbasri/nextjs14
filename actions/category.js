"use server";
import { CategoryFormSchema } from "@/utils/CategorySchema";
import connectDB from "@/config/database";
import Categories from "@/models/category";
import { redirect } from "next/navigation";
export async function categoryCreate(state, formData) {
  // Validate form fields
  // connectDB
  await connectDB();
  const validatedFields = CategoryFormSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a category...
  const { name, description } = validatedFields.data;
  try {
    const newCategory = await Categories({
      name,
      description,
    });
    newCategory.save();
  } catch (error) {}
  redirect("/dashboard/category");
}

export async function handleEditCategory(state, formData) {
  // Validate form fields
  // connectDB
  await connectDB();
  const validatedFields = CategoryFormSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to edit a category...
  const { name, description } = validatedFields.data;
  const categoryUpdate = await Categories.findByIdAndUpdate(
    state,
    {
      name,
      description,
    },
    { new: true }
  );

  if (!categoryUpdate) {
    return {
      errors: {
        name: "Category not found",
      },
    };
  }
  redirect("/dashboard/category");
}
