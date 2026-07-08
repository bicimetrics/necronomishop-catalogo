import Navbar from "@/components/layout/Navbar";
import SearchBar from "@/components/admin/ui/Search";
import Filters from "@/components/catalog/Filters";
import ProductGrid from "@/components/catalog/ProductGrid";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[1710px] px-8 xl:px-12">

        {/* Buscador */}

        <section className="pt-10">

          <SearchBar />

        </section>

        {/* Categorías */}

        <section className="mt-6">

          <Filters />

        </section>

        {/* Productos */}

        <section className="mt-10">

          <ProductGrid />

        </section>

      </main>
    </>
  );
}