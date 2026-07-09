"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Product } from "../types/product.types";

export async function updateProduct(
  id: number,
  data: Product
) {
  const { error } = await supabase
    .from("products")
    .update({
      ...data,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/");
  revalidatePath("/admin/productos");

  redirect("/admin/productos");
}