import SearchBar from "./SearchBar";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";

import PaginationWrapper from "@/features/products/components/PaginationWrapper";

import { Product } from "@/features/products/types/product.types";
import {
  ProductSort,
  ProductStockFilter,
} from "@/features/products/types/product-filter.types";

interface Props {
  products: Product[];
  page: number;
  totalPages: number;

  search?: string;
  selectedCategory?: number;
  selectedStock?: ProductStockFilter;
  selectedSort?: ProductSort;
}

export default function ProductCatalog({
  products,
  page,
  totalPages,
  search,
  selectedCategory,
  selectedStock,
  selectedSort,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-8 pt-8 pb-16">

      <SearchBar defaultValue={search ?? ""} />

      <div className="mt-8">
        <Filters
          search={search}
          selectedCategory={selectedCategory}
          selectedStock={selectedStock}
          selectedSort={selectedSort}
        />
      </div>

      <div className="mt-10">
        <ProductGrid products={products} />
      </div>

      {totalPages > 1 && (
        <div className="mt-12">
          <PaginationWrapper
            page={page}
            totalPages={totalPages}
          />
        </div>
      )}

    </section>
  );
}