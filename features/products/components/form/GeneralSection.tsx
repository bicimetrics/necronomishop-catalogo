import Input from "@/components/admin/ui/Input";
import TextArea from "@/components/admin/ui/TextArea";

interface Props {
  register: any;
  errors: any;
}

export default function GeneralSection({
  register,
  errors,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#111] p-8">

      <h2 className="mb-8 text-xl font-bold">
        Información general
      </h2>

      <div className="space-y-6">

        <Input
          label="Nombre"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          label="Slug"
          {...register("slug")}
          error={errors.slug?.message}
        />

        <TextArea
          label="Descripción"
          {...register("description")}
        />

      </div>

    </div>
  );
}