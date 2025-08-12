import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.filter((p) => p.isFeatured);
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductGrid title="Featured Masala Bundles" products={featured} />
    </div>
  );
}
