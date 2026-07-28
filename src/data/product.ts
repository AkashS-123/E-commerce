import srok from "../assets/srok.png"
import apod from "../assets/apod.png"
import opod from "../assets/opod.png"
import redmi5 from "../assets/redmi5.png"
import microsute from "../assets/microsute.png"
import redmi11 from "../assets/redmi11.png"
import apodpro from "../assets/apodpro.png"
import srok1 from "../assets/srok1.png"

export interface ColorOption {
  id: string;
  label: string;
  hex: string;
  price: number;
  image: string;
}

export interface MemorySize {
  id: string;
  label: string;
  priceDelta: number;
}

export const mainProduct = {
  slug: "samsong-galatero-x6-ultra",
  name: "Samsong Galatero X6 Ultra LTE 4G/128GB, Black Smartphone",
  breadcrumb: "Somseng Galatero X6 Ultra LTE 4G/128 GB Black Smartphone",
  reviewCount: 5,
  badge: "New",
  image: srok, srok1,
  basePrice: 569,
  sku: "ABC02516B",
  category: "Cell Phones & Tablets",
  brand: "sumsong",
  bullets: [
    "Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core",
    "DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory",
    "Commanding Design: Twin 16+1+2 Phases Digital VRM",
  ],
  colors: [
    { id: "midnight-blue", label: "Midnight Blue", hex: "#2a3a63", price: 569 },
    { id: "deep-purple", label: "Deep Purple", hex: "#4b2e63", price: 569 },
    { id: "space-black", label: "Space Black", hex: "#1c1c1e", price: 569 },
  ] as ColorOption[],
  memorySizes: [
    { id: "64gb", label: "64GB", priceDelta: -20 },
    { id: "128gb", label: "128GB", priceDelta: 40 },
    { id: "256gb", label: "256GB", priceDelta: 80 },
    { id: "512gb", label: "512GB", priceDelta: 160 },
  ] as MemorySize[],
  defaultColorId: "midnight-blue",
  defaultMemoryId: "128gb",
  promo: {
    lines: ["Buy 02 boxes get a Snack Tray", "Buy 04 boxes get a free Block Toys"],
    expires: "9h00pm, 25/5/2024",
  },
};

export const frequentlyBoughtWith = [
  {
    id: "boso-headphone",
    name: "BOSO 2 Wireless On Ear Headphone",
    price: 369,
    device: "tablet",
  },
  {
    id: "opplo-watch",
    name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    price: 129,
    device: "phone-alt",
  },
];

export const relatedProducts = [
  {
    id: "srok-oled-128",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: 579,
    originalPrice: 859,
    device: "phone",
    badge: { label: "Save", sublabel: "$199.00", tone: "save" },
    reviewCount: 152,
    shippingLabel: "Free Shipping",
    inStock: true,
    image: srok,
  },
  {
    id: "apod-pro-tablet",
    name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
    priceRange: [979, 1259],
    device: "tablet",
    badge: { label: "New", tone: "new" },
    shippingLabel: "$2.98 Shipping",
    inStock: true,
    image: apod,
  },
  {
    id: "opod-pro-12-9",
    name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    price: 659,
    device: "tablet",
    reviewCount: 5,
    shippingLabel: "Free Shipping",
    freeGift: true,
    inStock: true,
    swatches: ["#c9c9cf", "#8fb9e8", "#1c1c1e"],
    image: opod,
  },
  {
    id: "xiaomi-redmi-note-5",
    name: "Xiaomi Redmi Note 5, 64GB",
    price: 1239,
    originalPrice: 1619,
    device: "phone-alt",
    badge: { label: "Save", sublabel: "$59.00", tone: "save" },
    reviewCount: 9,
    shippingLabel: "Free Shipping",
    image: redmi5,

  },
  {
    id: "microsute-alpha-s5",
    name: "Microsute Alpha Ultra S5 Surface 128GB 2022, Sliver",
    price: 1729,
    device: "tablet",
    reviewCount: 8,
    shippingLabel: "Free Shipping",
    swatches: ["#1c1c1e", "#c9c9cf"],
    image:microsute,
  },
];

export const recentlyViewed = [
  {
    id: "xomie-remid-8",
    name: "Xomie Remid 8 Sport Water Resistance Watch",
    price: 579,
    device: "phone-alt",
    badge: { label: "New", tone: "new" },
    reviewCount: 153,
    image: redmi11,
  },
  {
    id: "microte-surface-2",
    name: "Microte Surface 2.0 Laptop",
    price: 979,
    device: "laptop",
    image:microsute,
  },
  {
    id: "apod-pro-tablet-recent",
    name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
    priceRange: [979, 1259],
    device: "tablet",
    image: apodpro,
  },
  {
    id: "srok-oled-128-recent",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: 579,
    originalPrice: 779,
    device: "phone",
    badge: { label: "Save", sublabel: "$190.00", tone: "save" },
    reviewCount: 153,
    image:srok1,
  },
];
