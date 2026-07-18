"use client";

import { Search, X } from "lucide-react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  useEffect,
  useState,
} from "react";

interface Props {
  defaultValue?: string;
}

export default function SearchBar({
  defaultValue = "",    
}: Props) {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] =
    useState(defaultValue);

  useEffect(() => {
  const timeout = setTimeout(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("search", value.trim());
    } else {
      params.delete("search");
    }

    // Reiniciar paginación al buscar
    params.delete("page");

    const nextUrl = `${pathname}?${params.toString()}`;
    const currentUrl = `${pathname}?${searchParams.toString()}`;

    // Solo navegar si realmente cambió la URL
    if (nextUrl !== currentUrl) {
      router.replace(nextUrl);
    }
  }, 300);

  return () => clearTimeout(timeout);
}, [value, pathname, router, searchParams]);

  return (

    <div className="relative">

      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-zinc-500
        "
      />

      <input
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        placeholder="Buscar productos..."
        className="
          w-full
          rounded-2xl
          border
          border-zinc-800
          bg-[#111]
          py-3
          pl-11
          pr-11
          text-white
          outline-none
          transition
          focus:border-zinc-600
        "
      />

      {value && (

        <button
          type="button"
          onClick={() => setValue("")}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-zinc-500
            hover:text-white
            transition
          "
        >
          <X size={18} />
        </button>

      )}

    </div>

  );

}