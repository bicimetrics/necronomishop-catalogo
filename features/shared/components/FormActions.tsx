"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/admin/ui/Button";

interface Props {
  loading?: boolean;
  submitText: string;
  cancelText?: string;
  cancelHref?: string;
  onCancel?: () => void;
}

export default function FormActions({
  loading = false,
  submitText,
  cancelText = "Cancelar",
  cancelHref,
  onCancel,
}: Props) {
  const router = useRouter();

  function handleCancel() {
    if (onCancel) {
      onCancel();
      return;
    }

    if (cancelHref) {
      router.push(cancelHref);
      return;
    }

    router.back();
  }

  return (
    <div className="flex justify-end gap-4">
      <Button
        type="button"
        variant="secondary"
        onClick={handleCancel}
      >
        {cancelText}
      </Button>

      <Button
        type="submit"
        disabled={loading}
      >
        {loading ? "Guardando..." : submitText}
      </Button>
    </div>
  );
}