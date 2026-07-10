"use server";

import { revalidatePath } from "next/cache";

import { ActionResult }
from "@/features/shared/types/action-result.types";

import {
  deleteCategoryRepository,
} from "../repositories/category.repository";

export async function deleteCategory(
  id: number
): Promise<ActionResult> {

  try {

    await deleteCategoryRepository(id);

    revalidatePath("/admin/categorias");

    return {
      success: true,
    };

  } catch (error) {

    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "23503"
    ) {

      return {
        success: false,
        message:
          "No puedes eliminar esta categoría porque tiene productos asociados.",
      };

    }

    console.error(error);

    return {
      success: false,
      message:
        "Ha ocurrido un error inesperado.",
    };

  }

}