import Image from "next/image";
import Link from "next/link";

import { Product } from "../types/product.types";

interface Props {
  products: Product[];
}

export default function RelatedProducts({
  products,
}: Props) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mt-24 border-t border-zinc-800 pt-12">
      <h2 className="mb-8 text-2xl font-bold text-white">
        Productos relacionados
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/productos/${product.slug}`}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              transition
              hover:border-lime-400
            "
          >
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-2 p-4">
              <h3 className="line-clamp-2 font-semibold text-white">
                {product.name}
              </h3>

              <p className="font-bold text-lime-400">
                $
                {product.price.toLocaleString("es-CL")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}