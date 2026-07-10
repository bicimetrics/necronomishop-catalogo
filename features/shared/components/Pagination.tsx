"use client";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: Props) {

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-between">

      <button
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="
          rounded-lg
          border
          border-zinc-700
          px-4
          py-2
          disabled:opacity-40
        "
      >
        Anterior
      </button>

      <span className="text-sm text-zinc-400">
        Página {page} de {totalPages}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="
          rounded-lg
          border
          border-zinc-700
          px-4
          py-2
          disabled:opacity-40
        "
      >
        Siguiente
      </button>

    </div>
  );

}