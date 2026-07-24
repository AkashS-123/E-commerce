export interface PopularCategory {
  label: string;
  count: number;
  icon:
    | "smartphone"
    | "wifi"
    | "tablet"
    | "battery"
    | "gamepad"
    | "headphones"
    | "book";
}

export const popularCategories: PopularCategory[] = [
  { label: "iPhone (iOS)", count: 74, icon: "smartphone" },
  { label: "Android", count: 35, icon: "smartphone" },
  { label: "5G Support", count: 12, icon: "wifi" },
  { label: "Apple Tablets", count: 22, icon: "tablet" },
  { label: "Smartphone Chargers", count: 33, icon: "battery" },
  { label: "Gaming", count: 9, icon: "gamepad" },
  { label: "Xiaomi", count: 52, icon: "smartphone" },
  { label: "Accessories", count: 29, icon: "headphones" },
  { label: "Samsung Tablets", count: 26, icon: "tablet" },
  { label: "eReader", count: 5, icon: "book" },
];

export interface SidebarCategory {
  label: string;
  suffix?: string;
}

export const sidebarCategories: SidebarCategory[] = [
  { label: "All" },
  { label: "Iphone" },
  { label: "Samsung" },
  { label: "Xiaomi" },
  { label: "Asus" },
  { label: "Oppo" },
  { label: "Gaming Smartphone" },
  { label: "Ipad" },
  { label: "Window Tablets" },
  { label: "eReader" },
  { label: "Smartphone Chargers" },
  { label: "5G Support Smartphone" },
  { label: "Smartphone Accessories" },
  { label: "Tablets Accessories" },
  { label: "Cell Phones", suffix: "$200" },
];

export const brandFilters = [
  { label: "envato", count: 14 },
  { label: "codecanyon", count: 8 },
  { label: "videohive", count: 7 },
  { label: "photodune", count: 18 },
  { label: "microlancer", count: 1 },
];

export const ratingFilters = [
  { stars: 5, count: 52 },
  { stars: 4, count: 24 },
  { stars: 3, count: 5 },
  { stars: 2, count: 1 },
];

export const screenSizeFilters = ["7\" & Under", "7.1\" - 8.9\"", "9\" - 10.9\"", "11\" & Greater"];

export const colorFilters = [
  "#ef4444",
  "#16a34a",
  "#2563eb",
  "#0891b2",
  "#4b5563",
  "#1f2937",
  "#7c3aed",
  "#ffffff",
];

export const memoryFilters = [
  { label: "12GB", count: 4 },
  { label: "8GB", count: 3 },
  { label: "6GB", count: 12 },
  { label: "4GB", count: 6 },
  { label: "3GB", count: 7 },
  { label: "1.5GB", count: 1 },
  { label: "1GB", count: 1 },
  { label: "512MB", count: 2 },
];

export const conditionFilters = [
  { label: "New", count: 21 },
  { label: "Like New", count: 2 },
  { label: "Open Box", count: 38 },
];
