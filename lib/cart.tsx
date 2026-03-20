"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/products";

const STORAGE_KEY = "rheuse-cart";
const FREE_SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 5.99;

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  cartItems: CartItem[];
  cartCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (sku: string) => void;
  updateQuantity: (sku: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed as CartItem[];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // localStorage might be full or unavailable
  }
  // Invalidate cached snapshot so getCartSnapshot returns fresh data
  cachedSnapshot = items;
  // Notify useSyncExternalStore subscribers
  cartStoreListeners.forEach((listener) => listener());
}

// External store for cart items (bridges localStorage ↔ React)
const cartStoreListeners = new Set<() => void>();
const emptyCart: CartItem[] = [];
let cachedSnapshot: CartItem[] | null = null;

function subscribeToCart(listener: () => void) {
  cartStoreListeners.add(listener);
  return () => cartStoreListeners.delete(listener);
}

function getCartSnapshot(): CartItem[] {
  if (cachedSnapshot === null) {
    cachedSnapshot = loadCart();
  }
  return cachedSnapshot;
}

function getCartServerSnapshot(): CartItem[] {
  return emptyCart;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const cartItems = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot,
    getCartServerSnapshot,
  );

  const addToCart = useCallback((product: Product, quantity = 1) => {
    const prev = loadCart();
    const existing = prev.find((item) => item.product.sku === product.sku);
    if (existing) {
      saveCart(
        prev.map((item) =>
          item.product.sku === product.sku
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      saveCart([...prev, { product, quantity }]);
    }
  }, []);

  const removeFromCart = useCallback((sku: string) => {
    saveCart(loadCart().filter((item) => item.product.sku !== sku));
  }, []);

  const updateQuantity = useCallback((sku: string, quantity: number) => {
    if (quantity < 1) return;
    saveCart(
      loadCart().map((item) =>
        item.product.sku === sku ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    saveCart([]);
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        shipping,
        total,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
