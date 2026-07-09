"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Product } from "../types/product.types";

export async function createProduct(data: Product) {
  console.log("Datos recibidos:", data);

  const { data: inserted, error } = await supabase
    .from("products")
    .insert({
      ...data,
      created_at: new Date().toISOString(),
    })
    .select();

  if (error) {
    console.error("Supabase INSERT ERROR:", error);
    throw error;
  }

  console.log("Producto creado:", inserted);

  revalidatePath("/");
  revalidatePath("/admin/productos");

  redirect("/admin/productos");
}