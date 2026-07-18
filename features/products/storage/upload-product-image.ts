import { supabase } from "@/lib/supabase";

const BUCKET = "products";

export async function uploadProductImage(
  file: File
): Promise<string> {

  const extension =
    file.name.split(".").pop();

  const filename =
    `${crypto.randomUUID()}.${extension}`;

  const path =
    `products/${filename}`;

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, file);

  if (error) {
    throw error;
  }

  return path;
}