"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {

  children: React.ReactElement;

  title?: string;

  description?: string;

  onConfirm: () => void;

}

export default function DeleteConfirmDialog({

  children,

  title = "¿Eliminar registro?",

  description =
    "Esta acción no se puede deshacer.",

  onConfirm,

}: Props) {

  return (

    <AlertDialog>

      <AlertDialogTrigger
        render={children}
      />

      <AlertDialogContent>

        <AlertDialogHeader>

          <AlertDialogTitle>
            {title}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>

        </AlertDialogHeader>

        <AlertDialogFooter>

          <AlertDialogCancel>
            Cancelar
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700"
          >
            Eliminar
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>

  );

}