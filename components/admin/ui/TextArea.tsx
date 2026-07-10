import { TextareaHTMLAttributes } from "react";

interface Props
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function TextArea({
  label,
  error,
  className = "",
  ...props
}: Props) {
  return (
    <div className="space-y-2">

      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <textarea
        {...props}
        rows={5}
        className={`
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-[#111]
          p-4
          outline-none
          transition
          focus:border-lime-400
          ${className}
        `}
      />

      {error && (
        <p className="text-xs text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}