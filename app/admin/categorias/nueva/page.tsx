import Header from "@/components/admin/layout/Header";

import CategoryForm from "@/features/categories/components/CategoryForm";

export default function NuevaCategoriaPage() {
  return (
    <>
      <Header
        title="Nueva categoría"
        subtitle="Crea una nueva categoría."
      />

      <CategoryForm />
    </>
  );
}