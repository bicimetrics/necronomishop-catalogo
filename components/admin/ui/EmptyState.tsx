import { PackageOpen } from "lucide-react";

export default function EmptyState() {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      rounded-3xl
      border
      border-dashed
      border-zinc-700
      py-20
      "
    >
      <PackageOpen
        size={60}
        className="text-zinc-600"
      />

      <h2 className="mt-6 text-2xl font-bold">
        Sin productos
      </h2>

      <p className="mt-2 text-zinc-500">
        Agrega tu primer producto.
      </p>
    </div>
  );
}