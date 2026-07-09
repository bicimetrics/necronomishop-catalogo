import Image from "next/image";
import { TriangleAlert } from "lucide-react";

import DashboardPanel from "./DashboardPanel";

import { getImageUrl } from "@/features/products/services/image.service";

import {
  getLowStockProducts,
} from "../repositories/dashboard.repository";

export default async function DashboardLowStock() {

  const products =
    await getLowStockProducts();

  return (

    <DashboardPanel
       title="Stock crítico"
       icon={
        <TriangleAlert
          size={22}
          className="text-amber-400"
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
            rounded-full
            bg-red-500/10
            px-3
            py-1
            text-sm
            font-semibold
            text-red-400
          "
        >

          Stock {product.stock}

        </span>

      </div>

    ))}

  </div>

</DashboardPanel>

  );

}