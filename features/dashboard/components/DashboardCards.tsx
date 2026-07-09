import {
  Package,
  Tags,
  TriangleAlert,
  ImageOff,
} from "lucide-react";

import DashboardCard from "./DashboardCard";

import { getDashboardStats } from "../repositories/dashboard.repository";

export default async function DashboardCards() {

  const stats = await getDashboardStats();

  return (

    <section
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >

      <DashboardCard
        title="Productos"
        value={stats.totalProducts}
        description="Productos registrados"
        color="lime"
        icon={<Package size={28} />}
      />

      <DashboardCard
        title="Categorías"
        value={stats.totalCategories}
        description="Categorías disponibles"
        color="blue"
        icon={<Tags size={28} />}
      />

      <DashboardCard
        title="Stock Bajo"
        value={stats.lowStock}
        description="Productos por reponer"
        color="amber"
        icon={<TriangleAlert size={28} />}
      />

      <DashboardCard
        title="Sin Imagen"
        value={stats.noImage}
        description="Productos sin fotografía"
        color="red"
        icon={<ImageOff size={28} />}
      />

    </section>

  );

}