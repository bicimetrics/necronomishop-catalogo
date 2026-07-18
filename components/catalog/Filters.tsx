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

  const chipBase =
    "inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-medium transition-all whitespace-nowrap";

  const chipInactive =
    "border-zinc-700 text-zinc-300 hover:border-lime-400 hover:text-lime-300";

  const chipActive =
    "border-lime-400 bg-lime-400 text-black";

  return (
    <div className="space-y-8">

      {/* ================= CATEGORÍAS ================= */}

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Categorías
        </h3>

        <div className="flex flex-wrap gap-3">

          <Link
            href={buildUrl(
              undefined,
              selectedStock,
              selectedSort
            )}
            className={`${chipBase} ${
              !selectedCategory
                ? chipActive
                : chipInactive
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
              className={`${chipBase} ${
                selectedCategory === category.id
                  ? chipActive
                  : chipInactive
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-b border-zinc-800" />

      {/* ================= STOCK + ORDEN ================= */}

      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

        {/* STOCK */}

        <div>

          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Stock
          </h3>

          <div className="flex flex-wrap gap-3">

            <Link
              href={buildUrl(
                selectedCategory,
                undefined,
                selectedSort
              )}
              className={`${chipBase} ${
                !selectedStock
                  ? chipActive
                  : chipInactive
              }`}
            >
              Todo
            </Link>

            <Link
              href={buildUrl(
                selectedCategory,
                "available",
                selectedSort
              )}
              className={`${chipBase} ${
                selectedStock === "available"
                  ? chipActive
                  : chipInactive
              }`}
            >
              Disponible
            </Link>

            <Link
              href={buildUrl(
                selectedCategory,
                "low",
                selectedSort
              )}
              className={`${chipBase} ${
                selectedStock === "low"
                  ? chipActive
                  : chipInactive
              }`}
            >
              Poco stock
            </Link>

            <Link
              href={buildUrl(
                selectedCategory,
                "empty",
                selectedSort
              )}
              className={`${chipBase} ${
                selectedStock === "empty"
                  ? chipActive
                  : chipInactive
              }`}
            >
              Agotado
            </Link>

          </div>
        </div>

        {/* ORDEN */}

        <form
          method="GET"
          className="flex w-full flex-col gap-3 lg:w-72"
        >

          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Ordenar por
          </label>

          <div className="flex gap-2">

            <select
              name="sort"
              defaultValue={selectedSort}
              className="h-10 flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-3 text-sm text-white focus:border-lime-400 focus:outline-none"
            >
              <option value="">Más recientes</option>
              <option value="oldest">Más antiguos</option>
              <option value="priceAsc">Precio ↑</option>
              <option value="priceDesc">Precio ↓</option>
              <option value="nameAsc">Nombre A-Z</option>
              <option value="nameDesc">Nombre Z-A</option>
            </select>

            <button
              type="submit"
              className="h-10 rounded-xl bg-lime-400 px-5 text-sm font-semibold text-black transition hover:bg-lime-300"
            >
              Aplicar
            </button>

          </div>

          {search && (
            <input
              type="hidden"
              name="search"
              value={search}
            />
          )}

          {selectedCategory && (
            <input
              type="hidden"
              name="category"
              value={selectedCategory}
            />
          )}

          {selectedStock && (
            <input
              type="hidden"
              name="stock"
              value={selectedStock}
            />
          )}

        </form>

      </div>

    </div>
  );
}