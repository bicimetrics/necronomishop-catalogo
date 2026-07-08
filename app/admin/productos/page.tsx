import Link from "next/link";
import Header from "@/components/admin/layout/Header";
import Button from "@/components/admin/ui/Button";
import ProductList from "@/features/products/components/ProductList";
import { Plus } from "lucide-react";


export default function ProductosPage() {
  return (
    <>
      <Header
        title="Productos"
        subtitle="Administra todo el catálogo de Necronomishop."
        actions={
         <Link href="/admin/productos/nuevo">
           <Button>
             <Plus size={18} />
             <span className="ml-2">Nuevo producto</span>
           </Button>
        </Link>
}
      />

      <ProductList />
    </>
  );
}