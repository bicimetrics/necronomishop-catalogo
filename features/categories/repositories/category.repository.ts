import { supabase } from "@/lib/supabase";

import { Category } from "../types/category.types";

export async function getCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select(`
      *,
      products(count)
    `)
    .order("name");

  if (error) throw error;

  return data;
}

export async function getCategory(id: number) {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createCategoryRepository(
  category: Category
) {
  const { error } = await supabase
    .from("categories")
    .insert(category);

  if (error) throw error;
}

export async function updateCategoryRepository(
  id: number,
  category: Category
) {
  const { error } = await supabase
    .from("categories")
    .update(category)
    .eq("id", id);

  if (error) throw error;
}

export async function deleteCategoryRepository(
  id: number
) {
  const { error } = await supabase
    .from("categories")
    .delete()
    .eq("id", id);

  if (error) throw error;
}