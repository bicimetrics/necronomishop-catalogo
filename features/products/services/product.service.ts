import {
  getProductBySlug,
  getRelatedProducts,
} from "../repositories/product.repository";

import { getProducts } from "../repositories/product-list.repository";

import { ProductFilters } from "../types/product-filter.types";

export async function findProducts(
  filters?: ProductFilters
) {
  return getProducts(filters);
}

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