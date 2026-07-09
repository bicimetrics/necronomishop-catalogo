import { supabase } from "@/lib/supabase";

export async function uploadProductImage(file: File) {
  const extension = file.name.split(".").pop();

  const filename =
    `${crypto.randomUUID()}.${extension}`;

  const { error } = await supabase.storage
    .from("products")
    .upload(filename, file);

  if (error) throw error;

  return filename;
}

export function getImageUrl(path?: string | null) {
  if (!path) {
    return "/placeholder.png";
  }

  // Si ya es una URL completa, la devolvemos tal cual.
  if (path.startsWith("http")) {
    return path;
  }

  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/products/${path}`;
}