"use client";

import Image from "next/image";
import Link from "next/link";
import { useShopStore } from "@/store/useShopStore";
import { products } from "@/data/products";
import { formatINR } from "@/lib/format";

export default function CartPage() {
  const cart = useShopStore((s) => s.cart);
  const updateQuantity = useShopStore((s) => s.updateQuantity);
  const removeFromCart = useShopStore((s) => s.removeFromCart);
  const clearCart = useShopStore((s) => s.clearCart);

  const detailed = cart
    .map((c) => ({
      item: c,
      product: products.find((p) => p.id === c.productId)!,
    }))
    .filter((x) => x.product);

  const subtotal = detailed.reduce((sum, { item, product }) => sum + product.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {detailed.length === 0 ? (
        <p className="text-neutral-600">Your cart is empty. <Link href="/shop" className="text-amber-700">Shop now</Link>.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {detailed.map(({ item, product }) => (
              <div key={product.id} className="border rounded-lg p-3 flex gap-3">
                <div className="relative w-24 h-24 rounded overflow-hidden">
                  <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{product.name}</h3>
                  <p className="text-xs text-neutral-500 mt-1">{formatINR(product.price)}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <label className="text-xs text-neutral-600">Qty</label>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(product.id, Math.max(1, Number(e.target.value)))}
                      className="w-16 border rounded px-2 py-1 text-sm"
                    />
                    <button onClick={() => removeFromCart(product.id)} className="text-sm px-3 py-1 border rounded hover:bg-neutral-50">Remove</button>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={clearCart} className="text-sm text-red-700 hover:underline">Clear cart</button>
          </div>
          <div className="border rounded-lg p-4 h-fit">
            <h2 className="font-semibold mb-2">Order Summary</h2>
            <div className="flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span>{formatINR(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span>Shipping</span>
              <span>Free over ₹499</span>
            </div>
            <div className="border-t mt-3 pt-3 flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>{formatINR(subtotal)}</span>
            </div>
            <button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded text-sm">Checkout (COD/Prepaid)</button>
            <p className="text-xs text-neutral-500 mt-2">Extra 5% off on prepaid orders.</p>
          </div>
        </div>
      )}
    </div>
  );
}