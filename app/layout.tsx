import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["cyrillic", "latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Mango | Бюджетная мебель с умом",
  description: "Интернет-магазин стильной и недорогой мебели. Диваны и кресла с бесконечным уютом.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans flex flex-col min-h-screen bg-[#fafaf9] text-[#1c1917]`}>
        <NavBar />
        <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
