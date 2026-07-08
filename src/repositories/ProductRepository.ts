import { supabase } from "@/src/lib/supabase";
import { Product } from "@/src/types/product";

export default class ProductRepository {

  static async getAll(): Promise<Product[]> {

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

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