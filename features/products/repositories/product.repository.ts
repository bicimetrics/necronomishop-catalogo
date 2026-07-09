import { supabase } from "@/lib/supabase";
import { Product } from "../types/product.types";
import { ProductFilters } from "../types/product-filter.types";

export async function getProducts(
  filters?: ProductFilters
) {

  let query = supabase
    .from("products")
    .select(`
      *,
      categories(
        name
      )
    `);

  // Buscar por nombre
  if (filters?.search) {

    query = query.ilike(
      "name",
      `%${filters.search}%`
    );

  }

  // Filtrar categoría
  if (filters?.categoryId) {

    query = query.eq(
      "category_id",
      filters.categoryId
    );

  }

  // Filtrar stock
  switch (filters?.stock) {

    case "available":

      query = query.gt("stock", 5);

      break;

    case "low":

      query = query
        .gt("stock", 0)
        .lte("stock", 5);

      break;

    case "empty":

      query = query.eq("stock", 0);

      break;

  }

  // Ordenamiento
  switch (filters?.sort) {

    case "oldest":

      query = query.order(
        "created_at",
        {
          ascending: true,
        }
      );

      break;

    case "priceAsc":

      query = query.order(
        "price",
        {
          ascending: true,
        }
      );

      break;

    case "priceDesc":

      query = query.order(
        "price",
        {
          ascending: false,
        }
      );

      break;

    case "nameAsc":

      query = query.order(
        "name",
        {
          ascending: true,
        }
      );

      break;

    case "nameDesc":

      query = query.order(
        "name",
        {
          ascending: false,
        }
      );

      break;

    default:

      query = query.order(
        "created_at",
        {
          ascending: false,
        }
      );

  }

  const { data, error } = await query;

  if (error) {

    throw error;

  }

  return data;

}

export async function getProduct(id: number) {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories(name)
    `)
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createProductRepository(product: Product) {
  const { error } = await supabase
    .from("products")
    .insert(product);

  if (error) throw error;
}

export async function updateProductRepository(
  id: number,
  product: Product
) {
  const { error } = await supabase
    .from("products")
    .update({
      name: product.name,
      slug: product.slug,
      description: product.description,
      price: product.price,
      stock: product.stock,
      badge: product.badge,
      image: product.image,
      category_id: product.category_id,
    })
    .eq("id", id);

  if (error) throw error;
}

export async function deleteProductRepository(id: number) {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) throw error;
}