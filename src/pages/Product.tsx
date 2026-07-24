import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import {
  Minus,
  Plus,
  Heart,
  GitCompare,
  Truck,
  ShieldCheck,
  Gift,
  Phone,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import ProductShowcase from "../components/ProductShowcase";
import ProductCardTile from "../components/ProductCardTile";
import ProductTabs from "../components/ProductTabs";
import SidebarPromos from "../components/SidebarPromos";
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "../components/SocialIcons";
import { mainProduct, frequentlyBoughtWith, relatedProducts, recentlyViewed } from "../data/product";

const thumbnailAngles: ("front" | "back" | "side")[] = ["front", "back", "side"];

export default function Product() {
  const [colorId, setColorId] = useState(mainProduct.defaultColorId);
  const [memoryId, setMemoryId] = useState(mainProduct.defaultMemoryId);
  const [angleIndex, setAngleIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [compared, setCompared] = useState(false);

  const { addItem } = useCart();

  const [combo, setCombo] = useState<Record<string, boolean>>({
    main: true,
    ...Object.fromEntries(frequentlyBoughtWith.map((item) => [item.id, true])),
  });

  const [addedMessage, setAddedMessage] = useState("");

  const selectedColor = mainProduct.colors.find((c) => c.id === colorId) ?? mainProduct.colors[0];
  const selectedMemory =
    mainProduct.memorySizes.find((m) => m.id === memoryId) ?? mainProduct.memorySizes[0];

  const unitPrice = mainProduct.basePrice + selectedMemory.priceDelta;
  const minPrice = mainProduct.basePrice + mainProduct.memorySizes[0].priceDelta;
  const maxPrice =
    mainProduct.basePrice + mainProduct.memorySizes[mainProduct.memorySizes.length - 1].priceDelta;

  const comboTotal = useMemo(() => {
    let total = combo.main ? unitPrice : 0;
    frequentlyBoughtWith.forEach((item) => {
      if (combo[item.id]) total += item.price ?? 0;
    });
    return total;
  }, [combo, unitPrice]);

  function handleAddToCart() {
    addItem({
      id: `${mainProduct.slug}-${colorId}-${memoryId}`,
      name: `${mainProduct.name} (${selectedColor.label}, ${selectedMemory.label})`,
      price: unitPrice,
      quantity,

      // Required fields from CartItem
      device: "phone",
      shippingLabel: "Free Shipping",
      shippingCost: 0,
      inStock: true,

      // Optional fields
      image: mainProduct.image,
      reviewCount: mainProduct.reviewCount,
      freeGift: true,
      badge: {
        label: "New",
        tone: "new",
      },
    });

    setAddedMessage(
      `Added ${quantity} × ${mainProduct.name} (${selectedColor.label}, ${selectedMemory.label}) to your cart.`
    );

    window.setTimeout(() => {
      setAddedMessage("");
    }, 3000);
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/" },
          { label: mainProduct.breadcrumb },
        ]}
      />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr_320px]">
            {/* Gallery */}
            <div>
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800/60">
  <span className="absolute left-3 top-3 rounded-md bg-gray-900 px-2.5 py-1 text-xs font-bold uppercase text-white dark:bg-gray-700">
    {mainProduct.badge}
  </span>

  <button
    type="button"
    onClick={() => setWishlisted((w) => !w)}
    aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
    className={
      "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full transition " +
      (wishlisted
        ? "bg-rose-500 text-white"
        : "bg-white text-gray-400 hover:text-rose-500 dark:bg-gray-900 dark:text-gray-500")
    }
  >
    <Heart size={16} fill={wishlisted ? "currentColor" : "none"} />
  </button>

  {mainProduct.image ? (
    <img
      src={mainProduct.image}
      alt={mainProduct.name}
      className="h-full w-full object-contain p-6"
    />
  ) : (
    <ProductShowcase
      color={selectedColor.hex}
      angle={thumbnailAngles[angleIndex]}
      className="h-full w-full"
    />
  )}
</div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {thumbnailAngles.map((angle, i) => (
                  <button
                    key={angle}
                    type="button"
                    onClick={() => setAngleIndex(i)}
                    className={
                      "aspect-square overflow-hidden rounded-xl border-2 bg-gray-50 transition dark:bg-gray-800/60 " +
                      (angleIndex === i
                        ? "border-brand-500"
                        : "border-transparent hover:border-gray-200 dark:hover:border-gray-700")
                    }
                  >
                    <ProductShowcase color={selectedColor.hex} angle={angle} className="h-full w-full" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              {mainProduct.reviewCount && (
                <p className="text-xs text-gray-400 dark:text-gray-500">({mainProduct.reviewCount})</p>
              )}
              <h1 className="mt-1 text-xl font-extrabold text-gray-900 dark:text-white sm:text-2xl">
                {mainProduct.name}
              </h1>

              <p className="mt-3 text-2xl font-extrabold text-gray-900 dark:text-white">
                ${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                {mainProduct.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-bold uppercase text-brand-600 dark:bg-brand-900/30 dark:text-brand-300">
                  Free Shipping
                </span>
                <span className="rounded-md bg-rose-50 px-2.5 py-1 text-xs font-bold uppercase text-rose-500 dark:bg-rose-900/30 dark:text-rose-300">
                  Free Gift
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Color: <span className="font-normal text-gray-500 dark:text-gray-400">{selectedColor.label}</span>
                </p>
                <div className="mt-2 flex flex-wrap gap-3">
                  {mainProduct.colors.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => setColorId(color.id)}
                      className={
                        "flex flex-col items-center gap-1.5 rounded-lg border-2 px-3 py-2 text-xs transition " +
                        (colorId === color.id
                          ? "border-brand-500"
                          : "border-gray-200 hover:border-gray-300 dark:border-gray-700")
                      }
                    >
                      <span
                        className="h-7 w-7 rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-gray-600 dark:text-gray-300">{color.label}</span>
                      <span className="font-bold text-gray-800 dark:text-gray-100">
                        ${color.price.toFixed(2)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Memory Size: <span className="font-normal text-gray-500 dark:text-gray-400">{selectedMemory.label}</span>
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {mainProduct.memorySizes.map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setMemoryId(size.id)}
                      className={
                        "rounded-lg border-2 px-4 py-2 text-sm font-semibold transition " +
                        (memoryId === size.id
                          ? "border-brand-500 text-brand-600 dark:text-brand-400"
                          : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-300")
                      }
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-brand-50 p-4 dark:bg-brand-900/20">
                <div className="flex gap-3">
                  <Gift size={20} className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-400" />
                  <div className="text-sm text-gray-700 dark:text-gray-200">
                    <ul className="space-y-1">
                      {mainProduct.promo.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Promotion will expires in: {mainProduct.promo.expires}
                    </p>
                  </div>
                </div>
              </div>

              <dl className="mt-6 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-700 dark:text-gray-200">SKU:</dt>
                  <dd>{mainProduct.sku}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-700 dark:text-gray-200">Category:</dt>
                  <dd>{mainProduct.category}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-700 dark:text-gray-200">Brand:</dt>
                  <dd className="font-semibold text-brand-600 dark:text-brand-400">{mainProduct.brand}</dd>
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

            {/* Purchase panel */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-100 p-5 dark:border-gray-800">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                  Total Price
                </p>
                <p className="mt-1 text-2xl font-extrabold text-gray-900 dark:text-white">
                  ${(unitPrice * quantity).toFixed(2)}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
                  <ShieldCheck size={15} />
                  In stock
                </p>

                <div className="mt-4 flex items-center gap-1 rounded-lg border border-gray-200 p-1 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="flex h-9 w-9 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="flex-1 text-center text-sm font-semibold text-gray-800 dark:text-gray-100">
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
                  className="mt-4 w-full rounded-lg bg-brand-500 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
                >
                  Add To Cart
                </button>

                <button
                  type="button"
                  className="mt-3 w-full rounded-lg bg-amber-400 py-3 text-sm font-extrabold uppercase tracking-wide text-gray-900 transition hover:bg-amber-500"
                >
                  Buy with PayPal
                </button>

                {addedMessage && (
                  <p role="status" className="mt-3 text-xs font-medium text-brand-600 dark:text-brand-400">
                    {addedMessage}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setWishlisted((w) => !w)}
                    className={
                      "flex items-center gap-1.5 font-semibold " +
                      (wishlisted ? "text-rose-500" : "text-gray-500 hover:text-gray-700 dark:text-gray-400")
                    }
                  >
                    <Heart size={14} fill={wishlisted ? "currentColor" : "none"} />
                    {wishlisted ? "Wishlist added" : "Add to wishlist"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCompared((c) => !c)}
                    className={
                      "flex items-center gap-1.5 font-semibold " +
                      (compared ? "text-brand-600 dark:text-brand-400" : "text-gray-500 hover:text-gray-700 dark:text-gray-400")
                    }
                  >
                    <GitCompare size={14} />
                    {compared ? "Compare added" : "Compare"}
                  </button>
                </div>

                <p className="mt-4 text-xs font-semibold text-gray-400 dark:text-gray-500">
                  Guaranteed Safe Checkout
                </p>
              </div>

              <div className="rounded-2xl bg-gray-900 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-300">
                  Quick Order 24/7
                </p>
                <a href="tel:+0253886251" className="mt-1 flex items-center gap-2 text-lg font-extrabold">
                  <Phone size={16} className="text-brand-400" />
                  (025) 3886 25 16
                </a>
              </div>

              <p className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Truck size={14} />
                Ships from <span className="font-semibold text-gray-700 dark:text-gray-200">United States</span>
              </p>
            </div>
          </div>
        </div>

        {/* Frequently bought together */}
        <div className="mt-8 grid gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">
              Frequently Bought Together
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800/60">
                <ProductShowcase color={selectedColor.hex} angle="front" className="h-full w-full" />
              </div>
              {frequentlyBoughtWith.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Plus size={18} className="shrink-0 text-gray-300" />
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800/60">

                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <label className="flex items-start gap-2 text-gray-700 dark:text-gray-200">
                <input
                  type="checkbox"
                  checked={combo.main}
                  onChange={(e) => setCombo((c) => ({ ...c, main: e.target.checked }))}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-600"
                />
                This item: {mainProduct.name} (
                <span className="font-bold text-red-500">${unitPrice.toFixed(2)}</span>)
              </label>
              {frequentlyBoughtWith.map((item) => (
                <label key={item.id} className="flex items-start gap-2 text-gray-700 dark:text-gray-200">
                  <input
                    type="checkbox"
                    checked={combo[item.id]}
                    onChange={(e) => setCombo((c) => ({ ...c, [item.id]: e.target.checked }))}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-600"
                  />
                  {item.name} (<span className="font-bold text-red-500">${(item.price ?? 0).toFixed(2)}</span>)
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800/60">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                Total Price
              </p>
              <p className="mt-1 text-2xl font-extrabold text-gray-900 dark:text-white">
                ${comboTotal.toFixed(2)}
              </p>
              <button
                type="button"
                className="mt-4 w-full rounded-lg bg-brand-500 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
              >
                Add To Cart
              </button>
              <button
                type="button"
                onClick={() => setWishlisted(true)}
                className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-rose-500 dark:text-gray-400"
              >
                <Heart size={14} />
                Add all to Wishlist
              </button>
            </div>

            <SidebarPromos />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <ProductTabs />
        </div>

        {/* Related products */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <h2 className="text-lg font-extrabold uppercase text-gray-900 dark:text-white">
            Related Products
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {relatedProducts.map((product) => (
              <ProductCardTile key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Recently viewed */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold uppercase text-gray-900 dark:text-white">
              Your Recently Viewed
            </h2>
            <a href="#" className="text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400">
              View All
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {recentlyViewed.map((product) => (
              <ProductCardTile key={product.id} product={product} compact />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
