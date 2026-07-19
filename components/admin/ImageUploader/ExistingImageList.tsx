import { ExistingImage } from "@/features/products/types/existing-image.types";

interface Props {
  images: ExistingImage[];
}

export default function ExistingImageList({ images }: Props) {
  return (
    <>
      {images.map((image) => (
        <div key={image.id}>
          {/* aquí moveremos la miniatura existente */}
        </div>
      ))}
    </>
  );
}