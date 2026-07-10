import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Necronomishop",
  description: "Coleccionismo Retro y Actual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>

        {children}

        <Toaster
          richColors
          closeButton
          position="top-right"
          duration={3500}
        />

      </body>
    </html>
  );
}