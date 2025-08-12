"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Heart, ShoppingCart, Package2 } from "lucide-react";
import { useShopStore } from "@/store/useShopStore";
import { categories } from "@/data/products";

export default function Navbar() {
  const cartCount = useShopStore((s) => s.cart.reduce((a, c) => a + c.quantity, 0));
  const wishlistCount = useShopStore((s) => s.wishlist.length);

  const categoryLinks = useMemo(
    () => categories.map((c) => (
      <Link
        key={c}
        href={`/shop?category=${encodeURIComponent(c)}`}
        className="px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 text-sm"
      >
        {c}
      </Link>
    )),
    []
  );

  return (
    <div className="w-full border-b border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-3 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="font-extrabold tracking-tight text-lg">
          NANI KA RAAZ
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <Link href="/shop" className="hover:text-amber-700">Shop</Link>
          <Link href="/about" className="hover:text-amber-700">About Us</Link>
          <Link href="/track-order" className="hover:text-amber-700">Track Order</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/wishlist" className="relative hover:text-amber-700">
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-amber-600 text-white rounded-full px-1.5">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative hover:text-amber-700">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-amber-600 text-white rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-3 pb-3 flex items-center gap-2 flex-wrap">
        <div className="hidden sm:flex items-center gap-2 text-neutral-600 text-xs">
          <Package2 size={14} />
          <span>Explore categories:</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {categoryLinks}
        </div>
      </div>
    </div>
  );
}