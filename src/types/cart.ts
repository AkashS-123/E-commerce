export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  device: "phone" | "tablet" | "phone-alt" | "laptop";
  badge?: { label: string; tone: "save" | "new"; sublabel?: string };
  reviewCount?: number;
  shippingLabel: string;
  shippingCost: number;
  freeGift?: boolean;
  inStock: boolean;
  image?: string;
}
