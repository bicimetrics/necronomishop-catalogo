import { ReactNode } from "react";
import Link from "next/link";

interface Props {

  title: string;

  description: string;

  icon?: ReactNode;

  actionLabel?: string;

  actionHref?: string;

}

export default function EmptyState({

  title,

  description,

  icon,

  actionLabel,

  actionHref,

}: Props) {

  return (

    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-zinc-800
        bg-[#111]
        px-8
        py-16
        text-center
      "
    >

      {icon && (

        <div
          className="
            mb-6
            rounded-full
            bg-zinc-900
            p-5
            text-zinc-500
          "
        >

          {icon}

        </div>

      )}

      <h2
        className="
          text-2xl
          font-bold
        "
      >

        {title}

      </h2>

      <p
        className="
          mt-3
          max-w-md
          text-zinc-500
        "
      >

        {description}

      </p>

      {actionHref && actionLabel && (

        <Link

          href={actionHref}

          className="
            mt-8
            rounded-xl
            bg-lime-400
            px-6
            py-3
            font-semibold
            text-black
            transition
            hover:opacity-90
          "

        >

          {actionLabel}

        </Link>

      )}

    </div>

  );

}