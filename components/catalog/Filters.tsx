import Link from "next/link";

import { getCategories } from "@/features/categories/repositories/category.repository";
import { ProductStockFilter } from "@/features/products/types/product-filter.types";

interface Props {
  selectedCategory?: number;
  selectedStock?: ProductStockFilter;
  search?: string;
}

export default async function Filters({
  selectedCategory,
  selectedStock,
  search,
}: Props) {

  const categories = await getCategories();

  function buildUrl(
  categoryId?: number,
  stock?: ProductStockFilter
) {
  const params = new URLSearchParams();

  if (search) {
    params.set("search", search);
  }

  if (categoryId) {
    params.set("category", categoryId.toString());
  }

  if (stock) {
    params.set("stock", stock);
  }

  const query = params.toString();

  return query ? `/?${query}` : "/";
}

  return (
  <>
    {/* Categorías */}
    <div className="flex gap-3 overflow-auto pb-3">
      <Link
        href={buildUrl()}
        className={`rounded-full border px-5 py-2.5 transition ${
          !selectedCategory
            ? "border-lime-400 bg-lime-400 text-black"
            : "border-zinc-700 hover:border-lime-400 hover:text-lime-400"
        }`}
      >
        Todos
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={buildUrl(category.id)}
          className={`rounded-full border px-5 py-2.5 whitespace-nowrap transition ${
            selectedCategory === category.id
              ? "border-lime-400 bg-lime-400 text-black"
              : "border-zinc-700 hover:border-lime-400 hover:text-lime-400"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>

    {/* Stock */}
    <div className="mt-6 flex gap-3 overflow-auto">
      <Link
        href={buildUrl(selectedCategory)}
        className={`rounded-full border px-5 py-2.5 transition ${
          !selectedStock
            ? "border-lime-400 bg-lime-400 text-black"
            : "border-zinc-700 hover:border-lime-400 hover:text-lime-400"
        }`}
      >
        Todo el stock
      </Link>

      <Link
        href={buildUrl(selectedCategory, "available")}
        className={`rounded-full border px-5 py-2.5 transition ${
          selectedStock === "available"
            ? "border-lime-400 bg-lime-400 text-black"
            : "border-zinc-700 hover:border-lime-400 hover:text-lime-400"
        }`}
      >
        Disponibles
      </Link>

      <Link
        href={buildUrl(selectedCategory, "low")}
        className={`rounded-full border px-5 py-2.5 transition ${
          selectedStock === "low"
            ? "border-lime-400 bg-lime-400 text-black"
            : "border-zinc-700 hover:border-lime-400 hover:text-lime-400"
        }`}
      >
        Poco stock
      </Link>

      <Link
        href={buildUrl(selectedCategory, "empty")}
        className={`rounded-full border px-5 py-2.5 transition ${
          selectedStock === "empty"
            ? "border-lime-400 bg-lime-400 text-black"
            : "border-zinc-700 hover:border-lime-400 hover:text-lime-400"
        }`}
      >
        Agotados
      </Link>
  </div>
  </>
);
}