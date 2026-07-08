"use client";

import Link from "next/link";
import {
    LayoutDashboard,
    Package,
    FolderTree,
    Settings,
    LogOut
} from "lucide-react";

export default function Sidebar(){

return(

<aside className="w-72 border-r border-zinc-800 bg-[#111]">

<div className="border-b border-zinc-800 p-8">

<h1 className="text-3xl font-black text-lime-400">

NECRONOMISHOP

</h1>

<p className="mt-2 text-zinc-500">

Administrador

</p>

</div>

<nav className="mt-6 space-y-2 px-4">

<Link
href="/admin"
className="flex items-center gap-3 rounded-xl px-4 py-4 hover:bg-zinc-900"
>

<LayoutDashboard size={20}/>

Dashboard

</Link>

<Link
href="/admin/productos"
className="flex items-center gap-3 rounded-xl px-4 py-4 hover:bg-zinc-900"
>

<Package size={20}/>

Productos

</Link>

<Link
href="/admin/categorias"
className="flex items-center gap-3 rounded-xl px-4 py-4 hover:bg-zinc-900"
>

<FolderTree size={20}/>

Categorías

</Link>

<Link
href="/admin/configuracion"
className="flex items-center gap-3 rounded-xl px-4 py-4 hover:bg-zinc-900"
>

<Settings size={20}/>

Configuración

</Link>

</nav>

<div className="absolute bottom-8 w-72 px-4">

<button
className="flex w-full items-center gap-3 rounded-xl bg-red-500 px-4 py-4 font-semibold"
>

<LogOut size={18}/>

Cerrar sesión

</button>

</div>

</aside>

);

}