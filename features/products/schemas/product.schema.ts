import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres"),

  slug: z
    .string()
    .min(3, "El slug debe tener al menos 3 caracteres"),

  description: z
    .string()
    .min(5, "La descripción es obligatoria"),

  price: z.coerce
    .number()
    .positive("El precio debe ser mayor que cero"),

  stock: z.coerce
    .number()
    .min(0, "El stock no puede ser negativo"),

  category_id: z.coerce
    .number()
    .min(1, "Selecciona una categoría"),

  image: z.string().optional(),

  badge: z.string().optional(),
});

// Datos que llegan desde el formulario
export type ProductFormInput = z.input<typeof productSchema>;

// Datos ya validados por Zod
export type ProductFormData = z.output<typeof productSchema>;