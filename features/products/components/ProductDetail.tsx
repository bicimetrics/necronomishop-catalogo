import { Product } from "@/types/product";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductBuyBox from "./ProductBuyBox";

interface Props {
  product: Product;
}

export default function ProductDetail({
  product,
}: Props) {

  return (

    <section
      className="
        mx-auto
        max-w-7xl
        px-6
        py-16
      "
    >

      <div
        className="
          grid
          gap-16
          lg:grid-cols-2
        "
      >

        <ProductGallery
          product={product}
        />

        <div>

          <ProductInfo
            product={product}
          />

          <ProductBuyBox
            product={product}
          />

        </div>

      </div>

    </section>

  );

}