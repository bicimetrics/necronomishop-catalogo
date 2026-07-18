import Header from "@/components/catalog/Header";
import ProductCatalog from "@/components/catalog/ProductCatalog";

import { findProducts } from "@/features/products/services/product.service";

interface Props {
  searchParams: Promise<{
    search?: string;
    category?: string;
    stock?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function Home({
  searchParams,
}: Props) {

  const params = await searchParams;

  const validSorts = [
    "newest",
    "oldest",
    "priceAsc",
    "priceDesc",
    "nameAsc",
    "nameDesc",
  ] as const;

  const validStocks = [
    "available",
    "low",
    "empty",
  ] as const;

  const stock = validStocks.includes(
    params.stock as (typeof validStocks)[number]
  )
    ? (params.stock as (typeof validStocks)[number])
    : undefined;

  const sort = validSorts.includes(
    params.sort as (typeof validSorts)[number]
  )
    ? (params.sort as (typeof validSorts)[number])
    : undefined;

  const result = await findProducts({
    search: params.search,
    categoryId: params.category
      ? Number(params.category)
      : undefined,
    stock,
    sort,
    page: params.page
      ? Number(params.page)
      : undefined,
  });

  return (
    <main className="min-h-screen bg-[#090909] text-white">

      <Header />

      <ProductCatalog
        products={result.data}
        page={result.page}
        totalPages={result.totalPages}
        search={params.search}
        selectedCategory={
          params.category
            ? Number(params.category)
            : undefined
        }
        selectedStock={stock}
        selectedSort={sort}
      />

    </main>
  );
}