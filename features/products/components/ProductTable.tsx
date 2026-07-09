import ProductList from "./ProductList";

export default function ProductTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800">

      <table className="w-full">

        <thead className="bg-[#121212]">

          <tr className="text-left text-sm uppercase tracking-wider text-zinc-500">

            <th className="p-5">Producto</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Estado</th>
            <th className="w-32">Acciones</th>

          </tr>

        </thead>

        <tbody>

          <ProductList />

        </tbody>

      </table>

    </div>
  );
}