"use client";

export default function TopBar() {
  return (
    <div className="w-full bg-amber-100 text-amber-950 text-xs sm:text-sm py-2">
      <div className="max-w-6xl mx-auto px-3 flex items-center justify-center gap-6 flex-wrap">
        <span>COD available</span>
        <span>Free shipping on orders over ₹499</span>
        <span>Extra 5% off on prepaid orders</span>
      </div>
    </div>
  );
}