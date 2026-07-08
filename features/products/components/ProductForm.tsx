"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  productSchema,
  ProductFormData,
} from "../schemas/product.schema";

import slugify from "@/utils/slug";

import Input from "@/components/admin/ui/Input";
import Button from "@/components/admin/ui/Button";

export default function ProductForm() {

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),

    defaultValues: {
      name: "",
      slug: "",
      description: "",
      price: 0,
      stock: 1,
      category_id: 1,
      badge: "NUEVO",
      status: "published",
      whatsapp: "56900000000",
    },
  });

  const name = watch("name");

  useEffect(() => {

    setValue("slug", slugify(name));

  }, [name, setValue]);

  function onSubmit(data: ProductFormData) {

    console.log(data);

  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-3 gap-8"
    >

      {/* aquí iremos agregando las tarjetas */}

    </form>

  );

}