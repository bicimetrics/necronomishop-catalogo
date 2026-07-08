import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative">

      <Search
        size={22}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        placeholder="Buscar Resident Evil, VHS, Nintendo..."
        className="
          h-16
          w-full
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900
          pl-16
          text-lg
          outline-none
          transition
          focus:border-lime-400
        "
      />

    </div>
  );
}