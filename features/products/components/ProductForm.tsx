"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { saveProduct } from "../services/product.service";

import {
  productSchema,
  ProductFormData,
} from "../schemas/product.schema";

import GeneralSection from "./form/GeneralSection";
import PricingSection from "./form/PricingSection";
import CategorySection from "./form/CategorySection";
import ImageSection from "./form/ImageSection";
import ActionsSection from "./form/ActionsSection";

export default function ProductForm() {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  async function onSubmit(data: ProductFormData) {
  console.log("FORMULARIO", data);

  try {
    setLoading(true);

    await saveProduct(data, image);

    console.log("FIN OK");
  } catch (error) {
    console.error("FORM ERROR", error);
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

      <PricingSection
        register={register}
      />

      <CategorySection
        register={register}
        errors={errors}
      />

      <ImageSection
        onChange={setImage}
      />

      <ActionsSection
        loading={loading}
      />
    </form>
  );
}