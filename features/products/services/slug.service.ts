import { supabase } from "@/lib/supabase";

function normalizeSlug(text: string): string {

  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

}

export async function generateUniqueSlug(
  name: string
): Promise<string> {

  const baseSlug = normalizeSlug(name);

  let slug = baseSlug;

  let counter = 2;

  while (true) {

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

    if (!data) {

      return slug;

    }

    slug = `${baseSlug}-${counter}`;

    counter++;

  }

}