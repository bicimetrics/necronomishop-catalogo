interface Props{

titulo:string;

valor:string|number;

}

export default function StatCard({

titulo,

valor

}:Props){

return(

<div className="rounded-3xl border border-zinc-800 bg-[#111] p-8">

<p className="text-zinc-500">

{titulo}

</p>

<h2 className="mt-4 text-5xl font-black">

{valor}

</h2>

</div>

);

}