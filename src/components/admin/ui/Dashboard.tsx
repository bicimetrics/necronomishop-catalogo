import Header from "@/src/components/admin/layout/Header";
import Button from "@/src/components/admin/ui/Button";
import Card from "@/src/components/admin/ui/Card";
import StatCard from "@/src/components/admin/dashboard/StatCard";
import { Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <Header
        title="Dashboard"
        subtitle="Bienvenido nuevamente a Necronomishop."
        actions={
          <Button>
            <Plus size={18} />

            Nuevo producto
          </Button>
        }
      />

      <div className="grid grid-cols-4 gap-6">

        <StatCard
          titulo="Productos"
          valor={1}
        />

        <StatCard
          titulo="Categorías"
          valor={7}
        />

        <StatCard
          titulo="Stock crítico"
          valor={1}
        />

        <StatCard
          titulo="Visitas"
          valor={0}
        />

      </div>

      <div className="mt-8">

        <Card>

          Dashboard en construcción...

        </Card>

      </div>
    </>
  );
}