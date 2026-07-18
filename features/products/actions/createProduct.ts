"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  createProductRepository,
} from "../repositories/product.repository";

import {
  createProductImage,
} from "../repositories/product-image.repository";

import { generateUniqueSlug } from "../services/slug.service";

import { CreateProduct } from "../types/product.types";

interface ProductImageInput {
  image: string;
  sortOrder: number;
}

export async function createProduct(
  product: CreateProduct,
  images: ProductImageInput[] = []
) {
  product.slug = await generateUniqueSlug(product.name);

  const createdProduct =
    await createProductRepository(product);

  for (const image of images) {
    await createProductImage(
      createdProduct.id,
      image.image,
      image.sortOrder
    );
  }

  revalidatePath("/");
  revalidatePath("/admin/productos");

  redirect("/admin/productos");
}