"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="space-y-6">
        <div
          onClick={() => setIsOpen(true)}
          className="
            group
            cursor-zoom-in
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
            const active = image === selectedImage;

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
                  className="h-24 w-24 object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/90
            p-6
          "
        >
          <button
            onClick={() => setIsOpen(false)}
            className="
              absolute
              right-6
              top-6
              rounded-full
              bg-zinc-900/80
              p-3
              text-white
              transition
              hover:bg-zinc-700
            "
          >
            <X size={26} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-[90vw]"
          >
            <Image
              src={getImageUrl(selectedImage)}
              alt={product.name}
              width={1600}
              height={1600}
              className="
                max-h-[90vh]
                w-auto
                rounded-2xl
                object-contain
              "
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}