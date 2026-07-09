"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          sticky
          top-0
          z-50
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-[#090909]/95 backdrop-blur-xl shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-8">

          {/* Barra superior */}

          <div className="flex h-20 items-center justify-between">

            <div>

              <Link href="/">
                <h1
                  className={`
                    font-black
                    tracking-[-0.05em]
                    text-lime-400
                    leading-none
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    ${
                      scrolled
                        ? "text-4xl"
                        : "text-5xl"
                    }
                  `}
                >
                  NECRONOMISHOP
                </h1>
              </Link>

              {!scrolled && (
               <p className="mt-2 text-sm font-medium tracking-wide">

                 <span className="text-lime-300">
                   Tienda cósmica
                </span>

                <span className="mx-2 text-zinc-600">
    |
                </span>

                <span className="text-violet-400">
                  Coleccionismo Retro y Actual
                </span>

                </p>
              )}

            </div>

            <nav className="flex gap-10 text-sm font-semibold uppercase tracking-wider">

              <Link
                href="/"
                className="
                  relative
                  text-lime-400
                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-[2px]
                  after:w-full
                  after:bg-lime-400
                "
              >
                Catálogo
              </Link>

              <a
                href="https://instagram.com/necronomishop"
                target="_blank"
                className="transition hover:text-lime-400"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/56900000000"
                className="transition hover:text-lime-400"
              >
                Contacto
              </a>

            </nav>

          </div>

        </div>
      </header>

      {/* Buscador */}

      {!scrolled && (
        <section className="mx-auto max-w-7xl px-8 pt-6">

          <div className="relative w-[1200px]">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              placeholder="Buscar videojuegos, VHS, figuras..."
              className="
                h-16
                w-full
                rounded-2xl
                border
                border-zinc-800
                bg-[#121212]
                pl-14
                pr-6
                text-lg
                outline-none
                transition
                focus:border-lime-400
              "
            />

          </div>

        </section>
      )}
    </>
  );
}