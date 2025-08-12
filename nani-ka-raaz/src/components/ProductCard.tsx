"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { useShopStore } from "@/store/useShopStore";
import { formatINR } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useShopStore((s) => s.addToCart);
  const wishlist = useShopStore((s) => s.wishlist);
  const addToWishlist = useShopStore((s) => s.addToWishlist);
  const removeFromWishlist = useShopStore((s) => s.removeFromWishlist);

  const inWishlist = wishlist.some((w) => w.productId === product.id);

  return (
    <div className="border rounded-lg overflow-hidden bg-white flex flex-col">
      <div className="relative aspect-square">
        {/* Using fill requires parent relative/aspect ratio */}
        <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
        <p className="text-xs text-neutral-500 line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold text-amber-700">{formatINR(product.price)}</span>
          {product.mrp && (
            <span className="text-xs text-neutral-400 line-through">{formatINR(product.mrp)}</span>
          )}
          {product.discountPercentage && (
            <span className="text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
              {product.discountPercentage}% OFF
            </span>
          )}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={() => addToCart(product.id, 1)}
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-sm py-2 rounded flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} /> Add
          </button>
          <button
            aria-label="Toggle wishlist"
            onClick={() => (inWishlist ? removeFromWishlist(product.id) : addToWishlist(product.id))}
            className={`p-2 rounded border ${inWishlist ? "bg-pink-100 text-pink-700 border-pink-200" : "hover:bg-neutral-50"}`}
          >
            <Heart size={16} fill={inWishlist ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </div>
  );
}