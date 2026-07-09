import { supabase } from "@/lib/supabase";

import { DashboardStats } from "../types/dashboard.types";

import { Product } from "@/features/products/types/product.types";

export async function getLatestProducts(): Promise<Product[]> {

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories(
        name
      )
    `)
    .order("created_at", {
      ascending: false,
    })
    .limit(5);

  if (error) throw error;

  return data as Product[];

}

export async function getLowStockProducts(): Promise<Product[]> {

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories(
        name
      )
    `)
    .lte("stock", 5)
    .order("stock", {
      ascending: true,
    })
    .limit(5);

  if (error) {
    throw error;
  }

  return (data ?? []) as Product[];

}

export async function getDashboardStats(): Promise<DashboardStats> {

  // Total productos
  const {
    count: totalProducts,
    error: productsError,
  } = await supabase
    .from("products")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (productsError) {
    throw productsError;
  }

  // Total categorías
  const {
    count: totalCategories,
    error: categoriesError,
  } = await supabase
    .from("categories")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (categoriesError) {
    throw categoriesError;
  }

  // Productos con stock bajo
  const {
    count: lowStock,
    error: stockError,
  } = await supabase
    .from("products")
    .select("*", {
      count: "exact",
      head: true,
    })
    .lte("stock", 5);

  if (stockError) {
    throw stockError;
  }

  // Productos sin imagen
  const {
    count: noImage,
    error: imageError,
  } = await supabase
    .from("products")
    .select("*", {
      count: "exact",
      head: true,
    })
    .or("image.is.null,image.eq.");

  if (imageError) {
    throw imageError;
  }

  return {
    totalProducts: totalProducts ?? 0,
    totalCategories: totalCategories ?? 0,
    lowStock: lowStock ?? 0,
    noImage: noImage ?? 0,
  };

}