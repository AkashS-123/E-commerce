import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Heart,
  User,
  ShoppingCart,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const navLinks = [
  { label: "Homes", to: "/" },
  { label: "Pages", to: "/login" },
  { label: "Products", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
const { itemCount } = useCart();
const { user, logout } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
              SWOO
            </span>
            <span className="block text-[11px] font-semibold tracking-wide text-gray-500 dark:text-gray-400">
              TECH MART
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-gray-800 dark:text-gray-100 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400"
            >
              {link.label}
              <ChevronDown size={14} className="text-gray-400" />
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-4">
          <button
            type="button"
            aria-label="Compare"
            className="hidden h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-brand-50 hover:text-brand-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 sm:flex sm:h-10 sm:w-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 4v16M17 4v16M4 8h6M14 16h6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Wishlist"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-brand-50 hover:text-brand-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 sm:h-10 sm:w-10"
          >
            <Heart size={17} />
          </button>

          {user ? (
        <div className="hidden items-center gap-2 sm:flex">
        <Link
         to="/profile/account-info"
      className="flex items-center gap-2"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-300">
        <User size={18} />
      </span>

      <span className="text-xs leading-tight text-gray-500 dark:text-gray-400">
        WELCOME
        <span className="block text-sm font-bold text-gray-900 dark:text-white">
          {user.firstName} {user.lastName}
        </span>
      </span>
    </Link>

    <button
      onClick={logout}
      className="text-xs font-semibold text-red-500 hover:text-red-600"
    >
      Logout
    </button>
  </div>
) : (
  <Link
    to="/login"
    className="hidden items-center gap-2 sm:flex"
  >
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-300">
      <User size={18} />
    </span>

    <span className="text-xs leading-tight text-gray-500 dark:text-gray-400">
      WELCOME
      <span className="block text-sm font-bold text-gray-900 dark:text-white">
        Log in / Register
      </span>
    </span>
  </Link>
)}

          <Link to="/cart" className="flex items-center gap-2">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-300 sm:h-10 sm:w-10">
              <ShoppingCart size={17} />
              <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-brand-500 px-1 text-[10px] font-bold text-white">
              {itemCount}
              </span>
            </span>
            <span className="hidden text-xs leading-tight text-gray-500 dark:text-gray-400 sm:block">
              CART
              <span className="block text-sm font-bold text-gray-900 dark:text-white">
                $1,689.00
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-brand-50 hover:text-brand-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 md:hidden sm:h-10 sm:w-10"
          >
            {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 lg:hidden sm:h-10 sm:w-10"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-gray-100 px-6 py-3 text-sm font-semibold text-gray-800 dark:border-gray-800 dark:text-gray-100 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
