import Header from "@/components/admin/layout/Header";
import ProductToolbar from "@/features/products/components/ProductToolbar";
import ProductTable from "@/features/products/components/ProductTable";

export default function ProductosPage() {
  return (
    <>
      <Header
        title="Productos"
        subtitle="Administra todo el catálogo de Necronomishop."
      />

      <ProductToolbar />

      <ProductTable />
    </>
  );
}