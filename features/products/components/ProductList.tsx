import { getProducts } from "../repositories/product.repository";
import { ProductFilters } from "../types/product-filter.types";

import ProductRow from "./ProductRow";

interface Props {
  filters?: ProductFilters;
}

export default async function ProductList({
  filters,
}: Props) {

  const products = await getProducts(filters);

  return (
    <>
      {products.map((product) => (
        <ProductRow
          key={product.id}
          product={product}
        />
      ))}
    </>
  );

}