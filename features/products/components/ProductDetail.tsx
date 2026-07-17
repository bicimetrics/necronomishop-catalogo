import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Product } from "@/features/products/types/product.types";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductBuyBox from "./ProductBuyBox";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <Link
        href="/"
        className="
          mb-10
          inline-flex
          items-center
          gap-2
          text-sm
          text-zinc-400
          transition-colors
          hover:text-white
        "
      >
        <ArrowLeft size={18} />

        Volver al catálogo
      </Link>

      <div className="grid gap-16 lg:grid-cols-2">

        <ProductGallery product={product} />

        <div className="flex flex-col">

          <ProductInfo product={product} />

          <ProductBuyBox product={product} />

        </div>

      </div>

    </main>
  );
}