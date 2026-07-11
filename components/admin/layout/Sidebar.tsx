"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FolderTree,
  LayoutDashboard,
  Package,
  Settings,
  User,
} from "lucide-react";

import LogoutButton from "@/features/auth/components/LogoutButton";

interface Props {
  user: {
    name: string;
    email: string;
  };
}

const menu = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/productos",
    label: "Productos",
    icon: Package,
  },
  {
    href: "/admin/categorias",
    label: "Categorías",
    icon: FolderTree,
  },
  {
    href: "/admin/configuracion",
    label: "Configuración",
    icon: Settings,
  },
];

export default function Sidebar({
  user,
}: Props) {

  const pathname = usePathname();

  return (

    <aside
      className="
        flex
        h-screen
        w-72
        flex-col
        border-r
        border-zinc-800
        bg-[#111]
      "
    >

      {/* Logo */}

      <div className="border-b border-zinc-800 p-8">

        <h1 className="text-3xl font-black text-lime-400">
          NECRONOMISHOP
        </h1>

        <p className="mt-2 text-zinc-500">
          Panel de Administración
        </p>

      </div>

      {/* Usuario */}

      <div className="border-b border-zinc-800 p-6">

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-zinc-800
            "
          >

            <User size={20} />

          </div>

          <div>

            <p className="font-semibold">

              {user.name}

            </p>

            <p className="text-sm text-zinc-500">

              {user.email}

            </p>

          </div>

        </div>

      </div>

      {/* Menú */}

      <nav className="flex-1 space-y-2 p-4">

        {menu.map((item) => {

          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (

            <Link
              key={item.href}
              href={item.href}
              className={`
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-4
                transition
                ${
                  active
                    ? "bg-lime-400 text-black"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }
              `}
            >

              <Icon size={20} />

              {item.label}

            </Link>

          );

        })}

      </nav>

      {/* Footer */}

      <div className="border-t border-zinc-800 p-4">

        <LogoutButton />

      </div>

    </aside>

  );

}