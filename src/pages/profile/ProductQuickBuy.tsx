import { useState } from "react";
import { Minus, Plus, Heart, ShieldCheck, Truck } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import ProductShowcase from "../../components/ProductShowcase";
import ProductCardTile from "../../components/ProductCardTile";
import ProductTabs from "../../components/ProductTabs";
import MiniCartPanel from "../../components/MiniCartPanel";
import ShoppingCartTable from "../../components/ShoppingCartTable";
import CollapsibleNotice from "../../components/CollapsibleNotice";
import BillingForm from "../../components/BillingForm";
import OrderPaymentPanel, { type OrderLine } from "../../components/OrderPaymentPanel";
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "../../components/SocialIcons";
import { relatedProducts } from "../../data/product";

const PRODUCT = {
  name: "Pinnaeple Macbook Pro 2022 M1 / 512GB, Dark Grey",
  breadcrumb: "Pinnaeple Macbook Pro 2022 M1 / 512GB, Dark Grey",
  reviewCount: 5,
  price: 579,
  color: "#2b2b30",
  sku: "ABC02516B",
  category: "Cell Phones & Tablets",
  tags: "Laptop, Macbook, Computer, M1",
  bullets: [
    "Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core",
    "DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory",
    "Commanding Power Design: Twin 16+1+2 Phases Digital VRM",
  ],
};

const inputClass =
  "w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100";

