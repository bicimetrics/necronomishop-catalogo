import Link from "next/link";

export default function Navbar(){

return(

<header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/70 backdrop-blur-xl">

<div className="mx-auto flex h-16 max-w-[1700px] items-center justify-between px-10">

<div>

<h1 className="text-4xl font-black tracking-tight text-lime-400">

NECRONOMISHOP

</h1>

<p className="text-xs text-zinc-500">

Tienda cósmica | Coleccionismo Retro y Actual

</p>

</div>

<nav className="flex gap-10">

<Link href="/" className="transition hover:text-lime-400">

CATÁLOGO

</Link>

<Link href="#">

INSTAGRAM

</Link>

<Link href="#">

CONTACTO

</Link>

</nav>

</div>

</header>

);

}