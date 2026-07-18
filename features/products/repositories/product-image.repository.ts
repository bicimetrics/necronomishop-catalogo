import { supabase } from "@/lib/supabase";

export interface ProductImage {
  id: number;
  product_id: number;
  image: string;
  sort_order: number;
  created_at: string;
}

export async function getProductImages(
  productId: number
): Promise<ProductImage[]> {
  const { data, error } = await supabase
    .from("product_images")
    .select("*")
    .eq("product_id", productId)
    .order("sort_order", {
      ascending: true,
    });

  if (error) {
    throw error;
  }

  return data as ProductImage[];
}

export async function deleteProductImage(
  id: number
): Promise<void> {
  const { error } = await supabase
    .from("product_images")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}

export async function createProductImage(
  productId: number,
  image: string,
  sortOrder: number
): Promise<void> {
  const { error } = await supabase
    .from("product_images")
    .insert({
      product_id: productId,
      image,
      sort_order: sortOrder,
    });

  if (error) {
    throw error;
  }
}