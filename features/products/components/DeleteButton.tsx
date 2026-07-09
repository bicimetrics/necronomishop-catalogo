"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";

import { deleteProduct } from "../actions/deleteProduct";

interface Props {
  id: number;
}

export default function DeleteButton({
  id,
}: Props) {

  const [pending, startTransition] =
    useTransition();

  function handleDelete() {

    const confirmDelete = window.confirm(
      "¿Eliminar este producto?"
    );

    if (!confirmDelete) return;

    startTransition(async () => {

      await deleteProduct(id);

    });

  }

  return (
    <button
      onClick={handleDelete}
      disabled={pending}
      className="
      rounded-lg
      p-2
      text-red-400
      hover:bg-red-500/10
      disabled:opacity-50
      "
    >
      <Trash2 size={18} />
    </button>
  );
}