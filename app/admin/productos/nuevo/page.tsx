import Header from "@/components/admin/layout/Header";

import ProductForm from "@/features/products/components/ProductForm";

export default function NuevoProductoPage() {
  return (
    <>
      <Header
        title="Nuevo producto"
        subtitle="Agrega un producto al catálogo."
      />

      <ProductForm />
    </>
  );
}