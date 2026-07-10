"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  categorySchema,
  CategoryFormData,
} from "../schemas/category.schema";

import { Category } from "../types/category.types";

import { generateSlug } from "@/features/shared/utils/slug";

import { createCategory } from "../actions/createCategory";
import { updateCategory } from "../actions/updateCategory";

import GeneralSection from "./form/GeneralSection";
import ActionsSection from "./form/ActionsSection";

interface Props {
  category?: Category;
}

export default function CategoryForm({
  category,
}: Props) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),

    defaultValues: category
      ? {
          name: category.name,
          slug: category.slug,
          description: category.description ?? "",
        }
      : {
          name: "",
          slug: "",
          description: "",
        },
  });

  const categoryName = watch("name");

  useEffect(() => {

    if (category) return;

    setValue(
      "slug",
      generateSlug(categoryName ?? "")
    );

  }, [
    category,
    categoryName,
    setValue,
  ]);

  async function onSubmit(
    data: CategoryFormData
  ) {

    try {

      setLoading(true);

      if (category) {

        const result =
          await updateCategory(
            category.id,
            data as Category
          );

        if (!result.success) {

          alert(result.message);

          return;

        }

      } else {

        const result =
          await createCategory(
            data as Category
          );

        if (!result.success) {

          alert(result.message);

          return;

        }

      }

      router.push("/admin/categorias");

      router.refresh();

    } catch (error) {

      console.error(error);

      alert("Ha ocurrido un error inesperado.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >

      <GeneralSection
        register={register}
        errors={errors}
      />

      <ActionsSection
        loading={loading}
      />

    </form>

  );

}