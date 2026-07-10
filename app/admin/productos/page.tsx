import Header from "@/components/admin/layout/Header";

import ProductToolbar from "@/features/products/components/ProductToolbar";
import ProductTable from "@/features/products/components/ProductTable";
import ProductFilters from "@/features/products/components/ProductFilters";

import { getCategories } from "@/features/categories/repositories/category.repository";

import { ProductFilters as Filters } from "@/features/products/types/product-filter.types";

interface Props {
  searchParams: Promise<{
    search?: string;
    category?: string;
    stock?: string;
    sort?: string;
    page?: string;
    perPage?: string;
  }>;
}

export default async function ProductosPage({
  searchParams,
}: Props) {

  const params = await searchParams;

  const categories = await getCategories();

  const filters: Filters = {

    search: params.search,

    categoryId: params.category
      ? Number(params.category)
      : undefined,

    stock: params.stock as Filters["stock"],

    sort: params.sort as Filters["sort"],

    page: params.page
      ? Number(params.page)
      : 1,

    perPage: params.perPage
      ? Number(params.perPage)
      : 10,

  };

  return (
    <>

      <Header
        title="Productos"
        subtitle="Administra todo el catálogo."
      />

      <ProductToolbar
       categories={categories}
      />

      <ProductTable
        filters={filters}
      />

    </>
  );

}