"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  categorySchema,
  CategoryFormData,
} from "../schemas/category.schema";

import { Category } from "../types/category.types";

import { generateSlug } from "@/features/products/services/slug.service";

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
  }, [categoryName, setValue, category]);

  async function onSubmit(
    data: CategoryFormData
  ) {
    try {
      setLoading(true);

      if (category) {
        await updateCategory(
          category.id!,
          data
        );

        return;
      }

      await createCategory(
        data as Category
      );

    } catch (error) {
      console.error(error);
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