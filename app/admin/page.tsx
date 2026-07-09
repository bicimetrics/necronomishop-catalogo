import Header from "@/components/admin/layout/Header";

import DashboardCards
from "@/features/dashboard/components/DashboardCards";

export default function AdminPage() {

  return (

    <>

      <Header
        title="Dashboard"
        subtitle="Resumen general del sistema."
      />

      <DashboardCards />

    </>

  );

}