"use client";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import CrudToolbar from "@/features/shared/components/CrudToolbar";
import SearchBar from "@/features/shared/components/SearchBar";
import FilterSelect from "@/features/shared/components/FilterSelect";

interface Category {
  id: number;
  name: string;
}

interface Props {
  categories: Category[];
}

export default function ProductToolbar({
  categories,
}: Props) {

  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  function updateFilter(
    key: string,
    value: string
  ) {

    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(
      `${pathname}?${params.toString()}`
    );

  }

  return (

    <div className="mb-8 space-y-4">

      <CrudToolbar
        href="/admin/productos/nuevo"
        label="Nuevo producto"
      />

      <div
        className="
          grid
          gap-4
          lg:grid-cols-4
        "
      >

        <SearchBar
          value={
            searchParams.get("search") ?? ""
          }
          onChange={(value) =>
            updateFilter("search", value)
          }
          placeholder="Buscar producto..."
        />

        <FilterSelect
          value={
            searchParams.get("category") ?? ""
          }
          onChange={(value) =>
            updateFilter("category", value)
          }
          placeholder="Todas las categorías"
          options={categories.map(category => ({
            label: category.name,
            value: category.id,
          }))}
        />

        <FilterSelect
          value={
            searchParams.get("stock") ?? ""
          }
          onChange={(value) =>
            updateFilter("stock", value)
          }
          placeholder="Todo el stock"
          options={[
            {
              label: "Disponible",
              value: "available",
            },
            {
              label: "Stock bajo",
              value: "low",
            },
            {
              label: "Sin stock",
              value: "empty",
            },
          ]}
        />

        <FilterSelect
          value={
            searchParams.get("sort") ?? ""
          }
          onChange={(value) =>
            updateFilter("sort", value)
          }
          placeholder="Más recientes"
          options={[
            {
              label: "Más recientes",
              value: "newest",
            },
            {
              label: "Más antiguos",
              value: "oldest",
            },
            {
              label: "Precio ↑",
              value: "priceAsc",
            },
            {
              label: "Precio ↓",
              value: "priceDesc",
            },
            {
              label: "Nombre A-Z",
              value: "nameAsc",
            },
            {
              label: "Nombre Z-A",
              value: "nameDesc",
            },
          ]}
        />

      </div>

    </div>

  );

}