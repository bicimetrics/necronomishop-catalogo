import Button from "@/components/admin/ui/Button";

interface Props {
  loading?: boolean;

  submitText: string;

  cancelText?: string;

  onCancel?: () => void;
}

export default function FormActions({
  loading = false,
  submitText,
  cancelText = "Cancelar",
  onCancel,
}: Props) {
  return (
    <div className="flex justify-end gap-4">

      <Button
        type="button"
        variant="secondary"
        onClick={onCancel}
      >
        {cancelText}
      </Button>

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Guardando..."
          : submitText}
      </Button>

    </div>
  );
}