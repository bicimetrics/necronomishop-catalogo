import Image from "next/image";
import { MessageCircle, Package, Sparkles } from "lucide-react";
import { Product } from "@/types/product";

const WHATSAPP = "569XXXXXXXX";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const mensaje = encodeURIComponent(`Hola 👋

Me interesa este producto.

${product.name}

Precio: $${product.price.toLocaleString("es-CL")}

¿Sigue disponible?`);

  const stockColor =
    product.stock === 0
      ? "text-red-400"
      : product.stock === 1
      ? "text-orange-400"
      : "text-lime-400";

  const stockText =
    product.stock === 0
      ? "Agotado"
      : product.stock === 1
      ? "Última unidad"
      : `${product.stock} disponibles`;

  return (
    <article
      className="
      group
      overflow-hidden
      rounded-[28px]
      border
      border-zinc-800
      bg-[#101010]
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-lime-400
      hover:shadow-[0_30px_70px_rgba(163,255,18,.12)]
      "
    >
      {/* Imagen */}

      <div className="relative overflow-hidden">

        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={900}
          priority
          className="
          aspect-[4/5]
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

        {/* Gradiente */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/40
          via-transparent
          to-transparent
          "
        />

        {/* Badge */}

        {product.badge && (
          <div
            className="
            absolute
            left-5
            top-5
            flex
            items-center
            gap-2
            rounded-full
            bg-lime-400
            px-4
            py-2
            text-xs
            font-bold
            text-black
            "
          >
            <Sparkles size={14} />

            {product.badge}
          </div>
        )}
      </div>

      {/* Información */}

      <div className="space-y-7 p-7">

        <div>

          <h3 className="text-2xl font-bold leading-tight">

            {product.name}

          </h3>

          <p className="mt-2 text-sm text-zinc-500">

           Colección Necronomishop

          </p>

        </div>

        {/* Precio */}

        <div>

          <p className="text-xs uppercase tracking-[4px] text-zinc-500">

            Precio

          </p>

          <p className="mt-2 text-5xl font-black text-lime-400">

            ${product.price.toLocaleString("es-CL")}

          </p>

        </div>

        {/* Stock */}

        <div
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          bg-zinc-900
          px-4
          py-4
          "
        >
          <Package
            className={stockColor}
            size={20}
          />

          <div>

            <p className="text-xs uppercase tracking-wider text-zinc-500">

              Disponibilidad

            </p>

            <p className={`font-semibold ${stockColor}`}>

              {stockText}

            </p>

          </div>

        </div>

        {/* Botón */}

        <a
          href={`https://wa.me/${WHATSAPP}?text=${mensaje}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex
          h-14
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-gradient-to-r
          from-lime-400
          to-lime-500
          font-bold
          text-black
          transition-all
          duration-300
          hover:scale-[1.02]
          active:scale-95
          "
        >
          <MessageCircle size={22} />

          Comprar por WhatsApp

        </a>

      </div>

    </article>
  );
}