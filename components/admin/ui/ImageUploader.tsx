"use client";

import Image from "next/image";
import { Upload, X } from "lucide-react";
import { useRef, useState } from "react";

interface Props {
  value?: string;
  onChange: (file: File | null) => void;
}

export default function ImageUploader({
  value,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(
    value ?? null
  );

  function handleFile(file: File) {
    const url = URL.createObjectURL(file);

    setPreview(url);

    onChange(file);
  }

  return (
    <div className="space-y-4">

      <label className="block text-sm font-medium text-zinc-300">
        Imagen
      </label>

      <div
        onClick={() => inputRef.current?.click()}
        className="
          flex
          h-72
          cursor-pointer
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          border-2
          border-dashed
          border-zinc-700
          bg-[#111]
          transition
          hover:border-lime-400
        "
      >
        {preview ? (
          <div className="relative h-full w-full">

            <Image
              src={preview}
              alt=""
              fill
              className="object-cover"
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();

                setPreview(null);

                onChange(null);
              }}
              className="
                absolute
                right-3
                top-3
                rounded-full
                bg-black/70
                p-2
              "
            >
              <X size={18} />
            </button>

          </div>
        ) : (
          <div className="text-center">

            <Upload
              size={42}
              className="mx-auto mb-4 text-zinc-500"
            />

            <p className="font-semibold">
              Arrastra una imagen
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              o haz clic para seleccionar
            </p>

          </div>
        )}

      </div>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (!e.target.files?.length) return;

          handleFile(e.target.files[0]);
        }}
      />

    </div>
  );
}