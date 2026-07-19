"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as notification from "@/features/shared/services/notification.service";

import {
  Product,
  CreateProduct,
} from "../types/product.types";

import {
  productSchema,
  ProductFormInput,
  ProductFormData,
} from "../schemas/product.schema";

import { uploadProductImage } from "../services/image.service";

import { createProduct } from "../actions/createProduct";
import { updateProduct } from "../actions/updateProduct";

import { generateSlug } from "../../shared/utils/slug";

import GeneralSection from "./form/GeneralSection";
import PricingSection from "./form/PricingSection";
import CategorySection from "./form/CategorySection";
import ImageSection from "./form/ImageSection";
import ActionsSection from "./form/ActionsSection";

interface Category {
  id: number;
  name: string;
}

interface Props {
  product?: Product;
  categories: Category[];
}

export default function ProductForm({
  product,
  categories,
}: Props) {

  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<
    ProductFormInput,
    undefined,
    ProductFormData
  >({
    resolver: zodResolver(productSchema),

    defaultValues: product
      ? {
          name: product.name,
          slug: product.slug,
          description: product.description ?? "",
          price: product.price,
          stock: product.stock,
          badge: product.badge ?? "",
          image: product.image ?? "",
          category_id: product.category_id,
        }
      : {
          name: "",
          slug: "",
          description: "",
          price: 0,
          stock: 0,
          badge: "",
          image: "",
          category_id: 0,
        },
  });

  const productName = watch("name");

  useEffect(() => {

    if (product) return;

    setValue(
      "slug",
      generateSlug(productName ?? "")
    );

  }, [
    product,
    productName,
    setValue,
  ]);

  async function onSubmit(
    data: ProductFormData
  ) {

    try {

      if (!product && images.length === 0) {

        notification.warning(
          "Debes subir al menos una imagen antes de guardar el producto."
        );

        return;

      }

      setLoading(true);

      const uploadedImages =
        images.length > 0
          ? await Promise.all(
              images.map(uploadProductImage)
            )
          : [];

      const imagePath =
        uploadedImages[0] ??
        product?.image ??
        "";

     const startOrder = product?.images?.length ?? 0;

const productImages = uploadedImages.map((image, index) => ({
  image,
  sortOrder: startOrder + index,
}));

      if (product) {

        await updateProduct(
          product.id,
          {
            id: product.id,
            name: data.name,
            slug: data.slug,
            description: data.description,
            price: data.price,
            stock: data.stock,
            badge: data.badge ?? null,
            image: product.image,
            category_id: data.category_id,
          },
          productImages
        );

        return;

      }

      const productData: CreateProduct = {
        name: data.name,
        slug: data.slug,
        description: data.description,
        price: data.price,
        stock: data.stock,
        badge: data.badge ?? null,
        image: imagePath,
        category_id: data.category_id,
      };

      await createProduct(
        productData,
        productImages
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

      <PricingSection
        register={register}
      />

      <CategorySection
        categories={categories}
        register={register}
        errors={errors}
      />

      <ImageSection
    existingImages={
        product?.images?.map((img) => ({
            id: img.id,
            image: img.image,
            sortOrder: img.sort_order,
        })) ?? []
    }
    onChange={setImages}
/>

      <ActionsSection
        loading={loading}
      />

    </form>

  );

}