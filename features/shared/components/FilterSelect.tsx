"use client";

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  value: string | number;

  onChange: (value: string) => void;

  options: Option[];

  placeholder?: string;
}

export default function FilterSelect({

  value,

  onChange,

  options,

  placeholder = "Todos",

}: Props) {

  return (

    <select

      value={value}

      onChange={(e) =>
        onChange(e.target.value)
      }

      className="
        w-full
        rounded-2xl
        border
        border-zinc-800
        bg-[#111]
        px-4
        py-3
        outline-none
        transition
        focus:border-lime-400
      "

    >

      <option value="">

        {placeholder}

      </option>

      {options.map(option => (

        <option
          key={option.value}
          value={option.value}
        >

          {option.label}

        </option>

      ))}

    </select>

  );

}