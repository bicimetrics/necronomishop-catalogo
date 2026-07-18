import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";

import { Product } from "@/features/products/types/product.types";
import { getImageUrl } from "@/features/products/services/image.service";

import DeleteButton from "./DeleteButton";
import StockBadge from "./StockBadge";

interface Props {
  product: Product & {
    categories?: {
      name: string;
    };
  };
}

export default function ProductRow({ product }: Props) {
  return (
    <tr className="border-t border-zinc-800 transition hover:bg-zinc-900/40">
      <td className="p-5">
        <div className="flex items-center gap-4">
          <Image
            src={getImageUrl(product.image)}
            alt={product.name}
            width={70}
            height={70}
            className="rounded-xl object-cover"
            style={{
              width: "70px",
              height: "70px",
            }}
          />

          <div>
            <h3 className="font-semibold">
              {product.name}
            </h3>

            <p className="text-sm text-zinc-500">
              {product.slug}
            </p>
          </div>
        </div>
      </td>

      <td className="font-semibold text-lime-400">
        ${product.price.toLocaleString("es-CL")}
      </td>

      <td>
        {product.stock}
      </td>

      <td>
        {product.categories?.name ?? "-"}
      </td>

      <td>
        <StockBadge stock={product.stock} />  
      </td>

      <td>
        <div className="flex items-center gap-2">

          <Link href={`/admin/productos/${product.id}`}>
            <button
              className="
                rounded-lg
                p-2
                transition
                hover:bg-zinc-800
              "
              title="Editar producto"
            >
              <Pencil size={18} />
            </button>
          </Link>

          <DeleteButton
           id={product.id}
          />

        </div>
      </td>
    </tr>
  );
}