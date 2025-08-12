"use client";

import Link from "next/link";
import Image from "next/image";
import { useShopStore } from "@/store/useShopStore";
import { products } from "@/data/products";
import { formatINR } from "@/lib/format";

export default function WishlistPage() {
  const wishlist = useShopStore((s) => s.wishlist);
  const addToCart = useShopStore((s) => s.addToCart);
  const removeFromWishlist = useShopStore((s) => s.removeFromWishlist);

  const items = wishlist
    .map((w) => products.find((p) => p.id === w.productId))
    .filter(Boolean);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      {items.length === 0 ? (
        <p className="text-neutral-600">Your wishlist is empty. <Link href="/shop" className="text-amber-700">Browse products</Link>.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((p) => (
            <div key={p!.id} className="border rounded-lg overflow-hidden bg-white">
              <div className="relative aspect-video">
                <Image src={p!.imageUrl} alt={p!.name} fill className="object-cover" />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm">{p!.name}</h3>
                <p className="text-xs text-neutral-500 mt-1">{formatINR(p!.price)}</p>
                <div className="mt-3 flex items-center gap-2">
                  <button onClick={() => addToCart(p!.id)} className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-sm py-2 rounded">Add to cart</button>
                  <button onClick={() => removeFromWishlist(p!.id)} className="px-3 py-2 text-sm rounded border hover:bg-neutral-50">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}