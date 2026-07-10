"use server";

import { revalidatePath } from "next/cache";

import { ActionResult } from "@/features/shared/types/action-result.types";

import {
  createCategoryRepository,
} from "../repositories/category.repository";

import { CreateCategory } from "../types/category.types";

export async function createCategory(
  category: CreateCategory
): Promise<ActionResult> {

  try {

    await createCategoryRepository(category);

    revalidatePath("/admin/categorias");

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
        "No fue posible crear la categoría.",
    };

  }

}