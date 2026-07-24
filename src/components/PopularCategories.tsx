import { Smartphone, Wifi, Tablet, BatteryCharging, Gamepad2, Headphones, BookOpen } from "lucide-react";
import { popularCategories, type PopularCategory } from "../data/shopFilters";

const iconMap: Record<PopularCategory["icon"], typeof Smartphone> = {
  smartphone: Smartphone,
  wifi: Wifi,
  tablet: Tablet,
  battery: BatteryCharging,
  gamepad: Gamepad2,
  headphones: Headphones,
  book: BookOpen,
};

const tints = [
  "bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-300",
  "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300",
  "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300",
  "bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300",
  "bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300",
];

export default function PopularCategories() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
      {popularCategories.map((cat, i) => {
        const Icon = iconMap[cat.icon];
        return (
          <a key={cat.label} href="#" className="flex items-center gap-3">
            <span
              className={
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl " + tints[i % tints.length]
              }
            >
              <Icon size={20} />
            </span>
            <span>
              <span className="block text-sm font-bold text-gray-900 dark:text-white">{cat.label}</span>
              <span className="block text-xs text-gray-400 dark:text-gray-500">{cat.count} Items</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
