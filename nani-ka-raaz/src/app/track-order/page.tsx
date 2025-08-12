"use client";

import { useState } from "react";
import type { OrderTrackingInfo } from "@/types";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [result, setResult] = useState<OrderTrackingInfo | null>(null);

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    // Mocked response
    const statuses: OrderTrackingInfo["status"][] = [
      "Processing",
      "Packed",
      "Shipped",
      "Out for Delivery",
      "Delivered",
    ];
    const status = statuses[orderNumber.trim().length % statuses.length];
    setResult({ orderNumber, status, estimatedDelivery: "3-5 days" });
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold">Track Order</h1>
      <form onSubmit={handleTrack} className="mt-4 flex gap-2">
        <input
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="Enter order number"
          className="flex-1 border rounded px-3 py-2 text-sm"
          required
        />
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 rounded text-sm">Track</button>
      </form>
      {result && (
        <div className="mt-6 border rounded p-4 bg-white">
          <p className="text-sm">Order #{result.orderNumber}</p>
          <p className="mt-1 font-semibold">Status: {result.status}</p>
          <p className="text-sm text-neutral-600 mt-1">Est. delivery: {result.estimatedDelivery}</p>
        </div>
      )}
    </div>
  );
}