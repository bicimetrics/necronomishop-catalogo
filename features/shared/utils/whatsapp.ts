const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

  const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export function createWhatsAppLink(
  productName: string,
  price: number,
  slug?: string
) {

  const catalogUrl = slug
    ? `${BASE_URL}/?search=${slug}`
    : BASE_URL;

  const message = `Hola Necronomishop.

Quiero consultar por el siguiente producto.

----------------------------

Producto:
${productName}

Precio:
$${price.toLocaleString("es-CL")}

Catálogo:
${catalogUrl}

----------------------------

¿Sigue disponible?

Muchas gracias.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  message
)}`;

}