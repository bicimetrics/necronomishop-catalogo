"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

export async function createProduct(data: any) {
  const { error } = await supabase
    .from("products")
    .insert(data);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/productos");
}