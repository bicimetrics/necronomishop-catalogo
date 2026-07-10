import {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import Select from "@/components/admin/ui/Select";

import {
  ProductFormInput,
} from "../../schemas/product.schema";

interface Category {
  id: number;
  name: string;
}

interface Props {
  categories: Category[];

  register: UseFormRegister<ProductFormInput>;

  errors: FieldErrors<ProductFormInput>;
}

export default function CategorySection({
  categories,
  register,
  errors,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#111] p-8">

      <h2 className="mb-8 text-xl font-bold">
        Categoría
      </h2>

      <Select
        label="Categoría"
        register={register("category_id")}
        error={errors.category_id?.message}
        options={categories.map((category) => ({
          value: category.id,
          label: category.name,
        }))}
      />

    </div>
  );
}