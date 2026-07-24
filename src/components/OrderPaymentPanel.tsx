import { useState } from "react";
// import ProductGlyph from "./ProductGlyph";

export interface OrderLine {
  id: string;
  name: string;
  variant?: string;
  quantity: number;
  unitPrice: number;
  device: "phone" | "tablet" | "phone-alt" | "laptop";
}

type PaymentMethod = "bank" | "cod" | "paypal";

interface OrderPaymentPanelProps {
  items: OrderLine[];
  shippingCost: number;
  shippingLabel?: string;
  onPlaceOrder?: () => void;
  placed?: boolean;
  error?: string;
  formButton?: boolean;
}

export default function OrderPaymentPanel({
  items,
  shippingCost,
  shippingLabel = "Worldwide Standard Shipping",
  onPlaceOrder,
  placed,
  error,
  formButton = false,
}: OrderPaymentPanelProps) {
  const [payment, setPayment] = useState<PaymentMethod>("bank");
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const total = subtotal + shippingCost;

  return (
    <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/60">
      <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">Your Order</h2>

      <div className="mt-5 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
        <span>Product</span>
        <span>Sub Total</span>
      </div>

      <div className="mt-3 divide-y divide-gray-200 dark:divide-gray-700">
        {items.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-3 py-4">
            <div className="flex items-start gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-gray-900">
                {/* <ProductGlyph device={item.device} className="h-10 w-10" /> */}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{item.name}</p>
                {item.variant && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.variant}</p>
                )}
                <p className="text-sm text-gray-400 dark:text-gray-500">x {item.quantity}</p>
              </div>
            </div>
            <p className="shrink-0 text-sm font-semibold text-gray-800 dark:text-gray-100">
              ${(item.unitPrice * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}

        <div className="flex items-center justify-between py-4 text-sm">
          <span className="text-gray-600 dark:text-gray-300">{shippingLabel}</span>
          <span className="font-semibold text-red-500">+ ${shippingCost.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between pt-4">
          <span className="text-base font-extrabold text-gray-900 dark:text-white">Order Total</span>
          <span className="text-base font-extrabold text-brand-600 dark:text-brand-400">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <fieldset className="mt-6 space-y-4 border-t border-gray-200 pt-6 dark:border-gray-700">
        <legend className="sr-only">Payment method</legend>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="radio"
            name="payment-method"
            checked={payment === "bank"}
            onChange={() => setPayment("bank")}
            className="mt-0.5 h-4 w-4 accent-brand-500"
          />
          <span>
            <span className="block text-sm font-bold text-gray-900 dark:text-white">
              Direct Bank Transfer
            </span>
            {payment === "bank" && (
              <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                Make your payment directly into our bank account. Please use your Order ID as
                the payment reference. Your order will not be shipped until the funds have
                cleared in our account.
              </span>
            )}
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            name="payment-method"
            checked={payment === "cod"}
            onChange={() => setPayment("cod")}
            className="h-4 w-4 accent-brand-500"
          />
          <span className="text-sm font-bold text-gray-900 dark:text-white">Cash on Delivery</span>
        </label>

        <label className="flex cursor-pointer items-center justify-between gap-3">
          <span className="flex items-center gap-3">
            <input
              type="radio"
              name="payment-method"
              checked={payment === "paypal"}
              onChange={() => setPayment("paypal")}
              className="h-4 w-4 accent-brand-500"
            />
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              Paypal{" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-normal text-sky-600 hover:underline dark:text-sky-400"
              >
                What&apos;s Paypal?
              </a>
            </span>
          </span>
          <span className="text-sm font-bold italic text-blue-700">PayPal</span>
        </label>
      </fieldset>

      {error && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-500">
          {error}
        </p>
      )}
      {placed && (
        <p role="status" className="mt-4 text-sm font-medium text-brand-600 dark:text-brand-400">
          Order placed! A confirmation email is on its way.
        </p>
      )}

      <button
        type={formButton ? "submit" : "button"}
        onClick={formButton ? undefined : onPlaceOrder}
        className="mt-6 w-full rounded-lg bg-brand-500 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
      >
        Place Order
      </button>
    </div>
  );
}
