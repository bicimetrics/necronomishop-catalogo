"use client";

import { Share2 } from "lucide-react";

interface Props {
  title: string;
  slug: string;
}

export default function ShareButton({
  title,
  slug,
}: Props) {
  async function handleShare() {
    const url = `${window.location.origin}/productos/${slug}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: `¡Mira este producto!`,
          url,
        });

        return;
      } catch {
        return;
      }
    }

    await navigator.clipboard.writeText(url);

    alert("Enlace copiado al portapapeles.");
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="
        mt-4
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-zinc-700
        bg-zinc-900
        px-8
        py-5
        text-lg
        font-semibold
        text-white
        transition
        hover:bg-zinc-800
      "
    >
      <Share2 size={22} />

      Compartir producto
    </button>
  );
}