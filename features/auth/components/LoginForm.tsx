"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import * as notification
from "@/features/shared/services/notification.service";

import { signIn }
from "../actions/signIn";

export default function LoginForm() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      const result =
        await signIn(
          email,
          password
        );

      if (!result.success) {

        notification.error(
          result.message ??
          "Credenciales incorrectas."
        );

        return;

      }

      notification.success(
        "Bienvenido."
      );

      router.push("/admin");

      router.refresh();

    } finally {

      setLoading(false);

    }

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-5"
    >

      <input
        type="email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        placeholder="Correo electrónico"
        className="
          h-14
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-black
          px-5
          outline-none
          focus:border-lime-400
        "
      />

      <input
        type="password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        placeholder="Contraseña"
        className="
          h-14
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-black
          px-5
          outline-none
          focus:border-lime-400
        "
      />

      <button
        type="submit"
        disabled={loading}
        className="
          h-14
          w-full
          rounded-xl
          bg-lime-400
          font-bold
          text-black
          transition
          hover:bg-lime-300
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >

        {loading
          ? "Ingresando..."
          : "Ingresar"}

      </button>

    </form>

  );

}