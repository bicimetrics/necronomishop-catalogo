"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

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

  if (totalPages <= 1) return null;

  function changePage(newPage: number) {

    if (newPage < 1) return;

    if (newPage > totalPages) return;

    onPageChange(newPage);

  }

  return (

    <div
      className="
        mt-8
        flex
        items-center
        justify-center
        gap-2
      "
    >

      <button
        onClick={() => changePage(page - 1)}
        disabled={page === 1}
        className="
          rounded-xl
          border
          border-zinc-800
          p-2
          transition
          hover:border-lime-400
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >

        <ChevronLeft size={18} />

      </button>

      {Array.from(
        {
          length: totalPages,
        },
        (_, index) => {

          const current = index + 1;

          return (

            <button

              key={current}

              onClick={() =>
                changePage(current)
              }

              className={`
                h-10
                w-10
                rounded-xl
                transition

                ${
                  page === current
                    ? "bg-lime-400 text-black"
                    : "border border-zinc-800 hover:border-lime-400"
                }
              `}
            >

              {current}

            </button>

          );

        }
      )}

      <button
        onClick={() =>
          changePage(page + 1)
        }
        disabled={page === totalPages}
        className="
          rounded-xl
          border
          border-zinc-800
          p-2
          transition
          hover:border-lime-400
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >

        <ChevronRight size={18} />

      </button>

    </div>

  );

}