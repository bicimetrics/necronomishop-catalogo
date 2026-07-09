"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

export async function updateProduct(
  id: number,
  data: any
) {
  const { error } = await supabase
    .from("products")
    .update(data)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/productos");
}