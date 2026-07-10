import Link from "next/link";

import { getCategories } from "@/features/categories/repositories/category.repository";

interface Props {
  selectedCategory?: number;
  search?: string;
}

export default async function Filters({
  selectedCategory,
  search,
}: Props) {

  const categories = await getCategories();

  function buildUrl(categoryId?: number) {

    const params = new URLSearchParams();

    if (search) {
      params.set("search", search);
    }

    if (categoryId) {
      params.set("category", categoryId.toString());
    }

    const query = params.toString();

    return query ? `/?${query}` : "/";
  }

  return (

    <div className="flex gap-3 overflow-auto pb-3">

      <Link
        href={buildUrl()}
        className={`
          rounded-full
          border
          px-5
          py-2.5
          transition
          ${
            !selectedCategory
              ? "border-lime-400 bg-lime-400 text-black"
              : "border-zinc-700 hover:border-lime-400 hover:text-lime-400"
          }
        `}
      >
        Todos
      </Link>

      {categories.map((category) => (

        <Link
          key={category.id}
          href={buildUrl(category.id)}
          className={`
            rounded-full
            border
            px-5
            py-2.5
            whitespace-nowrap
            transition
            ${
              selectedCategory === category.id
                ? "border-lime-400 bg-lime-400 text-black"
                : "border-zinc-700 hover:border-lime-400 hover:text-lime-400"
            }
          `}
        >
          {category.name}
        </Link>

      ))}

    </div>

  );

}