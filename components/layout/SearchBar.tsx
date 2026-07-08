import { Search } from "lucide-react";

export default function SearchBar(){

return(

<div className="relative">

<Search

className="absolute left-7 top-1/2 -translate-y-1/2 text-zinc-500"

/>

<input

placeholder="Buscar productos..."

className="
h-16
w-full
rounded-2xl
border
border-zinc-800
bg-[#121212]
pl-16
pr-6
text-lg
placeholder:text-zinc-500
outline-none
transition-all
duration-300
focus:border-lime-400
focus:ring-4
focus:ring-lime-400/10
"
/>

</div>

);

}