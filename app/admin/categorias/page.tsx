import Header from "@/components/admin/layout/Header";

import CategoryToolbar from "@/features/categories/components/CategoryToolbar";
import CategoryTable from "@/features/categories/components/CategoryTable";

export default function CategoriasPage() {

  return (
    <>
      <Header
        title="Categorías"
        subtitle="Administra las categorías."
      />

      <CategoryToolbar />

      <CategoryTable />
    </>
  );
}