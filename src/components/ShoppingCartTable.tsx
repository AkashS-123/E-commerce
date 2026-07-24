import { CheckCircle2, X } from "lucide-react";
// import ProductGlyph from "./ProductGlyph";

interface CartLine {
  name: string;
  variant: string;
  quantity: number;
  unitPrice: number;
  device: "phone" | "tablet" | "phone-alt" | "laptop";
}

interface ShoppingCartTableProps {
  line: CartLine;
  showBanner: boolean;
  onDismissBanner: () => void;
  onQuantityChange: (quantity: number) => void;
  onRemoveAll: () => void;
}

export default function ShoppingCartTable({
  line,
  showBanner,
  onDismissBanner,
  onQuantityChange,
  onRemoveAll,
}: ShoppingCartTableProps) {
  const subtotal = line.unitPrice * line.quantity;

  return (
    <div>
      <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
        Shopping Cart
      </h2>

      {showBanner && (
        <div className="mt-4 flex items-center justify-between gap-3 rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-700 dark:bg-brand-900/20 dark:text-brand-300">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} />"{line.name}" has been added to your cart.
          </span>
          <button type="button" onClick={onDismissBanner} aria-label="Dismiss">
            <X size={15} />
          </button>
        </div>
      )}

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
            <tr>
              <th className="pb-3">Product Name</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Quantity</th>
              <th className="pb-3">Sub Total</th>
              <th className="pb-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            <tr>
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800">
                    {/* <ProductGlyph device={line.device} className="h-10 w-10" /> */}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{line.name}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{line.variant}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 font-semibold text-gray-800 dark:text-gray-100">
                ${line.unitPrice.toFixed(2)}
              </td>
              <td className="py-4">
                <select
                  value={line.quantity}
                  onChange={(e) => onQuantityChange(Number(e.target.value))}
                  className="rounded-md border border-gray-200 px-2 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                >
                  {Array.from({ length: 10 }).map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </td>
              <td className="py-4 font-semibold text-gray-800 dark:text-gray-100">
                ${subtotal.toFixed(2)}
              </td>
              <td className="py-4 text-right">
                <button
                  type="button"
                  onClick={onRemoveAll}
                  aria-label="Remove item"
                  className="text-gray-300 hover:text-rose-500 dark:text-gray-600"
                >
                  <X size={16} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          className="rounded-lg bg-brand-500 px-6 py-2.5 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
        >
          Update Cart
        </button>
        <button
          type="button"
          onClick={onRemoveAll}
          className="rounded-lg bg-gray-900 px-6 py-2.5 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Remove All
        </button>
      </div>
    </div>
  );
}
