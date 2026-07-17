import { Package, Sparkles } from "lucide-react";

import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductInfo({
  product,
}: Props) {

  const stockColor =
    product.stock > 0
      ? "text-lime-400"
      : "text-red-400";

  return (

    <div className="space-y-8">

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

          <Sparkles size={16}/>

          {product.badge}

        </div>

      )}

      <div>

        <h1 className="text-5xl font-black">

          {product.name}

        </h1>

        <p className="mt-3 text-zinc-500">

          Colección Necronomishop

        </p>

      </div>

      <div>

        <p className="text-zinc-500">

          Precio

        </p>

        <p className="mt-2 text-5xl font-black text-lime-400">

          ${product.price.toLocaleString("es-CL")}

        </p>

      </div>

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <Package
          size={20}
          className={stockColor}
        />

        <span className={stockColor}>

          {product.stock > 0
            ? `${product.stock} disponibles`
            : "Agotado"}

        </span>

      </div>

      <div>

        <h2 className="mb-3 font-semibold">

          Descripción

        </h2>

        <p className="leading-8 text-zinc-400">

          {product.description}

        </p>

      </div>

    </div>

  );

}