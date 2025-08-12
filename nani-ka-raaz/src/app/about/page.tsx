export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold">About Us</h1>
      <p className="mt-4 text-neutral-700">
        At NANI KA RAAZ, we bring the timeless flavours of Indian kitchens to your home. Our masalas are crafted with care, inspired by family recipes, and sourced directly from village farmers to ensure freshness and authenticity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-5 border rounded-lg bg-white">
          <h3 className="font-semibold">Heritage</h3>
          <p className="text-sm text-neutral-600 mt-2">Rooted in tradition, our blends preserve the wisdom of generations.</p>
        </div>
        <div className="p-5 border rounded-lg bg-white">
          <h3 className="font-semibold">Authenticity</h3>
          <p className="text-sm text-neutral-600 mt-2">No shortcuts, no fillers—only pure, high-quality ingredients.</p>
        </div>
        <div className="p-5 border rounded-lg bg-white">
          <h3 className="font-semibold">Village Sourcing</h3>
          <p className="text-sm text-neutral-600 mt-2">We partner with small farmers to bring you the best from the source.</p>
        </div>
      </div>
    </div>
  );
}