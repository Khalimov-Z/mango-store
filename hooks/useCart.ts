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

const CART_KEY = "mango_cart";
const CART_EVENT = "cart-changed";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage and subscribe to cross-component updates
  useEffect(() => {
    setIsMounted(true);

    const load = () => {
      const stored = localStorage.getItem(CART_KEY);
      if (stored) {
        try { setItems(JSON.parse(stored)); } catch { /* ignore */ }
      } else {
        setItems([]);
      }
    };

    load(); // initial load

    // Listen for updates from other useCart instances in the same tab
    window.addEventListener(CART_EVENT, load);
    return () => window.removeEventListener(CART_EVENT, load);
  }, []);

  const saveCart = (newItems: CartItem[]) => {
    setItems(newItems);
    localStorage.setItem(CART_KEY, JSON.stringify(newItems));
    // Notify all other useCart instances in the same tab
    window.dispatchEvent(new Event(CART_EVENT));
  };

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    const current = JSON.parse(localStorage.getItem(CART_KEY) || "[]") as CartItem[];
    const existing = current.find((item) => item.id === product.id);
    if (existing) {
      saveCart(current.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      saveCart([...current, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    const current = JSON.parse(localStorage.getItem(CART_KEY) || "[]") as CartItem[];
    saveCart(current.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    const current = JSON.parse(localStorage.getItem(CART_KEY) || "[]") as CartItem[];
    const existing = current.find((item) => item.id === id);
    if (!existing) return;
    if (existing.quantity + delta <= 0) {
      saveCart(current.filter((item) => item.id !== id));
    } else {
      saveCart(current.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      ));
    }
  };

  const clearCart = () => saveCart([]);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return { items, totalPrice, totalItems, addToCart, removeFromCart, updateQuantity, clearCart, isMounted };
}
