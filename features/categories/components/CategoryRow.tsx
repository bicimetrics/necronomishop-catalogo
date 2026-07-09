import Link from "next/link";
import { Pencil } from "lucide-react";

import DeleteButton from "./DeleteButton";

import { Category } from "../types/category.types";

interface Props {
  category: Category & {
    products?: {
      count: number;
    }[];
  };
}

export default function CategoryRow({
  category,
}: Props) {

  return (
    <tr className="border-t border-zinc-800 hover:bg-zinc-900/40">

      <td className="p-5 font-semibold">
        {category.name}
      </td>

      <td>
        {category.slug}
      </td>

      <td>
        {category.description}
      </td>

      <td>
        {category.products?.[0]?.count ?? 0}
      </td>

      <td>

        <div className="flex gap-2">

          <Link
            href={`/admin/categorias/${category.id}`}
          >
            <button
              className="
              rounded-lg
              p-2
              hover:bg-zinc-800
              "
            >
              <Pencil size={18} />
            </button>
          </Link>

          <DeleteButton
            id={category.id!}
          />

        </div>

      </td>

    </tr>
  );

}