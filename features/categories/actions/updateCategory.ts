"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  updateCategoryRepository,
} from "../repositories/category.repository";

import { Category } from "../types/category.types";

export async function updateCategory(
  id: number,
  category: Category
) {
  await updateCategoryRepository(
    id,
    category
  );

  revalidatePath("/admin/categorias");

  redirect("/admin/categorias");
}