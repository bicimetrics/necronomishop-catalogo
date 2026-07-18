"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialValue = searchParams.get("search") ?? "";

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value.trim()) {
        params.set("search", value.trim());
      } else {
        params.delete("search");
      }

      router.replace(`/?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timeout);
  }, [value, router, searchParams]);

  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar productos..."
        className="
          h-12
          w-full
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900
          pl-11
          pr-12
          text-white
          outline-none
          transition
          focus:border-lime-400
        "
      />

      {value && (
        <button
          type="button"
          onClick={() => setValue("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}