export type Category =
  | "Regional Bundles"
  | "Kitchen Essentials"
  | "Spices"
  | "Combos";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  mrp?: number;
  discountPercentage?: number;
  imageUrl: string;
  category: Category;
  isFeatured?: boolean;
  tags?: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: number;
}

export interface OrderTrackingInfo {
  orderNumber: string;
  status: "Processing" | "Packed" | "Shipped" | "Out for Delivery" | "Delivered" | "Cancelled";
  estimatedDelivery?: string;
}