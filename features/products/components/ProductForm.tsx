"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/admin/ui/Input";
import TextArea from "@/components/admin/ui/TextArea";
import Button from "@/components/admin/ui/Button";

import {
  productSchema,
  ProductFormData,
} from "../schemas/product.schema";

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  function onSubmit(data: ProductFormData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
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

          <Input
            label="Slug"
            {...register("slug")}
            error={errors.slug?.message}
          />

          <TextArea
            label="Descripción"
            {...register("description")}
          />

          <div className="grid grid-cols-2 gap-6">

            <Input
              label="Precio"
              type="number"
              {...register("price")}
            />

            <Input
              label="Stock"
              type="number"
              {...register("stock")}
            />

          </div>

        </div>

      </div>

      <div className="flex justify-end gap-4">

        <Button
          type="button"
          variant="secondary"
        >
          Cancelar
        </Button>

        <Button type="submit">
          Guardar producto
        </Button>

      </div>

    </form>
  );
}