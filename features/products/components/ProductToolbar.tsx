"use client";

import Link from "next/link";
import { Plus, Search } from "lucide-react";
import Button from "@/components/admin/ui/Button";

export default function ProductToolbar() {

  return (

    <div className="mb-8 flex items-center justify-between">

      <div className="relative w-[420px]">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          placeholder="Buscar productos..."
          className="
          h-12
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-[#121212]
          pl-11
          outline-none
          focus:border-lime-400
          "
        />

      </div>

      <Link href="/admin/productos/nuevo">

        <Button>

          <Plus size={18} />

          <span className="ml-2">

            Nuevo producto

          </span>

        </Button>

      </Link>

    </div>

  );

}