import { supabase } from "@/lib/supabase";

import { Product } from "../types/product.types";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories(
        name
      )
    `)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data;
}

export async function getProduct(id: number) {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories(
        name
      )
    `)
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createProductRepository(
  product: Product
) {
  const { error } = await supabase
    .from("products")
    .insert(product);

  if (error) throw error;
}

export async function updateProductRepository(
  id: number,
  product: Product
) {
  const { error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id);

  if (error) throw error;
}

export async function deleteProductRepository(
  id: number
) {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) throw error;
}