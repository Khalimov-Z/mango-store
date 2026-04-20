"use client";
import { useCart } from "@/hooks/useCart";
import { Button } from "./ui/Button";
import Image from "next/image";
import { useEffect } from "react";

export function CartSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, totalPrice, updateQuantity, removeFromCart, isMounted } = useCart();

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCheckout = () => {
    const phone = "79990001234";
    let message = "Здравствуйте! Хочу заказать мебель:\n\n";
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.dimensions}) — ${item.quantity} шт. по ${item.price} руб.\n`;
    });
    message += `\nИтого: ${totalPrice.toLocaleString("ru-RU")} руб.\n\nАктуально ли в наличии?`;
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-stone-900/50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
        onClick={onClose} 
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:max-w-md bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
          <h2 className="text-xl font-bold text-stone-900">Ваша корзина</h2>
          <button 
            onClick={onClose} 
            className="p-2 text-stone-400 hover:text-orange-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white"
          >
             ✕ 
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-stone-400 space-y-4">
              <span className="text-4xl">🛒</span>
              <p>Корзина пока пуста</p>
              <Button variant="ghost" onClick={onClose}>Перейти к покупкам</Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-stone-900 leading-tight">{item.name}</h4>
                  <p className="text-sm text-stone-500 mb-2">{item.dimensions}</p>
                  <p className="text-orange-500 font-bold">{item.price.toLocaleString("ru-RU")} ₽</p>
                  
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 flex items-center justify-center transition-colors">-</button>
                    <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 flex items-center justify-center transition-colors">+</button>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-stone-300 hover:text-red-500 self-start p-1 transition-colors"
                  title="Удалить"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-stone-100 bg-stone-50">
            <div className="flex justify-between items-center mb-5">
              <span className="text-stone-500 font-medium text-lg">Итого:</span>
              <span className="text-2xl font-bold text-stone-900">{totalPrice.toLocaleString("ru-RU")} ₽</span>
            </div>
            <Button onClick={handleCheckout} className="w-full text-lg shadow-orange-500/25 shadow-lg group" size="lg">
              Оформить заказ
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <p className="text-xs text-center text-stone-400 mt-4 leading-relaxed">
              Вы будете перенаправлены в WhatsApp <br /> для быстрого подтверждения заказа с менеджером
            </p>
          </div>
        )}
      </div>
    </>
  );
}
