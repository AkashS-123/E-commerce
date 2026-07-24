import type { CartItem } from "../types/cart";
import srok from "../assets/srok.png";
import apod from "../assets/apod.png";
import x6 from "../assets/x6.png";

export const initialCartItems: CartItem[] = [
  {
    id: "srok-oled-128",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: 579,
    quantity: 1,
    device: "phone",
    badge: { label: "Save", sublabel: "$199.00", tone: "save" },
    reviewCount: 152,
    shippingLabel: "Free Shipping",
    shippingCost: 0,
    inStock: true,
    image: srok,
    
  },
  {
    id: "apod-pro-tablet",
    name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
    price: 979,
    quantity: 1,
    device: "tablet",
    badge: { label: "New", tone: "new" },
    shippingLabel: "$2.98 Shipping",
    shippingCost: 2.98,
    inStock: true,
    image: apod,
  },
  {
    id: "samsung-galaxy-x6",
    name: "Samsung Galaxy X6 Ultra LTE 4G/128Gb, Black Smartphone",
    price: 659,
    quantity: 1,
    device: "phone-alt",
    badge: { label: "New", tone: "new" },
    reviewCount: 5,
    shippingLabel: "Free Shipping",
    shippingCost: 0,
    freeGift: true,
    inStock: true,
    image: x6,
  },
];
