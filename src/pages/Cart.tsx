import { Link } from "react-router-dom";
import { ShoppingCart, RotateCcw } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import CartItemRow from "../components/CartItemRow";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    items,
    savedItems,
    updateQuantity,
    removeItem,
    saveForLater,
    moveToCart,
    subtotal,
    shipping,
    tax,
    total,
  } = useCart();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Pages" },
          { label: "Cart" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        {items.length === 0 ? (
          <div className="flex flex-col items-center rounded-2xl bg-white py-20 text-center shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800">
            <ShoppingCart
              size={40}
              className="text-gray-300 dark:text-gray-600"
            />

            <h1 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              Your cart is empty
            </h1>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Looks like you haven't added anything yet.
            </p>

            <Link
              to="/"
              className="mt-6 rounded-lg bg-brand-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-5 lg:col-span-2">
              {items.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onQuantityChange={updateQuantity}
                  onRemove={removeItem}
                  onSaveForLater={saveForLater}
                />
              ))}

              {savedItems.length > 0 && (
                <div className="pt-4">
                  <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Saved for later
                  </h2>

                  <div className="space-y-3">
                    {savedItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-800/60"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-gray-900">
                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-12 w-12 object-contain"
                              />
                            )}
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                              {item.name}
                            </p>

                            <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => moveToCart(item.id)}
                          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-brand-500 px-3 py-2 text-xs font-bold uppercase text-brand-600 transition hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-900/30"
                        >
                          <RotateCcw size={13} />
                          Move to cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}