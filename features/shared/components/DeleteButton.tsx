"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";

import { ActionResult } from "../types/action-result.types";

import * as notification from "../services/notification.service";

import DeleteConfirmDialog from "./DeleteConfirmDialog";

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

  function executeDelete() {

    startTransition(async () => {

      const result = await onDelete(id);

      if (!result.success) {

        notification.error(
          result.message ??
          "No fue posible eliminar el registro."
        );

        return;
      }

      notification.success(
        "Registro eliminado correctamente."
      );

    });

  }

  return (

    <DeleteConfirmDialog
      title="Eliminar registro"
      description={confirmMessage}
      onConfirm={executeDelete}
    >

      <button
        type="button"
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

    </DeleteConfirmDialog>

  );

}