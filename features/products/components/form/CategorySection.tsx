"use client";

import { useEffect, useState } from "react";
import Select from "@/components/admin/ui/Select";
import { getCategories } from "@/features/categories/repositories/category.repository";

interface Category {
  id: number;
  name: string;
}

interface Props {
  register: any;
  errors: any;
}

export default function CategorySection({
  register,
  errors,
}: Props) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await getCategories();
      setCategories(data);
    }

    loadCategories();
  }, []);

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