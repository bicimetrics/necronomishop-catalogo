import Link from "next/link";

import { getCategories } from "@/features/categories/repositories/category.repository";
import {
  ProductSort,
  ProductStockFilter,
} from "@/features/products/types/product-filter.types";


interface Props {
  selectedCategory?: number;
  selectedStock?: ProductStockFilter;
  selectedSort?: ProductSort;
  search?: string;
}

export default async function Filters({
  selectedCategory,
  selectedStock,
  selectedSort,
  search,
}: Props) {

  const categories = await getCategories();

  function buildUrl(
  categoryId?: number,
  stock?: ProductStockFilter,
  sort?: ProductSort
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

  if (sort) {
  params.set("sort", sort);
}

  const query = params.toString();

  return query ? `/?${query}` : "/";
}

  return (
  <>
    {/* Categorías */}
    <div className="flex gap-3 overflow-auto pb-3">
      <Link
        href={buildUrl(
  selectedCategory,
  "available",
  selectedSort
)}
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
          href={buildUrl(
  category.id,
  selectedStock,
  selectedSort
)}
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
        href={buildUrl(
  selectedCategory,
  undefined,
  selectedSort
)}
        className={`rounded-full border px-5 py-2.5 transition ${
          !selectedStock
            ? "border-lime-400 bg-lime-400 text-black"
            : "border-zinc-700 hover:border-lime-400 hover:text-lime-400"
        }`}
      >
        Todo el stock
      </Link>

      <form className="mt-6">
  <label className="mb-2 block text-sm text-zinc-400">
    Ordenar por
  </label>

  <select
    name="sort"
    defaultValue={selectedSort}
    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
    onChange={(e) => {
      e.currentTarget.form?.requestSubmit();
    }}
  >
    <option value="">Más recientes</option>
    <option value="oldest">Más antiguos</option>
    <option value="priceAsc">Precio ↑</option>
    <option value="priceDesc">Precio ↓</option>
    <option value="nameAsc">Nombre A-Z</option>
    <option value="nameDesc">Nombre Z-A</option>
  </select>

  <input
    type="hidden"
    name="search"
    value={search ?? ""}
  />

  <input
    type="hidden"
    name="category"
    value={selectedCategory ?? ""}
  />

  <input
    type="hidden"
    name="stock"
    value={selectedStock ?? ""}
  />
</form>

      <Link
        href={buildUrl(
  selectedCategory,
  "available",
  selectedSort
)}
        className={`rounded-full border px-5 py-2.5 transition ${
          selectedStock === "available"
            ? "border-lime-400 bg-lime-400 text-black"
            : "border-zinc-700 hover:border-lime-400 hover:text-lime-400"
        }`}
      >
        Disponibles
      </Link>

      <Link
        href={buildUrl(
  selectedCategory,
  "available",
  selectedSort
)}
        className={`rounded-full border px-5 py-2.5 transition ${
          selectedStock === "low"
            ? "border-lime-400 bg-lime-400 text-black"
            : "border-zinc-700 hover:border-lime-400 hover:text-lime-400"
        }`}
      >
        Poco stock
      </Link>

      <Link
        href={buildUrl(
  selectedCategory,
  "available",
  selectedSort
)}
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