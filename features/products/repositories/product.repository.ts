import { supabase } from "@/lib/supabase";

import {
  Product,
  CreateProduct,
  UpdateProduct,
} from "../types/product.types";

import { getProductImages } from "./product-image.repository";

export interface ProductImage {
  id: number;

  product_id: number;

  image: string;

  sort_order: number;

  created_at: string;
}

export async function getProduct(
  id: number
): Promise<Product> {

  const {
    data,
    error,
  } = await supabase
    .from("products")
    .select(`
      *,
      categories(
        name
      )
    `)
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  const images =
  await getProductImages(data.id);

return {
  ...data,
  images,
} as Product;

}

export async function createProductRepository(
  product: CreateProduct
): Promise<Product> {

  const {
    data,
    error,
  } = await supabase
    .from("products")
    .insert(product)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as Product;

} 

export async function updateProductRepository(
  id: number,
  product: UpdateProduct
): Promise<void> {

  const { error } = await supabase
    .from("products")
    .update({
      name: product.name,
      slug: product.slug,
      description: product.description,
      price: product.price,
      stock: product.stock,
      badge: product.badge,
      image: product.image,
      category_id: product.category_id,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }

}

export async function deleteProductRepository(
  id: number
): Promise<void> {

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }

}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {

  const {
    data,
    error,
  } = await supabase
    .from("products")
    .select(`
      *,
      categories(
        name
      )
    `)
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  const images = await getProductImages(data.id);

  return {
    ...data,
    images,
  } as Product;

}

export async function getRelatedProducts(
  categoryId: number,
  currentId: number,
  limit = 4
): Promise<Product[]> {

  const {
    data,
    error,
  } = await supabase
    .from("products")
    .select(`
      *,
      categories(
        name
      )
    `)
    .eq("category_id", categoryId)
    .neq("id", currentId)
    .limit(limit);

  if (error) {
    throw error;
  }

  return data as Product[];

}