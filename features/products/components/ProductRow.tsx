import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  product: any;
}

export default function ProductRow({ product }: Props) {

  return (

    <tr className="border-t border-zinc-800 hover:bg-zinc-900/40 transition">

      <td className="p-5">

        <div className="flex items-center gap-4">

          <Image
            src={product.image}
            alt={product.name}
            width={70}
            height={70}
            className="rounded-xl object-cover"
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

        {product.categories?.name}

      </td>

      <td>

        <span
          className="
          rounded-full
          bg-lime-400/10
          px-3
          py-1
          text-xs
          text-lime-400
          "
        >

          Disponible

        </span>

      </td>

      <td>

        <div className="flex gap-3">

          <Link href={`/admin/productos/${product.id}`}>

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

          <button
            className="
            rounded-lg
            p-2
            text-red-400
            hover:bg-red-500/10
            "
          >

            <Trash2 size={18} />

          </button>

        </div>

      </td>

    </tr>

  );

}