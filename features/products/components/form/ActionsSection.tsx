import Button from "@/components/admin/ui/Button";

export default function ActionsSection() {
  return (
    <div className="flex justify-end gap-4">

      <Button
        type="button"
        variant="secondary"
      >
        Cancelar
      </Button>

      <Button type="submit">
        Guardar producto
      </Button>

    </div>
  );
}