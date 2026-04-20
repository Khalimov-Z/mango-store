"use client";
import { useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  dimensions: string;
  quantity: number;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedCart = localStorage.getItem("mango_cart");
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  const saveCart = (newItems: CartItem[]) => {
    setItems(newItems);
    localStorage.setItem("mango_cart", JSON.stringify(newItems));
  };

  const addToCart = (product: any) => {
    const existing = items.find((item) => item.id === product.id);
    if (existing) {
      saveCart(
        items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      saveCart([...items, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    saveCart(items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    const existing = items.find((item) => item.id === id);
    if (!existing) return;
    
    if (existing.quantity + delta <= 0) {
      removeFromCart(id);
    } else {
      saveCart(
        items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
      );
    }
  };

  const clearCart = () => {
    saveCart([]);
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    totalPrice,
    totalItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isMounted
  };
}
