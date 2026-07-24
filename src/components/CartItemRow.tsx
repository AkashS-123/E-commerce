import { Minus, Plus, Heart, X, CheckCircle2 } from "lucide-react";
import type { CartItem } from "../types/cart";

interface CartItemRowProps {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onSaveForLater: (id: string) => void;
}

export default function CartItemRow({
  item,
  onQuantityChange,
  onRemove,
  onSaveForLater,
}: CartItemRowProps) {
  return (
    <div className="relative rounded-2xl bg-gray-50 p-5 dark:bg-gray-800/60 sm:p-6">
      <div className="absolute right-5 top-5 flex gap-2 sm:right-6 sm:top-6">
        <button
          type="button"
          onClick={() => onSaveForLater(item.id)}
          aria-label="Save for later"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition hover:bg-brand-100 hover:text-brand-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-brand-900/40 dark:hover:text-brand-300"
        >
          <Heart size={16} />
        </button>
        <button
          type="button"
          onClick={() => onRemove(item.id)}
          aria-label={`Remove ${item.name} from cart`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-500 transition hover:bg-rose-200 dark:bg-rose-900/40 dark:text-rose-300 dark:hover:bg-rose-900/70"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-gray-900">
          {item.badge && (
            <span
              className={
                "absolute left-2 top-2 rounded-md px-2 py-1 text-[11px] font-bold uppercase leading-tight text-white " +
                (item.badge.tone === "save" ? "bg-brand-500" : "bg-gray-900 dark:bg-gray-700")
              }
            >
              {item.badge.label}
              {item.badge.sublabel && (
                <span className="block text-[11px] font-bold">{item.badge.sublabel}</span>
              )}
            </span>
          )}
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="h-20 w-20 object-contain"
            />
          ) : null}
        </div>

        <div className="flex-1 pt-1 sm:pr-20">
          {item.reviewCount && (
            <p className="text-xs text-gray-400 dark:text-gray-500">({item.reviewCount})</p>
          )}
          <h3 className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
            {item.name}
          </h3>
          <p className="mt-2 text-lg font-extrabold text-red-500">
            ${item.price.toFixed(2)}
          </p>

          <div className="mt-3 flex items-center gap-1 rounded-lg border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-900 w-fit">
            <button
              type="button"
              onClick={() => onQuantityChange(item.id, Math.max(1, item.quantity - 1))}
              aria-label={`Decrease quantity of ${item.name}`}
              className="flex h-7 w-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center text-sm font-semibold text-gray-800 dark:text-gray-100">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              aria-label={`Increase quantity of ${item.name}`}
              className="flex h-7 w-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <Plus size={14} />
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-bold uppercase text-brand-600 dark:bg-brand-900/30 dark:text-brand-300">
              {item.shippingLabel}
            </span>
            {item.freeGift && (
              <span className="rounded-md bg-rose-50 px-2.5 py-1 text-xs font-bold uppercase text-rose-500 dark:bg-rose-900/30 dark:text-rose-300">
                Free Gift
              </span>
            )}
          </div>

          {item.inStock && (
            <p className="mt-3 flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300">
              <CheckCircle2 size={16} className="text-brand-500" />
              In stock
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
