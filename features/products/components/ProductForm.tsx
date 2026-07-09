"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Product } from "../types/product.types";

import { saveProduct } from "../services/product.service";
import { uploadProductImage } from "../services/image.service";

import { updateProduct } from "../actions/updateProduct";

import {
  productSchema,
  ProductFormData,
} from "../schemas/product.schema";

import GeneralSection from "./form/GeneralSection";
import PricingSection from "./form/PricingSection";
import CategorySection from "./form/CategorySection";
import ImageSection from "./form/ImageSection";
import ActionsSection from "./form/ActionsSection";

interface Props {
  product?: Product;
}

export default function ProductForm({
  product,
}: Props) {

  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),

    defaultValues: product
      ? {
          name: product.name,
          slug: product.slug,
          description: product.description,
          price: product.price,
          stock: product.stock,
          badge: product.badge ?? "",
          image: product.image,
          category_id: product.category_id,
        }
      : undefined,
  });

  async function onSubmit(data: ProductFormData) {
    try {

      setLoading(true);

      // EDITAR PRODUCTO
      if (product) {

        let imagePath = product.image;

        if (image) {
          imagePath = await uploadProductImage(image);
        }

        await updateProduct(product.id!, {
          ...product,
          ...data,
          image: imagePath,
        });

      }

      // CREAR PRODUCTO
      else {

        await saveProduct(
          data as Product,
          image
        );

      }

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