import { MessageCircle } from "lucide-react";

import { Product } from "@/features/products/types/product.types";
import ShareButton from "@/features/shared/components/ShareButton";

import {
  createWhatsAppLink,
} from "@/features/shared/utils/whatsapp";

interface Props {
  product: Product;
}

export default function ProductBuyBox({
  product,
}: Props) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="mt-10">
      <a
        href={
          isOutOfStock
            ? undefined
            : createWhatsAppLink(
                product.name,
                product.price,
                product.slug
              )
        }
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={isOutOfStock}
        className={`
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          px-8
          py-5
          text-lg
          font-bold
          transition
          ${
            isOutOfStock
              ? "pointer-events-none bg-zinc-700 text-zinc-400"
              : "bg-lime-400 text-black hover:scale-[1.02]"
          }
        `}
      >
        <MessageCircle size={22} />

        {isOutOfStock
          ? "Producto agotado"
          : "Comprar por WhatsApp"}
      </a>

      <ShareButton
        title={product.name}
        slug={product.slug}
      />
    </div>
  );
}