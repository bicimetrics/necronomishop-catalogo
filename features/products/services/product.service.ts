import { Product } from "../types/product.types";

import { createProduct } from "../actions/createProduct";

import { uploadProductImage } from "./image.service";

export async function saveProduct(
  product: Product,
  image: File | null
) {
  let imagePath = product.image;

  if (image) {
    imagePath = await uploadProductImage(image);
  }

  return createProduct({
    ...product,
    image: imagePath,
  });
}