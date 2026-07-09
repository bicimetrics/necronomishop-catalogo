import Header from "@/components/admin/layout/Header";

import ProductToolbar from "@/features/products/components/ProductToolbar";
import ProductTable from "@/features/products/components/ProductTable";

import { getCategories } from "@/features/categories/repositories/category.repository";

interface Props {
  searchParams: Promise<{
    search?: string;
    category?: string;
    stock?: string;
    sort?: string;
  }>;
}

export default async function ProductosPage({
  searchParams,
}: Props) {

  const filters = await searchParams;

  const categories = await getCategories();

  return (
    <>
      <Header
        title="Productos"
        subtitle="Administra todo el catálogo de Necronomishop."
      />

      <ProductToolbar
        categories={categories}
      />

      <ProductTable
        filters={{
          search: filters.search,
          categoryId: filters.category
            ? Number(filters.category)
            : undefined,
          stock: filters.stock as
            | "all"
            | "available"
            | "low"
            | "empty"
            | undefined,
          sort: filters.sort as
            | "newest"
            | "oldest"
            | "priceAsc"
            | "priceDesc"
            | "nameAsc"
            | "nameDesc"
            | undefined,
        }}
      />
    </>
  );
}