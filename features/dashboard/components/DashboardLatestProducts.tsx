import Image from "next/image";
import { Package } from "lucide-react";
import DashboardPanel from "./DashboardPanel";

import { getLatestProducts }
from "../repositories/dashboard.repository";

import { getImageUrl }
from "@/features/products/services/image.service";

export default async function DashboardLatestProducts() {

  const products =
    await getLatestProducts();

  return (

    <DashboardPanel
  title="Últimos productos"
  icon={
    <Package
      size={22}
      className="text-lime-400"
    />
  }
>

  <div className="space-y-5">

    {products.map(product => (

      <div
        key={product.id}
        className="
          flex
          items-center
          gap-4
        "
      >

        <Image
          src={getImageUrl(product.image)}
          alt={product.name}
          width={60}
          height={60}
          className="rounded-xl"
          style={{
            width: "60px",
            height: "60px",
            objectFit: "cover",
          }}
        />

        <div className="flex-1">

          <h3 className="font-semibold">

            {product.name}

          </h3>

          <p className="text-sm text-zinc-500">

            {product.categories?.name}

          </p>

        </div>

        <span
          className="
            font-semibold
            text-lime-400
          "
        >

          ${product.price.toLocaleString("es-CL")}

        </span>

      </div>

    ))}

  </div>

</DashboardPanel>

  );

}