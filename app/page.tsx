import Header from "@/components/catalog/Header";
import Filters from "@/components/catalog/Filters";
import SearchBar from "@/components/catalog/SearchBar";
import ProductGrid from "@/components/catalog/ProductGrid";

import { findProducts } from "@/features/products/services/product.service";

interface Props {
  searchParams: Promise<{
    search?: string;
    category?: string;
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

const sort = validSorts.includes(
  params.sort as (typeof validSorts)[number]
)
  ? (params.sort as (typeof validSorts)[number])
  : undefined;

const products = await findProducts({
  search: params.search,
  categoryId: params.category
    ? Number(params.category)
    : undefined,
  sort,
  page: params.page
    ? Number(params.page)
    : undefined,
});

  return (

    <main className="min-h-screen bg-[#090909] text-white">

      <Header />

      <section className="mx-auto max-w-7xl px-8 pt-8 pb-16">

        <SearchBar
          defaultValue={params.search ?? ""}
        />

        <div className="mt-8">

          <Filters
            search={params.search}
            selectedCategory={
              params.category
                ? Number(params.category)
                : undefined
            }
          />

        </div>

        <div className="mt-10">

          <ProductGrid
            products={products}
            
          />

        </div>

      </section>

    </main>

  );

}