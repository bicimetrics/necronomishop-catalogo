"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  updateProductRepository,
} from "../repositories/product.repository";

import { UpdateProduct } from "../types/product.types";

export async function updateProduct(
  id: number,
  product: UpdateProduct
) {
  await updateProductRepository(id, product);

  revalidatePath("/");
  revalidatePath("/admin/productos");

  redirect("/admin/productos");
}