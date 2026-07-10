"use server";

import { revalidatePath } from "next/cache";

import { ActionResult }
from "@/features/shared/types/action-result.types";

import {
  deleteProductRepository,
} from "../repositories/product.repository";

export async function deleteProduct(
  id: number
): Promise<ActionResult> {

  try {

    await deleteProductRepository(id);

    revalidatePath("/");

    revalidatePath("/admin");

    revalidatePath("/admin/productos");

    return {
      success: true,
    };

  } catch (error) {

    console.error(error);

    return {
      success: false,
      message:
        "No fue posible eliminar el producto.",
    };

  }

}