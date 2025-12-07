import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DalmFoods - Soluciones de alimentación empresarial",
  description: "Plataforma de beneficios de alimentación para empresas. Subsidia comida de tus empleados en restaurantes locales. Mejora la cultura laboral y apoya al comercio local.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
