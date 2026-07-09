"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  createCategoryRepository,
} from "../repositories/category.repository";

import { Category } from "../types/category.types";

export async function createCategory(
  category: Category
) {
  await createCategoryRepository(category);

  revalidatePath("/admin/categorias");

  redirect("/admin/categorias");
}