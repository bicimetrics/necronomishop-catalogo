"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Product } from "../types/product.types";

export async function updateProduct(
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

  if (error) {
    throw error;
  }

  revalidatePath("/");
  revalidatePath("/admin/productos");

  redirect("/admin/productos");
}