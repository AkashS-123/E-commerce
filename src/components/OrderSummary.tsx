import { Link } from "react-router-dom";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export default function OrderSummary({ subtotal, shipping, tax, total }: OrderSummaryProps) {
  return (
    <div className="rounded-2xl border border-brand-300 bg-white p-6 dark:border-brand-700 dark:bg-gray-900 lg:sticky lg:top-6">
      <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">Order Summary</h2>

      <dl className="mt-5 divide-y divide-gray-100 text-sm dark:divide-gray-800">
        <div className="flex items-center justify-between py-3">
          <dt className="text-gray-500 dark:text-gray-400">Sub Total:</dt>
          <dd className="font-semibold text-gray-900 dark:text-white">${subtotal.toFixed(2)}</dd>
        </div>
        <div className="flex items-center justify-between py-3">
          <dt className="text-gray-500 dark:text-gray-400">Shipping estimate:</dt>
          <dd className="font-semibold text-gray-900 dark:text-white">${shipping.toFixed(2)}</dd>
        </div>
        <div className="flex items-center justify-between py-3">
          <dt className="text-gray-500 dark:text-gray-400">Tax estimate:</dt>
          <dd className="font-semibold text-gray-900 dark:text-white">${tax.toFixed(2)}</dd>
        </div>
        <div className="flex items-center justify-between pt-4">
          <dt className="text-base font-extrabold text-gray-900 dark:text-white">Order Total:</dt>
          <dd className="text-base font-extrabold text-gray-900 dark:text-white">
            ${total.toFixed(2)}
          </dd>
        </div>
      </dl>

      <Link
        to="/checkout"
        className="mt-6 block w-full rounded-lg bg-brand-500 py-3.5 text-center text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
      >
        Checkout
      </Link>
    </div>
  );
}
