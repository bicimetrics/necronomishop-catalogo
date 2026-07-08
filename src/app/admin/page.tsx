import StatCard from "@/src/components/admin/dashboard/StatCard";


export default function Dashboard(){

return(

<>

<div className="flex items-center justify-between">

<div>

<h1 className="text-4xl font-black">

Dashboard

</h1>

<p className="mt-2 text-zinc-500">

Resumen general del catálogo

</p>

</div>

</div>

<div className="mt-10 grid grid-cols-4 gap-6">

<StatCard

titulo="Productos"

valor={1}

/>

<StatCard

titulo="Categorías"

valor={7}

/>

<StatCard

titulo="Stock crítico"

valor={1}

/>

<StatCard

titulo="Ventas"

valor={0}

/>

</div>

</>

);

}