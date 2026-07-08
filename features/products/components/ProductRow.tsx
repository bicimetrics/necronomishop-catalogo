import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import Button from "@/components/admin/ui/Button";
import Badge from "@/components/admin/ui/Badge";
import { Product } from "@/types/product";

interface Props {
    product: Product;
}

export default function ProductRow({ product }: Props) {

    return (

        <article
            className="
            flex
            items-center
            justify-between
            rounded-3xl
            border
            border-zinc-800
            bg-[#111]
            p-5
            "
        >

            <div className="flex items-center gap-5">

                <Image

                    src={product.image}

                    alt={product.name}

                    width={90}

                    height={90}

                    className="rounded-2xl object-cover"

                />

                <div>

                    <h2 className="text-xl font-bold">

                        {product.name}

                    </h2>

                    <p className="mt-2 text-zinc-500">

                        ${product.price.toLocaleString("es-CL")}

                    </p>

                    <div className="mt-3">

                        <Badge>

                            {product.badge ?? "Producto"}

                        </Badge>

                    </div>

                </div>

            </div>

            <div className="flex gap-3">

                <Button variant="secondary">

                    <Pencil size={18} />

                </Button>

                <Button variant="danger">

                    <Trash2 size={18} />

                </Button>

            </div>

        </article>

    );

}