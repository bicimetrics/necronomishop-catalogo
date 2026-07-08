interface Props {
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
}

export default function Header({
  title,
  subtitle,
  actions,
}: Props) {
  return (
    <div className="mb-10 flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-black">
          {title}
        </h1>

        <p className="mt-2 text-zinc-500">
          {subtitle}
        </p>

      </div>

      {actions}

    </div>
  );
}