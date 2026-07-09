import Link from "next/link";

import {
  PackagePlus,
  Tags,
  Package,
  FolderOpen,
} from "lucide-react";

import DashboardPanel from "./DashboardPanel";

export default function DashboardQuickActions() {

  const actions = [
    {
      title: "Nuevo Producto",
      href: "/admin/productos/nuevo",
      icon: <PackagePlus size={20} />,
    },
    {
      title: "Nueva Categoría",
      href: "/admin/categorias/nueva",
      icon: <Tags size={20} />,
    },
    {
      title: "Administrar Productos",
      href: "/admin/productos",
      icon: <Package size={20} />,
    },
    {
      title: "Administrar Categorías",
      href: "/admin/categorias",
      icon: <FolderOpen size={20} />,
    },
  ];

  return (

    <DashboardPanel
      title="Acciones rápidas"
    >

      <div className="grid gap-4">

        {actions.map((action) => (

          <Link
            key={action.href}
            href={action.href}
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-zinc-800
              p-4
              transition
              hover:border-lime-400
              hover:bg-zinc-900
            "
          >

            <div
              className="
                rounded-xl
                bg-lime-500/10
                p-3
                text-lime-400
              "
            >

              {action.icon}

            </div>

            <span className="font-medium">

              {action.title}

            </span>

          </Link>

        ))}

      </div>

    </DashboardPanel>

  );

}