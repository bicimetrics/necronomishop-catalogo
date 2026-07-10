import { notFound } from "next/navigation";

import Header from "@/components/admin/layout/Header";

import ProductForm from "@/features/products/components/ProductForm";

import { getProduct } from "@/features/products/repositories/product.repository";

import { getCategories } from "@/features/categories/repositories/category.repository";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditarProductoPage({
  params,
}: Props) {

  const { id } = await params;

  const product =
    await getProduct(Number(id));

  if (!product) {

    notFound();

  }

  const categories =
    await getCategories();

  return (
    <>

      <Header
        title="Editar producto"
        subtitle="Actualiza la información del producto."
      />

      <ProductForm
        product={product}
        categories={categories}
      />

    </>
  );

}