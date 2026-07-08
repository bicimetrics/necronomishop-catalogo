const categorias = [
  "Todos",
  "Figuras",
  "Videojuegos",
  "Consolas",
  "VHS",
  "Relojes",
  "Manga",
  "Coleccionables",
];

export default function Sidebar() {
  return (
    <aside className="space-y-8">

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

        <h2 className="mb-6 text-2xl font-bold text-lime-400">
          Categorías
        </h2>

        <ul className="space-y-4">

          {categorias.map((item) => (
            <li
              key={item}
              className="cursor-pointer transition hover:text-lime-400"
            >
              {item}
            </li>
          ))}

        </ul>

      </div>

      <div className="rounded-2xl border border-purple-700 bg-zinc-950 p-6 text-center">

        <div className="text-7xl">
          🐙
        </div>

        <h3 className="mt-5 text-3xl font-bold text-lime-400">
          ¿Buscas algo?
        </h3>

        <p className="mt-3 text-zinc-400">
          Escríbenos por WhatsApp y te ayudamos.
        </p>

        <button className="mt-6 w-full rounded-xl border border-lime-400 py-3 text-lime-400 hover:bg-lime-400 hover:text-black">
          Escribir por WhatsApp
        </button>

      </div>

    </aside>
  );
}