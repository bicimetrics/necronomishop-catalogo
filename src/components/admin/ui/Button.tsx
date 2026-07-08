import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const styles = {
    primary:
      "bg-lime-400 text-black hover:bg-lime-300",

    secondary:
      "bg-zinc-800 text-white hover:bg-zinc-700",

    danger:
      "bg-red-500 text-white hover:bg-red-400",
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-5
        py-3
        transition-all
        duration-200
        hover:scale-105
        active:scale-95
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}