"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";

import { ActionResult }
from "../types/action-result.types";

interface Props {

  id: number;

  onDelete: (
    id: number
  ) => Promise<ActionResult>;

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

      const result =
        await onDelete(id);

      if (!result.success) {

        alert(result.message);

        return;

      }

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
        transition
        hover:bg-red-500/10
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >

      <Trash2 size={18} />

    </button>

  );

}