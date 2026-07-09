import { ReactNode } from "react";

interface Props {
  title: string;

  value: number;

  description?: string;

  icon: ReactNode;

  color?: "lime" | "blue" | "amber" | "red";
}

const colorMap = {
  lime: {
    border: "border-lime-500/20",
    icon: "bg-lime-500/10 text-lime-400",
    value: "text-lime-400",
  },

  blue: {
    border: "border-blue-500/20",
    icon: "bg-blue-500/10 text-blue-400",
    value: "text-blue-400",
  },

  amber: {
    border: "border-amber-500/20",
    icon: "bg-amber-500/10 text-amber-400",
    value: "text-amber-400",
  },

  red: {
    border: "border-red-500/20",
    icon: "bg-red-500/10 text-red-400",
    value: "text-red-400",
  },
};

export default function DashboardCard({

  title,

  value,

  description,

  icon,

  color = "lime",

}: Props) {

  const styles = colorMap[color];

  return (

    <div
      className={`
        rounded-3xl
        border
        ${styles.border}
        bg-[#111]
        p-6
        transition
        hover:border-zinc-700
      `}
    >

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-zinc-500">

            {title}

          </p>

          <h2
            className={`
              mt-2
              text-4xl
              font-bold
              ${styles.value}
            `}
          >

            {value}

          </h2>

          {description && (

            <p className="mt-3 text-sm text-zinc-500">

              {description}

            </p>

          )}

        </div>

        <div
          className={`
            rounded-2xl
            p-4
            ${styles.icon}
          `}
        >

          {icon}

        </div>

      </div>

    </div>

  );

}