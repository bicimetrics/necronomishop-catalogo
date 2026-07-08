import ProductService from "@/src/app/services/ProductService";
import ProductCard from "./ProductCard";

export default async function ProductGrid() {

  const products = await ProductService.getProducts();

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