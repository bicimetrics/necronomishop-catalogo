import Image from "next/image";
import { notFound } from "next/navigation";

import {
  findProductBySlug,
} from "@/features/products/services/product.service";

import {
  getImageUrl,
} from "@/features/products/services/image.service";

interface Props {

  params: Promise<{
    slug: string;
  }>;

}

export default async function ProductPage({
  params,
}: Props) {

  const { slug } =
    await params;

  const product =
    await findProductBySlug(slug);

  if (!product) {

    notFound();

  }

  return (

    <main className="mx-auto max-w-7xl px-8 py-12">

      <div className="grid gap-16 lg:grid-cols-2">

        <Image
          src={getImageUrl(product.image)}
          alt={product.name}
          width={900}
          height={900}
          className="rounded-3xl"
        />

        <div>

          <h1 className="text-5xl font-black">

            {product.name}

          </h1>

          <p className="mt-6 text-5xl font-black text-lime-400">

            ${product.price.toLocaleString("es-CL")}

          </p>

        </div>

      </div>

    </main>

  );

}