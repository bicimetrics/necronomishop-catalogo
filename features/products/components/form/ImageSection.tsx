import ImageUploader from "@/components/admin/ui/ImageUploader";

interface Props {
  onChange: (file: File | null) => void;
}

export default function ImageSection({
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#111] p-8">

      <h2 className="mb-2 text-xl font-bold">
        Imagen
      </h2>

      <p className="mb-6 text-sm text-zinc-400">
        La imagen es <span className="font-semibold text-red-400">obligatoria</span> para crear un producto.
      </p>

      <ImageUploader
        onChange={onChange}
      />

      <p className="mt-4 text-xs text-zinc-500">
        Formatos permitidos: JPG, PNG y WEBP.
      </p>

    </div>
  );
}