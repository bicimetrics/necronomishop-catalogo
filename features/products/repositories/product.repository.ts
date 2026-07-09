import { supabase } from "@/lib/supabase";
import { Product } from "../types/product.types";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories(name)
    `)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function getProduct(id: number) {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories(name)
    `)
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createProductRepository(product: Product) {
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

  if (error) throw error;
}

export async function deleteProductRepository(id: number) {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) throw error;
}