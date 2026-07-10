import Header from "@/components/admin/layout/Header";

import ProductForm from "@/features/products/components/ProductForm";

import { getCategories } from "@/features/categories/repositories/category.repository";

export default async function NuevoProductoPage() {

  const categories = await getCategories();

  return (
    <>

      <Header
        title="Nuevo producto"
        subtitle="Agrega un nuevo producto al catálogo."
      />

      <ProductForm
        categories={categories}
      />

    </>
  );

}