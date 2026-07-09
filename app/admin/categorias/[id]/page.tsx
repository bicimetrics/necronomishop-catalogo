import Header from "@/components/admin/layout/Header";

import CategoryForm from "@/features/categories/components/CategoryForm";

import {
  getCategory,
} from "@/features/categories/repositories/category.repository";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditarCategoriaPage({
  params,
}: Props) {

  const { id } = await params;

  const category =
    await getCategory(Number(id));

  return (
    <>
      <Header
        title="Editar categoría"
        subtitle={`Editando: ${category.name}`}
      />

      <CategoryForm
        category={category}
      />
    </>
  );
}