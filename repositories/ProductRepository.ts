import { supabase } from "@/lib/supabase";
import { Product } from "@/types/product";

export async function existsProductSlug(
  slug: string
): Promise<boolean> {

  const {
    data,
    error,
  } = await supabase
    .from("products")
    .select("id")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return !!data;

}
export default class ProductRepository {

  static async getAll(
  filters?: {
    search?: string;
  }
): Promise<Product[]> {

    let query = supabase
  .from("products")
  .select("*");

if (filters?.search) {

  query = query.ilike(
    "name",
    `%${filters.search}%`
  );

}

const {
  data,
  error,
} = await query.order(
  "created_at",
  {
    ascending: false,
  }
);

    if (error) {
      throw error;
    }

    return data as Product[];
  }

  static async getById(id: number) {

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  static async delete(id: number) {

    return await supabase
      .from("products")
      .delete()
      .eq("id", id);

  }

}