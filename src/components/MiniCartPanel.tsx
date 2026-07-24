import { Link } from "react-router-dom";
import { X } from "lucide-react";
// import ProductGlyph from "./ProductGlyph";

interface MiniCartPanelProps {
  name: string;
  quantity: number;
  unitPrice: number;
  device: "phone" | "tablet" | "phone-alt" | "laptop";
  onRemove: () => void;
}

export default function MiniCartPanel({
  name,
  quantity,
  unitPrice,
  onRemove,
}: MiniCartPanelProps) {
  const subtotal = unitPrice * quantity;

  return (
    <div className="rounded-2xl border border-gray-100 p-5 dark:border-gray-800">
      <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
        Your Cart
      </h2>

      {quantity > 0 ? (
        <>
          <div className="mt-4 flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800">
                {/* <ProductGlyph device={device} className="h-9 w-9" /> */}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{name}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {quantity} x ${unitPrice.toFixed(2)}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onRemove}
              aria-label="Remove from cart"
              className="text-gray-300 hover:text-rose-500 dark:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-sm dark:border-gray-800">
            <span className="text-gray-500 dark:text-gray-400">Sub Total:</span>
            <span className="font-extrabold text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link
              to="/cart"
              className="rounded-lg bg-gray-900 py-2.5 text-center text-xs font-extrabold uppercase text-white transition hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              View Cart
            </Link>
            <Link
              to="/checkout"
              className="rounded-lg bg-brand-500 py-2.5 text-center text-xs font-extrabold uppercase text-white transition hover:bg-brand-600"
            >
              Checkout
            </Link>
          </div>
        </>
      ) : (
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Your cart is empty.</p>
      )}
    </div>
  );
}
