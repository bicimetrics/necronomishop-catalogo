"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    productSchema,
    ProductFormData
} from "../schemas/product.schema";

import Input from "@/components/admin/ui/Input";
import Button from "@/components/admin/ui/Button";

export default function ProductForm() {

    const {

        register,

        handleSubmit,

        formState: {
            errors,
            isSubmitting,
        }

    } = useForm<ProductFormData>({

        resolver: zodResolver(productSchema),

        defaultValues: {

            name: "",

            slug: "",

            description: "",

            price: 0,

            stock: 1,

            badge: "",

            category_id: 1,

        }

    });

    function onSubmit(data: ProductFormData) {

        console.log(data);

    }

    return (

        <form

            onSubmit={handleSubmit(onSubmit)}

            className="space-y-8"

        >

            {/* Información */}

            <section className="rounded-3xl border border-zinc-800 bg-[#111] p-8">

                <h2 className="text-2xl font-bold">

                    Información

                </h2>

                <div className="mt-8 grid gap-6">

                    <div>

                        <label className="mb-2 block">

                            Nombre

                        </label>

                        <Input

                            {...register("name")}

                        />

                        <p className="mt-2 text-sm text-red-400">

                            {errors.name?.message}

                        </p>

                    </div>

                    <div>

                        <label className="mb-2 block">

                            Slug

                        </label>

                        <Input

                            {...register("slug")}

                        />

                    </div>

                    <div>

                        <label className="mb-2 block">

                            Descripción

                        </label>

                        <textarea

                            {...register("description")}

                            className="
                            min-h-[160px]
                            w-full
                            rounded-xl
                            border
                            border-zinc-700
                            bg-black
                            p-4
                            outline-none
                            focus:border-lime-400
                            "

                        />

                    </div>

                </div>

            </section>

            {/* Inventario */}

            <section className="rounded-3xl border border-zinc-800 bg-[#111] p-8">

                <h2 className="text-2xl font-bold">

                    Inventario

                </h2>

                <div className="mt-8 grid grid-cols-2 gap-6">

                    <div>

                        <label className="mb-2 block">

                            Precio

                        </label>

                        <Input

                            type="number"

                            {...register("price")}

                        />

                    </div>

                    <div>

                        <label className="mb-2 block">

                            Stock

                        </label>

                        <Input

                            type="number"

                            {...register("stock")}

                        />

                    </div>

                </div>

            </section>

            {/* Organización */}

            <section className="rounded-3xl border border-zinc-800 bg-[#111] p-8">

                <h2 className="text-2xl font-bold">

                    Organización

                </h2>

                <div className="mt-8 grid grid-cols-2 gap-6">

                    <div>

                        <label className="mb-2 block">

                            Categoría

                        </label>

                        <Input

                            type="number"

                            {...register("category_id")}

                        />

                    </div>

                    <div>

                        <label className="mb-2 block">

                            Badge

                        </label>

                        <Input

                            {...register("badge")}

                        />

                    </div>

                </div>

            </section>

            <div className="flex justify-end gap-4">

                <Button

                    type="button"

                    variant="secondary"

                >

                    Cancelar

                </Button>

                <Button

                    type="submit"

                    disabled={isSubmitting}

                >

                    Guardar producto

                </Button>

            </div>

        </form>

    );

}