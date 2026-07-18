import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  title: string;
}

export default function Breadcrumb({
  title,
}: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex items-center gap-2 text-sm text-zinc-400"
    >
      <Link
        href="/"
        className="transition-colors hover:text-white"
      >
        Inicio
      </Link>

      <ChevronRight size={14} />

      <Link
        href="/"
        className="transition-colors hover:text-white"
      >
        Productos
      </Link>

      <ChevronRight size={14} />

      <span className="text-white font-medium">
        {title}
      </span>
    </nav>
  );
}