export default function ProductQuickBuy() {
  const [quantity, setQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [showAddedBanner, setShowAddedBanner] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [shipToDifferent, setShipToDifferent] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState<string | null>(null);
  const [placed, setPlaced] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const orderLine: OrderLine = {
    id: "pinnaeple-macbook-pro-2022",
    name: "Pinnaeple Macbook Pro 2022",
    variant: "M1 / 512GB",
    quantity: Math.max(cartQuantity, 1),
    unitPrice: PRODUCT.price,
    device: "laptop",
  };

  function handleAddToCart() {
    setCartQuantity((q) => q + quantity);
    setShowAddedBanner(true);
  }

  function handleRemoveAll() {
    setCartQuantity(0);
    setShowAddedBanner(false);
  }

  function applyCoupon(e: React.FormEvent) {
    e.preventDefault();
    if (couponCode.trim()) setCouponApplied(couponCode.trim());
  }

  function handlePlaceOrder(formEl: HTMLFormElement) {
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      setCheckoutError("Fill in every required field before placing your order.");
      return;
    }
    setCheckoutError("");
    setPlaced(true);
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/shop" },
          { label: "Top Cell Phones & Tablets", to: "/shop" },
          { label: PRODUCT.breadcrumb },
        ]}
      />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr_280px]">
            {/* Gallery */}
            <div>
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800/60">
                <span className="absolute left-3 top-3 rounded-md bg-gray-900 px-2.5 py-1 text-xs font-bold uppercase text-white dark:bg-gray-700">
                  New
                </span>
                <ProductShowcase color={PRODUCT.color} angle="front" className="h-full w-full" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {(["front", "side", "back"] as const).map((angle) => (
                  <div
                    key={angle}
                    className="flex aspect-square items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800/60"
                  >
                    <ProductShowcase color={PRODUCT.color} angle={angle} className="h-full w-full" />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-xs text-gray-400 dark:text-gray-500">({PRODUCT.reviewCount})</p>
              <h1 className="mt-1 text-xl font-extrabold text-gray-900 dark:text-white sm:text-2xl">
                {PRODUCT.name}
              </h1>
              <p className="mt-3 text-2xl font-extrabold text-gray-900 dark:text-white">
                ${PRODUCT.price.toFixed(2)}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                {PRODUCT.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <span className="mt-4 inline-block rounded-md bg-brand-50 px-2.5 py-1 text-xs font-bold uppercase text-brand-600 dark:bg-brand-900/30 dark:text-brand-300">
                Free Shipping
              </span>

              <p className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
                <ShieldCheck size={15} />
                In stock
              </p>

              <p className="mt-4 text-sm font-semibold text-gray-700 dark:text-gray-200">Qty</p>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-1 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="flex h-9 w-9 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-gray-800 dark:text-gray-100">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="flex h-9 w-9 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <Plus size={15} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 rounded-lg bg-brand-500 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
                >
                  Add To Cart
                </button>
                <button
                  type="button"
                  onClick={() => setWishlisted((w) => !w)}
                  aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  className={
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition " +
                    (wishlisted
                      ? "border-rose-400 bg-rose-50 text-rose-500 dark:bg-rose-900/30"
                      : "border-gray-200 text-gray-400 hover:text-rose-500 dark:border-gray-700")
                  }
                >
                  <Heart size={16} fill={wishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              <p className="mt-4 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                Guaranteed Safe Checkout
              </p>

              <dl className="mt-6 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-700 dark:text-gray-200">SKU:</dt>
                  <dd>{PRODUCT.sku}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-700 dark:text-gray-200">Category:</dt>
                  <dd>{PRODUCT.category}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-700 dark:text-gray-200">Tags:</dt>
                  <dd>{PRODUCT.tags}</dd>
                </div>
              </dl>

              <div className="mt-4 flex gap-2">
                {[TwitterIcon, FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Share"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-brand-500 hover:text-white dark:bg-gray-800 dark:text-gray-300"
                  >
                    <Icon width={15} height={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Brand + mini cart */}
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 p-5 dark:border-gray-800">
                <p className="w-full text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                  Brand: <span className="text-gray-600 dark:text-gray-300">Sonex</span>
                </p>
                <p className="mt-3 text-2xl font-extrabold italic tracking-tight text-gray-900 dark:text-white">
                  sonex
                </p>
              </div>

              <MiniCartPanel
                name="Pinnaeple Macbook Pro 2022 M1/512GB"
                quantity={cartQuantity}
                unitPrice={PRODUCT.price}
                device="laptop"
                onRemove={handleRemoveAll}
              />

              <p className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Truck size={14} />
                Ships from <span className="font-semibold text-gray-700 dark:text-gray-200">United States</span>
              </p>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <h2 className="text-lg font-extrabold uppercase text-gray-900 dark:text-white">
            Related Products
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {relatedProducts.map((product) => (
              <ProductCardTile key={product.id} product={product} linkTo="/product" interactive />
            ))}
          </div>
        </div>

        {/* Description / reviews / additional info */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <ProductTabs />
        </div>

        {/* Inline shopping cart */}
        {cartQuantity > 0 && (
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
            <ShoppingCartTable
              line={{
                name: "Pinnaeple Macbook Pro 2022",
                variant: "M1/ 512GB",
                quantity: cartQuantity,
                unitPrice: PRODUCT.price,
                device: "laptop",
              }}
              showBanner={showAddedBanner}
              onDismissBanner={() => setShowAddedBanner(false)}
              onQuantityChange={setCartQuantity}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}

        {/* Inline checkout */}
        {cartQuantity > 0 && (
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
              Checkout
            </h2>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <CollapsibleNotice message="Returning customer?" linkLabel="Click here to log in">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Have an account already? Log in from the header to check out faster with your
                  saved details.
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

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePlaceOrder(e.currentTarget);
              }}
              className="mt-10 grid gap-10 lg:grid-cols-3"
              noValidate
            >
              <div className="space-y-8 lg:col-span-2">
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
                    Billing Detail
                  </h3>
                  <div className="mt-6">
                    <BillingForm
                      createAccount={createAccount}
                      onCreateAccountChange={setCreateAccount}
                      shipToDifferent={shipToDifferent}
                      onShipToDifferentChange={setShipToDifferent}
                      idPrefix="quickbuy"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
                    Additional Information
                  </h3>
                  <div className="mt-6">
                    <label
                      htmlFor="quickbuy-notes"
                      className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                    >
                      Order Notes <span className="font-normal text-gray-400">(Optional)</span>
                    </label>
                    <textarea
                      id="quickbuy-notes"
                      rows={5}
                      placeholder="Note about your order, e.g. special note for delivery"
                      className={inputClass + " resize-none"}
                    />
                  </div>
                </div>
              </div>

              <div>
                <OrderPaymentPanel
                  items={[orderLine]}
                  shippingCost={9.5}
                  formButton
                  placed={placed}
                  error={checkoutError}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
