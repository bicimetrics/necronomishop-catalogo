import { getProducts } from "../repository/product.repository";
import ProductRow from "./ProductRow";

export default async function ProductList() {
  const products = await getProducts();

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