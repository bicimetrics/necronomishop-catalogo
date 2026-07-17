"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { Product } from "@/features/products/types/product.types";
import { getImageUrl } from "../services/image.service";

interface Props {
  product: Product;
}

export default function ProductGallery({
  product,
}: Props) {

  const images = useMemo(
    () => [product.image],
    [product.image]
  );

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (

    <div className="space-y-6">

      <div
        className="
          group
          overflow-hidden
          rounded-3xl
          border
          border-zinc-800
          bg-[#111]
          shadow-2xl
        "
      >

        <Image
          src={getImageUrl(selectedImage)}
          alt={product.name}
          width={900}
          height={900}
          priority
          className="
            aspect-square
            w-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-110
          "
        />

      </div>

      <div
        className="
          flex
          gap-4
          overflow-x-auto
          pb-1
        "
      >

        {images.map((image, index) => {

          const active =
            image === selectedImage;

          return (

            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`
                relative
                overflow-hidden
                rounded-2xl
                transition-all
                duration-300

                ${
                  active
                    ? "ring-2 ring-lime-400"
                    : "opacity-70 hover:opacity-100"
                }
              `}
            >

              <Image
                src={getImageUrl(image)}
                alt={`${product.name} ${index + 1}`}
                width={96}
                height={96}
                className="
                  h-24
                  w-24
                  object-cover
                "
              />

            </button>

          );

        })}

      </div>

    </div>

  );

}