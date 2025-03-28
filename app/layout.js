// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NutriTrack - Mejora tus Hábitos Alimenticios",
  description: "Plataforma de seguimiento nutricional y recomendaciones personalizadas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="">
      <body className={inter.className}>{children}</body>
    </html>
  );
}