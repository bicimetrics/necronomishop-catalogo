import Header from "@/components/catalog/Header";
import Filters from "@/components/catalog/Filters";
import SearchBar from "@/components/catalog/SearchBar";
import ProductGrid from "@/components/catalog/ProductGrid";

interface Props {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function Home({
  searchParams,
}: Props) {

  const params = await searchParams;

  return (

    <main className="min-h-screen bg-[#090909] text-white">

      <Header />

      <section className="mx-auto max-w-7xl px-8 pt-8 pb-16">

        <SearchBar
          defaultValue={params.search ?? ""}
        />

        <div className="mt-8">
          <Filters />
        </div>

        <div className="mt-10">

          <ProductGrid
            search={params.search}
          />

        </div>

      </section>

    </main>

  );

}