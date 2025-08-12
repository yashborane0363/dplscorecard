import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-[url('https://images.unsplash.com/photo-1511690078903-71dc5a49f5e1?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center">
      <div className="backdrop-brightness-[.65]">
        <div className="max-w-6xl mx-auto px-4 py-24 sm:py-28 text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold max-w-2xl leading-tight">
            Heritage Spices, Authentic Flavours
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-white/90">
            Discover masalas crafted with love, sourced from village farmers, and blended to perfection like only Nani can.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link href="/shop?category=Regional%20Bundles" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-md text-sm font-medium">
              Shop Featured Bundles
            </Link>
            <Link href="/about" className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-md text-sm font-medium">
              Our Story
            </Link>
          </div>
          <div className="mt-8 text-xs sm:text-sm bg-white/10 inline-block px-3 py-1 rounded">
            Limited time: Up to 25% off + 5% prepaid discount
          </div>
        </div>
      </div>
    </section>
  );
}