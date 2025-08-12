import ProductCard from "./ProductCard";
import { Product } from "@/types";

export default function ProductGrid({ title, products }: { title?: string; products: Product[] }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}