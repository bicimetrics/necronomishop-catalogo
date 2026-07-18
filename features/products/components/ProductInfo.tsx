import {
  BadgeCheck,
  Package,
  Sparkles,
  AlertTriangle,
  XCircle,
} from "lucide-react";

import { Product } from "@/features/products/types/product.types";
import StockBadge from "./StockBadge";
import Image from "next/image";

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {

  const hasStock = product.stock > 0;
  const lowStock = product.stock > 0 && product.stock <= 3;

  return (
    <div className="space-y-10">

      {product.badge && (
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-lime-400
            px-4
            py-2
            text-sm
            font-bold
            text-black
          "
        >
          <Sparkles size={16} />

          {product.badge}
        </div>
      )}

      <div>

        <h1 className="text-5xl font-black leading-tight">

          {product.name}

        </h1>

        <p className="mt-3 text-zinc-500">

          Coleccionismo Retro y Actual

        </p>

      </div>

      <div className="space-y-2">

        <span className="text-sm uppercase tracking-widest text-zinc-500">

          Precio

        </span>

        <div className="text-5xl font-black text-lime-400">

          ${product.price.toLocaleString("es-CL")}

        </div>

      </div>

      <div
        className="
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900/40
          p-5
        "
      >

        <div className="flex items-center gap-3">

          {hasStock ? (
            lowStock ? (
              <>
                <AlertTriangle
                  className="text-yellow-400"
                  size={22}
                />

                <div>

                  <p className="font-semibold text-yellow-400">

                    Últimas unidades

                  </p>

                 <div className="mt-2">
  <StockBadge stock={product.stock} />
</div>

                </div>

              </>
            ) : (
              <>
                <BadgeCheck
                  className="text-lime-400"
                  size={22}
                />

                <div>

                  <p className="font-semibold text-lime-400">

                    Disponible

                  </p>

                  <p className="text-sm text-zinc-400">

                   <StockBadge stock={product.stock} />

                  </p>

                </div>

              </>
            )
          ) : (
            <>
              <XCircle
                className="text-red-500"
                size={22}
              />

              <div>

                <p className="font-semibold text-red-500">

                  Agotado

                </p>

                <p className="text-sm text-zinc-400">

                  Actualmente sin stock

                </p>

              </div>

            </>
          )}

        </div>

      </div>

      <div>

        <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">

          <Package size={18} />

          Descripción

        </h2>

        <p className="leading-8 text-zinc-400">

          {product.description}

        </p>

      </div>

    </div>
  );
}