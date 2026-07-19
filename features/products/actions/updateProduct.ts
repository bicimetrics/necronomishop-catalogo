"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createProductImage } from "../repositories/product-image.repository";
import { updateProductRepository } from "../repositories/product.repository";

import { UpdateProduct } from "../types/product.types";

export async function updateProduct(
  id: number,
  product: UpdateProduct,
  images: {
    image: string;
    sortOrder: number;
  }[] = []
) {
  await updateProductRepository(id, product);

 for (const image of images) {
  await createProductImage(
    id,
    image.image,
    image.sortOrder
  );
}
  revalidatePath("/");
  revalidatePath("/admin/productos");

  redirect("/admin/productos");
}