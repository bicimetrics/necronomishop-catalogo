const items=[

"Todos",

"🎮 Juegos",

"📼 VHS",

"👾 Figuras",

"⌚ Relojes",

"📚 Manga",

"🧸 Coleccionables"

];

export default function Filters(){

return(

<div className="flex gap-3 overflow-auto pb-3">

{items.map((item,index)=>(

<button

key={item}

className={`

rounded-full

border

px-5

py-2.5

transition

${index===0

?"border-lime-400 bg-lime-400 text-black"

:"border-zinc-700 hover:border-lime-400 hover:text-lime-400"

}

`}

>

{item}

</button>

))}

</div>

);

}