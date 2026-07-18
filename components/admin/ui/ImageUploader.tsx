"use client";

import Image from "next/image";
import { Upload, X, ImagePlus } from "lucide-react";
import { useRef, useState } from "react";

import { PendingImage } from "@/features/products/types/pending-image.types";

interface Props {
  value?: string[];
  onChange: (files: File[]) => void;
}

export default function ImageUploader({
  value = [],
  onChange,
}: Props) {

  const inputRef = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<PendingImage[]>(
    value.map((image) => ({
      file: {} as File,
      preview: image,
    }))
  );

  function addFiles(files: FileList) {

    const newImages: PendingImage[] = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    const updated = [...images, ...newImages];

    setImages(updated);

    onChange(
      updated
        .filter((image) => image.file instanceof File)
        .map((image) => image.file)
    );

  }

  function removeImage(index: number) {

    const updated = images.filter((_, i) => i !== index);

    setImages(updated);

    onChange(
      updated
        .filter((image) => image.file instanceof File)
        .map((image) => image.file)
    );

  }

  return (

    <div className="space-y-6">

      <label className="block text-sm font-medium text-zinc-300">
        Imágenes
      </label>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="
          flex
          h-40
          w-full
          items-center
          justify-center
          rounded-2xl
          border-2
          border-dashed
          border-zinc-700
          bg-[#111]
          transition
          hover:border-lime-400
        "
      >

        <div className="text-center">

          <ImagePlus
            size={42}
            className="mx-auto mb-4 text-zinc-500"
          />

          <p className="font-semibold">
            Agregar imágenes
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Puedes seleccionar varias al mismo tiempo
          </p>

        </div>

      </button>

      <input
        ref={inputRef}
        hidden
        multiple
        type="file"
        accept="image/*"
        onChange={(e) => {

          if (!e.target.files?.length) return;

          addFiles(e.target.files);

          e.target.value = "";

        }}
      />

      {images.length > 0 && (

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {images.map((image, index) => (

            <div
              key={index}
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800
              "
            >

              <Image
                src={image.preview}
                alt=""
                fill
                className="object-cover"
              />

              {index === 0 && (

                <span
                  className="
                    absolute
                    left-2
                    top-2
                    rounded-lg
                    bg-lime-400
                    px-2
                    py-1
                    text-xs
                    font-bold
                    text-black
                  "
                >
                  PORTADA
                </span>

              )}

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="
                  absolute
                  right-2
                  top-2
                  rounded-full
                  bg-black/70
                  p-2
                "
              >
                <X size={16}/>
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}