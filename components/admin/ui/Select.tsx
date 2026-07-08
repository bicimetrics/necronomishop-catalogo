import {
  SelectHTMLAttributes,
} from "react";

interface Props
  extends SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select({
  children,
  ...props
}: Props) {
  return (
    <select
      {...props}
      className="
      h-12
      w-full
      rounded-xl
      border
      border-zinc-700
      bg-black
      px-4
      "
    >
      {children}
    </select>
  );
}