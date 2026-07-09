import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className,
  ...props
}: Props) {
  return (
    <div className="space-y-2">

      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <input
        {...props}
        className={clsx(
          `
          h-12
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-[#111]
          px-4
          outline-none
          transition
          focus:border-lime-400
          `,
          className
        )}
      />

      {error && (
        <p className="text-xs text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}