import Header from "@/components/catalog/Header";
import Filters from "@/components/catalog/Filters";
import ProductGrid from "@/components/catalog/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      <Header />

      <section className="mx-auto max-w-7xl px-8 pt-8 pb-16">

        <Filters />

        <div className="mt-10">
          <ProductGrid />
        </div>

      </section>

    </main>
  );
}