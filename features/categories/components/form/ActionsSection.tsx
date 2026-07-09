import FormActions
from "@/features/shared/components/FormActions";

interface Props {
  loading: boolean;
}

export default function ActionsSection({
  loading,
}: Props) {

  return (
    <FormActions
      loading={loading}
      submitText="Guardar categoría"
    />
  );

}