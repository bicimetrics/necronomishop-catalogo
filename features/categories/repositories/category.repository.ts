import { supabase } from "@/lib/supabase";

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