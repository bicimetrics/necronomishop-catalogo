interface Props {
  stock: number;
}

export default function StockBadge({
  stock,
}: Props) {
  if (stock <= 0) {
    return (
      <span
        className="
          inline-flex
          items-center
          rounded-full
          bg-red-500/10
          px-3
          py-1
          text-xs
          font-semibold
          text-red-400
        "
      >
        🔴 Agotado
      </span>
    );
  }

  if (stock <= 5) {
    return (
      <span
        className="
          inline-flex
          items-center
          rounded-full
          bg-yellow-500/10
          px-3
          py-1
          text-xs
          font-semibold
          text-yellow-400
        "
      >
        🟡 Últimas unidades
      </span>
    );
  }

  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-lime-400/10
        px-3
        py-1
        text-xs
        font-semibold
        text-lime-400"
      >
        🟢 Disponible
      </span>
    );
}