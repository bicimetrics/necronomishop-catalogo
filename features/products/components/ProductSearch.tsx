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

export default function ProductSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialValue =
    searchParams.get("q") ?? "";

  const [value, setValue] =
    useState(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(
        searchParams.toString()
      );

      if (value.trim()) {
        params.set("q", value);
      } else {
        params.delete("q");
      }

      params.delete("page");

      router.replace(
        `${pathname}?${params.toString()}`
      );
    }, 300);

    return () => clearTimeout(timeout);

  }, [
    value,
    pathname,
    router,
    searchParams,
  ]);

  function clearSearch() {
    setValue("");
  }

  return (
    <div
      className="
        relative
        w-full
        max-w-xl
      "
    >
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
          bg-zinc-900
          py-3
          pl-11
          pr-12
          outline-none
          transition
          focus:border-lime-400
        "
      />

      {value && (
        <button
          type="button"
          onClick={clearSearch}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-zinc-500
            hover:text-white
          "
        >
          <X size={18}/>
        </button>
      )}

    </div>
  );
}