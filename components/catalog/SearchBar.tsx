"use client";

import { Search } from "lucide-react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

interface Props {
  defaultValue?: string;
}

export default function SearchBar({
  defaultValue = "",
}: Props) {

  const router = useRouter();

  const searchParams =
    useSearchParams();

  function handleSearch(
    value: string
  ) {

    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (value.trim()) {

      params.set(
        "search",
        value
      );

    } else {

      params.delete("search");

    }

    router.push(
      `/?${params.toString()}`
    );

  }

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
        defaultValue={defaultValue}
        onChange={(e) =>
          handleSearch(
            e.target.value
          )
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
          pr-4
          text-white
          outline-none
          transition
          focus:border-zinc-600
        "
      />

    </div>

  );

}