import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold">NANI KA RAAZ</h3>
          <p className="mt-2 text-neutral-600">
            Heritage, authenticity, and village-sourced goodness in every pack.
          </p>
          <p className="mt-3 text-neutral-600">
            Contact: +91 99999 99999
            <br />
            Email: hello@nani-ka-raaz.com
          </p>
          <p className="mt-3 text-neutral-600">
            Interested in partnering with us? Franchise enquiries welcome.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Policies</h4>
          <ul className="mt-2 space-y-2">
            <li><Link className="hover:text-amber-700" href="/policies/shipping">Shipping Policy</Link></li>
            <li><Link className="hover:text-amber-700" href="/policies/refund">Refund & Cancellation</Link></li>
            <li><Link className="hover:text-amber-700" href="/policies/terms">Terms of Service</Link></li>
            <li><Link className="hover:text-amber-700" href="/policies/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li><Link className="hover:text-amber-700" href="/shop">Shop</Link></li>
            <li><Link className="hover:text-amber-700" href="/about">About Us</Link></li>
            <li><Link className="hover:text-amber-700" href="/track-order">Track Order</Link></li>
            <li><Link className="hover:text-amber-700" href="/wishlist">Wishlist</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} NANI KA RAAZ. All rights reserved.
      </div>
    </footer>
  );
}