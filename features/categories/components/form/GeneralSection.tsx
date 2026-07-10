import {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import Input from "@/components/admin/ui/Input";
import TextArea from "@/components/admin/ui/TextArea";

import { CategoryFormData } from "../../schemas/category.schema";


interface Props {
  register: UseFormRegister<CategoryFormData>;
  errors: FieldErrors<CategoryFormData>;
}

export default function GeneralSection({
  register,
  errors,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#111] p-8">

      <h2 className="mb-8 text-xl font-bold">
        Información general
      </h2>

      <div className="space-y-6">

        <Input
          label="Nombre"
          {...register("name")}
          error={errors.name?.message}
        />

        <div>

          <Input
            label="Slug"
            readOnly
            className="bg-zinc-900 cursor-not-allowed text-zinc-500"
            {...register("slug")}
          />

          <p className="mt-2 text-xs text-zinc-500">
            El slug se genera automáticamente.
          </p>

        </div>

        <TextArea
          label="Descripción"
          {...register("description")}
          error={errors.description?.message}
        />

      </div>

    </div>
  );
}