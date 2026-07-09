"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  createProductRepository,
} from "../repositories/product.repository";

import { Product } from "../types/product.types";

export async function createProduct(
  product: Product
) {

  await createProductRepository(product);

  revalidatePath("/");

  revalidatePath("/admin/productos");

  redirect("/admin/productos");

}