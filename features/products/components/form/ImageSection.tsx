import ImageUploader from "@/components/admin/ui/ImageUploader";

interface Props {
  onChange: (file: File | null) => void;
}

export default function ImageSection({
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#111] p-8">

      <h2 className="mb-8 text-xl font-bold">
        Imagen
      </h2>

      <ImageUploader
        onChange={onChange}
      />

    </div>
  );
}