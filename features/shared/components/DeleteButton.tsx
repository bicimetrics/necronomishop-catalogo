"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";

interface Props {

  id: number;

  onDelete: (id: number) => Promise<void>;

  confirmMessage?: string;

}

export default function DeleteButton({

  id,

  onDelete,

  confirmMessage = "¿Eliminar este registro?",

}: Props) {

  const [pending, startTransition] =
    useTransition();

  function handleDelete() {

    if (!confirm(confirmMessage)) return;

    startTransition(async () => {

      await onDelete(id);

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