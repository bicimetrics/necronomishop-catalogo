import { notFound } from "next/navigation";

import ProductDetail from "@/features/products/components/ProductDetail";

import {
  findProductBySlug,
} from "@/features/products/services/product.service";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  const product =
    await findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <ProductDetail product={product} />
  );
}