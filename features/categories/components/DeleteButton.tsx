"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";

import { deleteCategory } from "../actions/deleteCategory";

interface Props {
  id: number;
}

export default function DeleteButton({
  id,
}: Props) {

  const [pending, startTransition] =
    useTransition();

  function handleDelete() {

    if (!confirm("¿Eliminar categoría?")) {
      return;
    }

    startTransition(async () => {

      await deleteCategory(id);

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
      "
    >
      <Trash2 size={18}/>
    </button>
  );

}