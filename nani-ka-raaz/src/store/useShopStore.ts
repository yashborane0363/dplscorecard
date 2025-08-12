"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, WishlistItem } from "@/types";

interface ShopState {
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
}

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      addToCart: (productId, quantity = 1) => {
        const current = get().cart;
        const existing = current.find((c) => c.productId === productId);
        if (existing) {
          set({
            cart: current.map((c) =>
              c.productId === productId
                ? { ...c, quantity: c.quantity + quantity }
                : c
            ),
          });
        } else {
          set({ cart: [...current, { productId, quantity }] });
        }
      },
      removeFromCart: (productId) =>
        set({ cart: get().cart.filter((c) => c.productId !== productId) }),
      updateQuantity: (productId, quantity) =>
        set({
          cart: get().cart.map((c) =>
            c.productId === productId ? { ...c, quantity } : c
          ),
        }),
      clearCart: () => set({ cart: [] }),
      addToWishlist: (productId) => {
        const exists = get().wishlist.some((w) => w.productId === productId);
        if (!exists) {
          set({
            wishlist: [
              ...get().wishlist,
              { productId, addedAt: Date.now() },
            ],
          });
        }
      },
      removeFromWishlist: (productId) =>
        set({
          wishlist: get().wishlist.filter((w) => w.productId !== productId),
        }),
    }),
    {
      name: "nani-ka-raaz-store",
      partialize: (state) => ({ cart: state.cart, wishlist: state.wishlist }),
    }
  )
);