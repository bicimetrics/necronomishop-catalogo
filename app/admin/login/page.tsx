export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090909]">

      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-[#121212] p-10">

        <h1 className="text-center text-4xl font-black text-lime-400">
          NECRONOMISHOP
        </h1>

        <p className="mt-2 text-center text-zinc-500">
          Panel de Administración
        </p>

        <form className="mt-10 space-y-5">

          <input
            type="email"
            placeholder="Correo electrónico"
            className="h-14 w-full rounded-xl border border-zinc-800 bg-black px-5 outline-none focus:border-lime-400"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="h-14 w-full rounded-xl border border-zinc-800 bg-black px-5 outline-none focus:border-lime-400"
          />

          <button
            className="h-14 w-full rounded-xl bg-lime-400 font-bold text-black transition hover:bg-lime-300"
          >
            Ingresar
          </button>

        </form>

      </div>

    </main>
  );
}