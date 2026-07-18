import { notFound } from "next/navigation";

import ProductDetail from "@/features/products/components/ProductDetail";
import RelatedProducts from "@/features/products/components/RelatedProducts";

import {
  findProductBySlug,
  findRelatedProducts,
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

  const product = await findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await findRelatedProducts(
    product.category_id,
    product.id
  );

  return (
    <>
      <ProductDetail product={product} />

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <RelatedProducts products={relatedProducts} />
      </div>
    </>
  );
}