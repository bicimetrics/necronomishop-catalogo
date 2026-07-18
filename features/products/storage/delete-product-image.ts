import { supabase } from "@/lib/supabase";

const BUCKET = "products";

export async function deleteProductImageStorage(
  path: string
) {

  const { error } =
    await supabase.storage
      .from(BUCKET)
      .remove([path]);

  if (error) {
    throw error;
  }

}