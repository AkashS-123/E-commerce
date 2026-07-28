export interface ProductCard {
  id: string;
  name: string;

  price?: number;
  originalPrice?: number;
  priceRange?: [number, number];

  device: "phone" | "tablet" | "phone-alt" | "laptop";

  image?: string;

  badge?: {
    label: string;
    sublabel?: string;
    tone: "save" | "new";
  };

  reviewCount?: number;

  shippingLabel?: string;

  freeGift?: boolean;

  inStock?: boolean;
  

  stockStatus?: "in-stock" | "out-of-stock" | "pre-order" | "contact";

  swatches?: string[];

  /* ===== New fields for filtering ===== */

  category: string;

  brand: string;

  rating: number;

  screenSize: string;

  memory: string;

  colors: string[];

  condition: string;

  year: number;
}