"use server";

import { revalidatePath } from "next/cache";

import { ActionResult } from "@/features/shared/types/action-result.types";

import {
  updateCategoryRepository,
} from "../repositories/category.repository";

import { Category } from "../types/category.types";

export async function updateCategory(
  id: number,
  category: Category
): Promise<ActionResult> {

  try {

    await updateCategoryRepository(
      id,
      category
    );

    revalidatePath("/admin/categorias");

    revalidatePath(`/admin/categorias/${id}`);

    return {
      success: true,
    };

  } catch (error) {

    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "23505"
    ) {

      return {
        success: false,
        message:
          "Ya existe una categoría con ese nombre o slug.",
      };

    }

    console.error(error);

    return {
      success: false,
      message:
        "No fue posible actualizar la categoría.",
    };

  }

}