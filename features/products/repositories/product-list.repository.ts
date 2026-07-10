import { supabase } from "@/lib/supabase";

import { Product } from "../types/product.types";
import { ProductFilters } from "../types/product-filter.types";
import { ProductPagination } from "../types/product-pagination.types";

export async function getProducts(
  filters?: ProductFilters
): Promise<Product[]> {

  let query = supabase
    .from("products")
    .select(`
      *,
      categories(
        name
      )
    `);

  if (filters?.search) {
    query = query.ilike(
      "name",
      `%${filters.search}%`
    );
  }

  if (filters?.categoryId) {
    query = query.eq(
      "category_id",
      filters.categoryId
    );
  }

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

  switch (filters?.sort) {

    case "oldest":
      query = query.order("created_at", {
        ascending: true,
      });
      break;

    case "priceAsc":
      query = query.order("price", {
        ascending: true,
      });
      break;

    case "priceDesc":
      query = query.order("price", {
        ascending: false,
      });
      break;

    case "nameAsc":
      query = query.order("name", {
        ascending: true,
      });
      break;

    case "nameDesc":
      query = query.order("name", {
        ascending: false,
      });
      break;

    default:
      query = query.order("created_at", {
        ascending: false,
      });

  }

  const {
    data,
    error,
  } = await query;

  if (error) throw error;

  return data as Product[];

}

export async function getProductsPaginated(
  filters?: ProductFilters
): Promise<ProductPagination> {

  const page = filters?.page ?? 1;

  const perPage = filters?.perPage ?? 10;

  const from = (page - 1) * perPage;

  const to = from + perPage - 1;

  let query = supabase
    .from("products")
    .select(
      `
      *,
      categories(
        name
      )
      `,
      {
        count: "exact",
      }
    );

  if (filters?.search) {
    query = query.ilike(
      "name",
      `%${filters.search}%`
    );
  }

  if (filters?.categoryId) {
    query = query.eq(
      "category_id",
      filters.categoryId
    );
  }

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

  switch (filters?.sort) {

    case "oldest":
      query = query.order("created_at", {
        ascending: true,
      });
      break;

    case "priceAsc":
      query = query.order("price", {
        ascending: true,
      });
      break;

    case "priceDesc":
      query = query.order("price", {
        ascending: false,
      });
      break;

    case "nameAsc":
      query = query.order("name", {
        ascending: true,
      });
      break;

    case "nameDesc":
      query = query.order("name", {
        ascending: false,
      });
      break;

    default:
      query = query.order("created_at", {
        ascending: false,
      });

  }

  const {
    data,
    error,
    count,
  } = await query.range(from, to);

  if (error) throw error;

  return {
    data: data as Product[],
    total: count ?? 0,
    page,
    perPage,
    totalPages: Math.ceil((count ?? 0) / perPage),
  };

}

export async function getLatestProducts(
  limit = 5
): Promise<Product[]> {

  const products = await getProducts();

  return products.slice(0, limit);

}

export async function getLowStockProducts(): Promise<Product[]> {

  return getProducts({
    stock: "low",
  });

}