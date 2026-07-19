

interface PendingImage {
  file: File;
  preview: string;
}

interface Props {
  images: PendingImage[];
}

export default function NewImageList({ images }: Props) {
  return (
    <>
      {images.map((image) => (
        <div key={image.preview}>
          {/* moveremos aquí la miniatura */}
        </div>
      ))}
    </>
  );
}