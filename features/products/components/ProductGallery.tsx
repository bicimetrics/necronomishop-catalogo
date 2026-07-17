import Image from "next/image";

import { Product } from "@/types/product";

import { getImageUrl } from "../services/image.service";

interface Props {
  product: Product;
}

export default function ProductGallery({
  product,
}: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-[#111]
      "
    >
      <Image
        src={getImageUrl(product.image)}
        alt={product.name}
        width={900}
        height={900}
        priority
        className="
          aspect-square
          w-full
          object-cover
        "
      />
    </div>
  );
}