import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default async function ShopPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const categoryParam = sp?.category;
  const category = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;

  const filtered = category ? products.filter((p) => p.category === category) : products;

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <h1 className="text-2xl font-bold">Shop</h1>
        {category && (
          <p className="text-sm text-neutral-600 mt-1">Category: {category}</p>
        )}
      </div>
      <ProductGrid products={filtered} />
    </div>
  );
}