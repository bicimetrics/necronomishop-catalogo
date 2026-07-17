import { MessageCircle } from "lucide-react";

import { Product } from "@/features/products/types/product.types";

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

    <a
      href={createWhatsAppLink(
  product.name,
  product.price,
  product.slug
)}
      target="_blank"
      className="
        mt-10
        flex
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

      <MessageCircle size={22}/>

      Comprar por WhatsApp

    </a>

  );

}