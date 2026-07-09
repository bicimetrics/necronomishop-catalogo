"use server";

import { revalidatePath } from "next/cache";

import {
  deleteCategoryRepository,
} from "../repositories/category.repository";

export async function deleteCategory(
  id: number
) {
  await deleteCategoryRepository(id);

  revalidatePath("/admin/categorias");
}