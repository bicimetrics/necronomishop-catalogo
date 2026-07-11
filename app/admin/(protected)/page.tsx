import Header from "@/components/admin/layout/Header";
import DashboardCards from "@/features/dashboard/components/DashboardCards";
import DashboardLatestProducts from "@/features/dashboard/components/DashboardLatestProducts";

import DashboardLowStock
from "@/features/dashboard/components/DashboardLowStock";

import LogoutButton
from "@/features/auth/components/LogoutButton";


export default function AdminPage() {
  return (
    <>
      <Header
        title="Dashboard"
         subtitle="Resumen general del sistema."
      />

      <DashboardCards />

      <div
        className="
        mt-8
        grid
        gap-6
        xl:grid-cols-2"
      >

      <DashboardLatestProducts />

    <DashboardLowStock />


  </div>
    </>
  );
}