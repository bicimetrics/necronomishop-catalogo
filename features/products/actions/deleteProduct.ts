"use server";

import { revalidatePath } from "next/cache";

import {
  deleteProductRepository,
} from "../repositories/product.repository";

export async function deleteProduct(
  id: number
) {

  await deleteProductRepository(id);

  revalidatePath("/");

  revalidatePath("/admin/productos");

}