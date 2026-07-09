import { ReactNode } from "react";

interface Props {

  title: string;

  icon?: ReactNode;

  action?: ReactNode;

  children: ReactNode;

}

export default function DashboardPanel({

  title,

  icon,

  action,

  children,

}: Props) {

  return (

    <section
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-[#111]
        p-6
      "
    >

      <header
        className="
          mb-6
          flex
          items-center
          justify-between
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {icon}

          <h2
            className="
              text-xl
              font-bold
            "
          >

            {title}

          </h2>

        </div>

        {action}

      </header>

      {children}

    </section>

  );

}