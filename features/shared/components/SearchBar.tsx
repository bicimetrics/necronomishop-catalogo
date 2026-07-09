"use client";

import { Search } from "lucide-react";

interface Props {

  value: string;

  onChange: (value: string) => void;

  placeholder?: string;

}

export default function SearchBar({

  value,

  onChange,

  placeholder = "Buscar...",

}: Props) {

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
        type="text"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-zinc-800
          bg-[#111]
          py-3
          pl-11
          pr-4
          outline-none
          transition
          focus:border-lime-400
        "
      />

    </div>

  );

}