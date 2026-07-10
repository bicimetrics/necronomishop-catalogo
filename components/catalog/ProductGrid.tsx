import ProductService from "@/app/services/ProductService";
import ProductCard from "./ProductCard";

interface Props {
  search?: string;
  categoryId?: number;
}

export default async function ProductGrid({
  search,
  categoryId,
}: Props) {

  // Paso siguiente:
  // utilizaremos "search" para filtrar.
  // Por ahora solamente dejamos preparado
  // el componente.

 const products =
  await ProductService.getProducts({
    search,
    categoryId,
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