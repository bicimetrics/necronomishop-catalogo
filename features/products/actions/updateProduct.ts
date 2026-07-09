"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  updateProductRepository,
} from "../repositories/product.repository";

import { Product } from "../types/product.types";

export async function updateProduct(
  id: number,
  product: Product
) {

  await updateProductRepository(
    id,
    product
  );

  revalidatePath("/");

  revalidatePath("/admin/productos");

  redirect("/admin/productos");

}