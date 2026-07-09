import Link from "next/link";
import { Plus } from "lucide-react";

import Button from "@/components/admin/ui/Button";

export default function CategoryToolbar() {
  return (
    <div className="mb-8 flex justify-end">
      <Link href="/admin/categorias/nueva">
        <Button>
          <Plus size={18} />
          <span className="ml-2">
            Nueva categoría
          </span>
        </Button>
      </Link>
    </div>
  );
}