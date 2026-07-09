"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Product } from "../types/product.types";
import { generateSlug } from "@/features/shared/utils/slug";

export async function createProduct(data: Product) {
  // Generar slug base desde el nombre
  const baseSlug = generateSlug(data.name);

  let slug = baseSlug;
  let counter = 2;

  // Buscar un slug disponible
  while (true) {
    const { data: existing, error } = await supabase
      .from("products")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (!existing) {
      break;
    }

    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  // Insertar producto
  const { error } = await supabase
    .from("products")
    .insert({
      ...data,
      slug,
      created_at: new Date().toISOString(),
    });

  if (error) {
    throw error;
  }

  revalidatePath("/");
  revalidatePath("/admin/productos");

  redirect("/admin/productos");
}