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

  return (
  <div className="mt-10">

    <a
      href={createWhatsAppLink(
        product.name,
        product.price,
        product.slug
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-lime-400
        px-8
        py-5
        text-lg
        font-bold
        text-black
        transition
        hover:scale-[1.02]
      "
    >
      <MessageCircle size={22} />

      Comprar por WhatsApp
    </a>

    <ShareButton
      title={product.name}
      slug={product.slug}
    />

  </div>
)
};