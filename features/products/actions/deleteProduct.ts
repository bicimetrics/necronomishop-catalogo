"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

export async function deleteProduct(id: number) {
  // Buscar la imagen asociada
  const { data: product, error: findError } = await supabase
    .from("products")
    .select("image")
    .eq("id", id)
    .single();

  if (findError) {
    throw findError;
  }

  // Eliminar imagen del Storage (si existe)
  if (product?.image) {
    await supabase.storage
      .from("products")
      .remove([product.image]);
  }

  // Eliminar registro
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/");
  revalidatePath("/admin/productos");
}