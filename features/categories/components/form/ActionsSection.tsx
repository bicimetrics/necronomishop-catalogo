import Button from "@/components/admin/ui/Button";

interface Props {
  loading: boolean;
}

export default function ActionsSection({
  loading,
}: Props) {
  return (
    <div className="flex justify-end gap-4">

      <Button
        type="button"
        variant="secondary"
      >
        Cancelar
      </Button>

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Guardando..."
          : "Guardar categoría"}
      </Button>

    </div>
  );
}