import LoginForm from "@/features/auth/components/LoginForm";

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

        <LoginForm />

      </div>

    </main>

  );

}