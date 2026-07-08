interface Props {
  children: React.ReactNode;
}

export default function Card({
  children,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-zinc-800
      bg-[#111]
      p-8
      "
    >
      {children}
    </div>
  );
}