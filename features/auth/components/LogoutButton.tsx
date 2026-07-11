"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { signOut } from "../actions/signOut";

export default function LogoutButton() {

  const router = useRouter();

  async function handleLogout() {

    await signOut();

    router.replace("/admin/login");

    router.refresh();

  }

  return (

    <button
      onClick={handleLogout}
      className="
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-zinc-700
        px-4
        py-2
        text-sm
        font-semibold
        transition
        hover:border-red-500
        hover:text-red-400
      "
    >

      <LogOut size={18} />

      Cerrar sesión

    </button>

  );

}