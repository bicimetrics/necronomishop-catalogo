import CategoryList from "./CategoryList";

export default function CategoryTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800">

      <table className="w-full">

        <thead className="bg-[#121212]">

          <tr className="text-left text-sm uppercase tracking-wider text-zinc-500">

            <th className="p-5">
              Categoría
            </th>

            <th>
              Slug
            </th>

            <th>
              Productos
            </th>

            <th className="w-32">
              Acciones
            </th>

          </tr>

        </thead>

        <tbody>

          <CategoryList />

        </tbody>

      </table>

    </div>
  );
}