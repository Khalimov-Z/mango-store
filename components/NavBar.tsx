"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { CartSidebar } from "./CartSidebar";

export function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems, isMounted } = useCart();

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-bold text-2xl text-orange-500 tracking-tight">
              Mango.
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-stone-600 hover:text-orange-500 font-medium transition-colors">
                Каталог
              </Link>
              <Link href="/quiz" className="text-stone-600 hover:text-orange-500 font-medium transition-colors">
                Что мне подойдет?
              </Link>
              <Link href="/contacts" className="text-stone-600 hover:text-orange-500 font-medium transition-colors">
                Контакты
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile menu link placeholder, keeping it simple for now */}
            <Link href="/quiz" className="md:hidden text-stone-600 text-sm font-medium">
              Квиз
            </Link>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-stone-600 hover:text-orange-500 transition-colors cursor-pointer"
              aria-label="Корзина"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              {isMounted && totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-orange-500 border-2 border-white rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
