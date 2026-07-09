interface Option {
  value: number | string;
  label: string;
}

interface Props {
  label: string;
  options: Option[];
  error?: string;
  register: any;
}

export default function Select({
  label,
  options,
  error,
  register,
}: Props) {
  return (
    <div className="space-y-2">

      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <select
        {...register}
        className="
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
        "
      >
        <option value="">
          Selecciona una categoría
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-xs text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}