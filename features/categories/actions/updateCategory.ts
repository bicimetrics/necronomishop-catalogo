"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

import { Category } from "../types/category.types";

export async function updateCategory(
  id: number,
  data: Category
) {
  const { error } = await supabase
    .from("categories")
    .update({
      ...data,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/admin/categorias");

  redirect("/admin/categorias");
}