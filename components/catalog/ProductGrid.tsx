import { Product } from "@/features/products/types/product.types";

import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductGrid({
  products,
}: Props) {

  return (

    <section
      className="
        grid
        grid-cols-[repeat(auto-fill,minmax(320px,1fr))]
        gap-8
      "
    >

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </section>

  );

}