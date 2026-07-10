import ProductService from "@/app/services/ProductService";
import ProductCard from "./ProductCard";

interface Props {
  search?: string;
}

export default async function ProductGrid({
  search,
}: Props) {

  // Paso siguiente:
  // utilizaremos "search" para filtrar.
  // Por ahora solamente dejamos preparado
  // el componente.

  const products =
  await ProductService.getProducts({
    search,
  });

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