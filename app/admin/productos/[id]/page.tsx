import Header from "@/components/admin/layout/Header";

import ProductForm from "@/features/products/components/ProductForm";

import { getProduct } from "@/features/products/repository/product.repository";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProductPage({
  params,
}: Props) {

  const { id } = await params;

  const product = await getProduct(Number(id));

  return (
    <>
      <Header
        title="Editar producto"
        subtitle={product.name}
      />

      <ProductForm
        product={product}
      />
    </>
  );
}