"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  createProductRepository,
} from "../repositories/product.repository";

import { generateUniqueSlug }
from "../services/slug.service";

import { CreateProduct } from "../types/product.types";

export async function createProduct(
  product: CreateProduct
) {

  product.slug =
    await generateUniqueSlug(
      product.name
    );

  await createProductRepository(
    product
  );

  revalidatePath("/");

  revalidatePath("/admin/productos");

  redirect("/admin/productos");

}