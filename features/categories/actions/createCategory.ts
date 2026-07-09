"use server";

import { supabase } from "@/lib/supabase";

import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";

import { Category } from "../types/category.types";

export async function createCategory(
  category: Category
) {

  const { error } =
    await supabase
      .from("categories")
      .insert(category);

  if(error) throw error;

  revalidatePath("/admin/categorias");

  redirect("/admin/categorias");

}