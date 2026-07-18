import {
  getProductBySlug,
  getRelatedProducts,
} from "../repositories/product.repository";

export async function findProductBySlug(
  slug: string
) {
  return getProductBySlug(slug);
}

export async function findRelatedProducts(
  categoryId: number,
  currentId: number
) {
  return getRelatedProducts(
    categoryId,
    currentId
  );
}