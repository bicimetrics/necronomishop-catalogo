import Link from "next/link";
import { Plus } from "lucide-react";

import Button from "@/components/admin/ui/Button";

interface Props {
  href: string;
  label: string;
}

export default function CrudToolbar({
  href,
  label,
}: Props) {
  return (
    <div className="mb-8 flex justify-end">

      <Link href={href}>

        <Button>

          <Plus size={18} />

          <span className="ml-2">

            {label}

          </span>

        </Button>

      </Link>

    </div>
  );
}