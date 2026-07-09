import { supabase } from "@/lib/supabase";

import { DashboardStats } from "../types/dashboard.types";

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