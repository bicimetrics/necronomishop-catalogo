import Input from "@/components/admin/ui/Input";

interface Props {
  register: any;
}

export default function PricingSection({
  register,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#111] p-8">

      <h2 className="mb-8 text-xl font-bold">
        Precio y stock
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <Input
          label="Precio"
          type="number"
          {...register("price")}
        />

        <Input
          label="Stock"
          type="number"
          {...register("stock")}
        />

      </div>

    </div>
  );
}