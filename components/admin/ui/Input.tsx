interface Props
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className="
      h-12
      w-full
      rounded-xl
      border
      border-zinc-700
      bg-black
      px-4
      outline-none
      transition
      focus:border-lime-400
      "
    />
  );
}