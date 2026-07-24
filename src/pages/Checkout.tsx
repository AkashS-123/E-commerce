import { useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import CollapsibleNotice from "../components/CollapsibleNotice";


const orderItems = [
  {
    id: "macbook-pro-2022",
    name: "Pinnaeple Macbook Pro 2022",
    variant: "M1 / 512GB",
    quantity: 3,
    unitPrice: 579,
  },
];

const SHIPPING_COST = 9.5;

type PaymentMethod = "bank" | "cod" | "paypal";

const inputClass =
  "w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100";
const labelClass = "mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200";

export default function Checkout() {
  const [payment, setPayment] = useState<PaymentMethod>("bank");
  const [createAccount, setCreateAccount] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [placed, setPlaced] = useState(false);

  const subtotal = useMemo(
    () => orderItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [],
  );
  const total = subtotal + SHIPPING_COST;

  function applyCoupon(e: FormEvent) {
    e.preventDefault();
    if (couponCode.trim()) setCouponApplied(couponCode.trim());
  }

  function handlePlaceOrder(e: FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      setError("Fill in every required field before placing your order.");
      return;
    }
    setError("");
    setPlaced(true);
  }

  return (
    <>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Pages" }, { label: "Checkout" }]} />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <h1 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
            Checkout
          </h1>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <CollapsibleNotice message="Returning customer?" linkLabel="Click here to log in">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Have an account already?{" "}
                <Link to="/login" className="font-semibold text-brand-600 hover:underline dark:text-brand-400">
                  Log in
                </Link>{" "}
                to check out faster with your saved details.
              </p>
            </CollapsibleNotice>

            <CollapsibleNotice message="Have a coupon?" linkLabel="Click here to enter your code">
              {couponApplied ? (
                <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                  Coupon "{couponApplied}" applied.
                </p>
              ) : (
                <form onSubmit={applyCoupon} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Coupon code"
                    className={inputClass + " sm:flex-1"}
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-brand-500 px-6 py-3 text-sm font-bold uppercase text-white transition hover:bg-brand-600"
                  >
                    Apply
                  </button>
                </form>
              )}
            </CollapsibleNotice>
          </div>

          <form onSubmit={handlePlaceOrder} className="mt-10 grid gap-10 lg:grid-cols-3" noValidate>
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">Billing Detail</h2>

                <div className="mt-6 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className={labelClass}>
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input id="firstName" type="text" required className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClass}>
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input id="lastName" type="text" required className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company Name <span className="font-normal text-gray-400">(Optional)</span>
                    </label>
                    <input id="company" type="text" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="country" className={labelClass}>
                      Country / Region <span className="text-red-500">*</span>
                    </label>
                    <select id="country" required defaultValue="United States (US)" className={inputClass}>
                      <option>United States (US)</option>
                      <option>United Kingdom (UK)</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>India</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="street" className={labelClass}>
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="street"
                      type="text"
                      required
                      placeholder="House number and street name ..."
                      className={inputClass}
                    />
                    <input
                      id="street2"
                      type="text"
                      placeholder="Apartment, suite, unit, etc (Optional)"
                      className={inputClass + " mt-3"}
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className={labelClass}>
                      Town / City <span className="text-red-500">*</span>
                    </label>
                    <input id="city" type="text" required className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="state" className={labelClass}>
                      State / County <span className="text-red-500">*</span>
                    </label>
                    <select id="state" required defaultValue="Washington" className={inputClass}>
                      <option>Washington</option>
                      <option>New York</option>
                      <option>California</option>
                      <option>Texas</option>
                      <option>Florida</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="zip" className={labelClass}>
                      Zip Code <span className="text-red-500">*</span>
                    </label>
                    <input id="zip" type="text" required className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input id="phone" type="tel" required className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input id="email" type="email" required className={inputClass} />
                  </div>

                  <label className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
                    <input
                      type="checkbox"
                      checked={createAccount}
                      onChange={(e) => setCreateAccount(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-600"
                    />
                    Create an account?
                  </label>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">
                  Additional Information
                </h2>
                <div className="mt-6">
                  <label htmlFor="orderNotes" className={labelClass}>
                    Order Notes <span className="font-normal text-gray-400">(Optional)</span>
                  </label>
                  <textarea
                    id="orderNotes"
                    rows={5}
                    placeholder="Note about your order, e.g. special note for delivery"
                    className={inputClass + " resize-none"}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/60 lg:sticky lg:top-6">
                <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">Your Order</h2>

                <div className="mt-5 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                  <span>Product</span>
                  <span>Sub Total</span>
                </div>

                <div className="mt-3 divide-y divide-gray-200 dark:divide-gray-700">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex items-start justify-between gap-3 py-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-gray-900">
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.variant}</p>
                          <p className="text-sm text-gray-400 dark:text-gray-500">x {item.quantity}</p>
                        </div>
                      </div>
                      <p className="shrink-0 text-sm font-semibold text-gray-800 dark:text-gray-100">
                        ${(item.unitPrice * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}

                  <div className="flex items-center justify-between py-4 text-sm">
                    <span className="text-gray-600 dark:text-gray-300">
                      Worldwide Standard Shipping
                    </span>
                    <span className="font-semibold text-red-500">
                      + ${SHIPPING_COST.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-base font-extrabold text-gray-900 dark:text-white">
                      Order Total
                    </span>
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
                      name="payment"
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
                          Make your payment directly into our bank account. Please use your
                          Order ID as the payment reference. Your order will not be shipped
                          until the funds have cleared in our account.
                        </span>
                      )}
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={payment === "cod"}
                      onChange={() => setPayment("cod")}
                      className="h-4 w-4 accent-brand-500"
                    />
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      Cash on Delivery
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center justify-between gap-3">
                    <span className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
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
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-brand-500 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
