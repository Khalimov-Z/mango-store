"use client";
import Image from "next/image";
import { Button } from "./ui/Button";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
    dimensions: string;
    isInStock: boolean;
    image: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, removeFromCart, items, isMounted } = useCart();
  
  // Safely find the item if mounted, else ignore (avoids hydration mismatch on initial render)
  const cartItem = isMounted ? items.find((item) => item.id === product.id) : undefined;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="relative aspect-square w-full bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        {!product.isInStock && (
          <div className="absolute top-3 right-3 bg-stone-900/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
            Нет в наличии
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs font-medium uppercase tracking-wider text-stone-400 mb-1">
          {product.category === "sofa" ? "Диван" : "Кресло"}
        </p>
        <h3 className="font-bold text-lg text-stone-900 mb-2 leading-tight">{product.name}</h3>
        <p className="text-sm text-stone-500 mb-6">{product.dimensions}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-xl text-orange-500">
            {product.price.toLocaleString("ru-RU")} ₽
          </span>
          {product.isInStock ? (
            <Button 
              onClick={() => cartItem ? removeFromCart(product.id) : addToCart(product)} 
              variant={cartItem ? "outline" : "primary"}
              size="sm"
              className={cartItem ? "border-red-200 bg-red-50 text-red-500 hover:bg-red-100" : ""}
            >
              {cartItem ? "Убрать из корзины" : "В корзину"}
            </Button>
          ) : (
            <Button disabled variant="outline" size="sm">
              Под заказ
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
