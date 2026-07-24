import { Phone, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function TopBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="hidden border-b border-gray-100 bg-white text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
            Hotline 24/7
          </span>
          <a
            href="tel:+0253886251"
            className="flex items-center gap-1 font-semibold text-gray-800 dark:text-gray-100"
          >
            <Phone size={14} className="text-brand-500" />
            (025) 3886 25 16
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">
            Sell on Swoo
          </a>
          <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">
            Order Tracking
          </a>

          <button className="flex items-center gap-1">
            USD <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1">
            <span aria-hidden>🇺🇸</span> Eng <ChevronDown size={14} />
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-brand-400 hover:text-brand-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-brand-400 dark:hover:text-brand-400"
          >
            {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          </button>
        </div>
      </div>
    </div>
  );
}
