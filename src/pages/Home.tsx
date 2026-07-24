import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Laptop,
  Gamepad2,
  Headphones,
  Monitor,
  Cpu,
  Smartphone,
  Wifi,
  Camera,
  Briefcase,
  Puzzle,
  Tag,
  Speaker,
  Mic,
  Keyboard,
  ShieldCheck,
  Printer,
  Router,
  Projector,
  Download,
} from "lucide-react";

import HeadphoneHero from "../components/HeadphoneHero";
import PhonePromoBanner from "../components/PhonePromoBanner";
import ProductCardTile from "../components/ProductCardTile";
import { bestSellers, shopProducts } from "../data/shopProducts";

import hero from "../assets/hero.png";
import swat1 from "../assets/swat1.png";
import gear from "../assets/gear.png";
import vision from "../assets/vision.png";
import redmi11 from "../assets/redmi11.png";
import des from "../assets/des.jpg";
import des1 from "../assets/des1.jpg";
import sono from "../assets/sono.png";
import logi from "../assets/logi.png"
import opodpro from "../assets/opodpro.png"
import zumac from "../assets/zumac.jpg"
import monitor from "../assets/monitor.jpg"
import chair from "../assets/chair.jpg"
import ipad from "../assets/ipad.jpg"

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function SectionHeader({ title, tabs }: { title: string; tabs?: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-6">
        <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
          {title}
        </h2>
        {tabs && (
          <div className="flex items-center gap-5">
            {tabs.map((t, i) => (
              <button
                key={t}
                type="button"
                onClick={() => setActive(i)}
                className={
                  "text-xs font-bold uppercase tracking-wide transition " +
                  (active === i
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300")
                }
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>
      <Link
        to="/shop"
        className="text-xs font-bold uppercase text-gray-400 hover:text-brand-600 dark:text-gray-500 dark:hover:text-brand-400"
      >
        View All
      </Link>
    </div>
  );
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800">
      {children}
    </div>
  );
}

function ProductGrid({ products, cols = 5 }: { products: typeof shopProducts; cols?: number }) {
  const colClass =
    cols === 5
      ? "sm:grid-cols-3 lg:grid-cols-5"
      : "sm:grid-cols-3 lg:grid-cols-4";
  return (
    <div className={"grid grid-cols-2 gap-6 " + colClass}>
      {products.map((p) => (
        <ProductCardTile key={p.id} product={p} linkTo={`/product/${p.id}`} interactive />
      ))}
    </div>
  );
}

interface IconLink {
  label: string;
  count?: string;
  icon: typeof Laptop;
}

function IconRow({ items }: { items: IconLink[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
      {items.map(({ label, count, icon: Icon }) => (
        <a
          key={label}
          href="#"
          className="flex flex-col items-center gap-2 rounded-xl px-2 py-3 text-center transition hover:bg-gray-50 dark:hover:bg-gray-800/60"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            <Icon size={18} />
          </span>
          <span className="text-xs font-bold text-gray-800 dark:text-gray-100">{label}</span>
          {count && <span className="text-[11px] text-gray-400 dark:text-gray-500">{count}</span>}
        </a>
      ))}
    </div>
  );
}

function ThreeUpIconPanel({
  title,
  image,
  items,
}: {
  title: string;
  image: string;
  items: { label: string; count: string; icon: typeof Laptop }[];
}) {
  return (
    <SectionCard>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
          {title}
        </h3>
        <Link
          to="/shop"
          className="text-xs font-bold uppercase text-gray-400 hover:text-brand-600 dark:text-gray-500 dark:hover:text-brand-400"
        >
          View All
        </Link>
      </div>
      <div className="mb-5 aspect-[16/9] overflow-hidden rounded-xl">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        {items.map(({ label, count, icon: Icon }) => (
          <a key={label} href="#" className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              <Icon size={18} />
            </span>
            <span>
              <span className="block text-xs font-bold text-gray-800 dark:text-gray-100">{label}</span>
              <span className="block text-[11px] text-gray-400 dark:text-gray-500">{count}</span>
            </span>
          </a>
        ))}
      </div>
    </SectionCard>
  );
}

/* ------------------------------------------------------------------ */
/* Data slices                                                         */
/* ------------------------------------------------------------------ */

const brands = ["JAVVK", "Digitek", "Grafease", "msi", "Ohbear", "OAR", "snyk", "sonex", "stropi"];

const topCategories: IconLink[] = [
  { label: "Laptops", icon: Laptop },
  { label: "PC Gaming", icon: Gamepad2 },
  { label: "Headphones", icon: Headphones },
  { label: "Monitors", icon: Monitor },
];

const sidebarCategories = [
  "Laptops",
  "PC & Computers",
  "Cell Phones",
  "Tablets",
  "Gaming & VR",
  "Networking",
  "Cameras",
  "Sounds",
  "Office",
  "Storage, USB",
  "Accessories",
  "Clearance",
];

const cellphoneQuickLinks: IconLink[] = [
  { label: "iPhone (iOS)", count: "74 items", icon: Smartphone },
  { label: "Android", count: "35 items", icon: Smartphone },
  { label: "5G Support", count: "12 items", icon: Wifi },
  { label: "Gaming", count: "9 items", icon: Gamepad2 },
  { label: "Xiaomi", count: "52 items", icon: Smartphone },
  { label: "Accessories", count: "29 items", icon: Puzzle },
];

const laptopQuickLinks: IconLink[] = [
  { label: "Macbook", count: "74 items", icon: Laptop },
  { label: "Gaming PC", count: "5 items", icon: Cpu },
  { label: "Laptop Office", count: "22 items", icon: Briefcase },
  { label: "Laptop 15\"", count: "55 items", icon: Laptop },
  { label: "M1 2023", count: "32 items", icon: Cpu },
  { label: "Secondhand", count: "16 items", icon: Tag },
];

const audioItems = [
  { label: "Speaker", count: "12 items", icon: Speaker },
  { label: "DSLR Camera", count: "8 items", icon: Camera },
  { label: "Earbuds", count: "5 items", icon: Headphones },
  { label: "Microphone", count: "12 items", icon: Mic },
];

const gamingItems = [
  { label: "Monitors", count: "28 items", icon: Monitor },
  { label: "Chair", count: "12 items", icon: Gamepad2 },
  { label: "Controller", count: "9 items", icon: Gamepad2 },
  { label: "Keyboards", count: "30 items", icon: Keyboard },
];

const officeItems = [
  { label: "Printers", count: "8 items", icon: Printer },
  { label: "Network", count: "80 items", icon: Router },
  { label: "Security", count: "12 items", icon: ShieldCheck },
  { label: "Projectors", count: "10 items", icon: Projector },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home() {
  const bestSellerGrid = bestSellers.slice(0, 5);
  const cellphoneGrid = shopProducts.slice(0, 5);
  const laptopGrid = [...shopProducts.slice(5, 9), shopProducts[0]];
  const recentlyViewed = [shopProducts[3], shopProducts[9], shopProducts[1], shopProducts[0]];

  return (
    <div className="bg-gray-100 pb-20 dark:bg-gray-950">
      {/* ============================ HERO ============================ */}
      <section className="bg-white py-6 dark:bg-gray-900/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-[230px_1fr_260px]">
            {/* Category sidebar */}
            <div className="hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 lg:block">
              <span className="mb-4 inline-block rounded-md bg-red-50 px-2.5 py-1 text-[11px] font-extrabold uppercase text-red-500 dark:bg-red-500/10">
                Sale 40% off
              </span>
              <ul className="space-y-3.5 text-sm font-semibold text-gray-700 dark:text-gray-200">
                {sidebarCategories.map((c) => (
                  <li key={c}>
                    <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero carousel */}
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-950">
              <HeadphoneHero />
            </div>

            {/* Right promo stack */}
            <div className="flex flex-col gap-6">
              <a
                href="#"
                className="relative flex h-[178px] flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 p-5 dark:from-emerald-950 dark:to-teal-950"
              >
                <span className="text-sm font-extrabold leading-tight text-gray-900 dark:text-white">
                  Sport Water
                  <br />
                  Resistance Watch
                </span>
                <button
                  type="button"
                  className="mt-3 w-fit rounded-md bg-gray-900 px-3 py-1.5 text-[11px] font-extrabold uppercase text-white dark:bg-white dark:text-gray-900"
                >
                  Shop Now
                </button>
                <img
                  src={hero}
                  alt="Sport water resistance watch"
                  className="absolute -right-2 bottom-0 h-[130px] w-[130px] object-contain"
                />
              </a>

              <a
                href="#"
                className="relative flex h-[178px] flex-col overflow-hidden rounded-2xl bg-gray-950 p-5 text-white"
              >
                <span className="text-sm font-extrabold leading-tight">
                  OKODO
                  <br />
                  HERO 11+ BLACK
                </span>
                <span className="mt-2 w-fit rounded-md bg-brand-500 px-2.5 py-1 text-xs font-extrabold">
                  $169
                </span>
                <img
                  src={swat1}
                  alt="Okodo Hero 11+ Black"
                  className="absolute -right-3 bottom-0 h-[120px] w-[150px] object-contain"
                />
              </a>
            </div>
          </div>

         {/* Small promo strip under hero */}
<div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
  {/* Card 1 */}
  <div className="flex h-72 items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-r from-slate-700 to-slate-500 p-8">
    <div>
      <h3 className="text-5xl font-bold leading-tight text-white">
        Sono
        <br />
        <span className="text-yellow-400">Playgo 5</span>
      </h3>

      <p className="mt-6 text-2xl text-gray-200">
        From <span className="font-bold text-red-400">$569</span>
      </p>

      <a
        href="#"
        className="mt-8 inline-block text-lg font-semibold text-white hover:underline"
      >
        Discover Now →
      </a>
    </div>

    <img
      src={sono}
      alt="Sono Playgo 5"
      className="w-72 -rotate-12 object-contain"
    />
  </div>

  {/* Card 2 */}
  <div className="flex h-72 items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-r from-gray-500 to-gray-400 p-8">
    <div>
      <h3 className="text-5xl font-bold leading-tight text-white">
        Logitech Bluetooth
        <br />
        <span className="text-yellow-400">Keyboard</span>
      </h3>

      <p className="mt-6 text-2xl text-gray-200">
        Best for all device
      </p>
    </div>

    <img
      src={logi}
      alt="Logitech Keyboard"
      className="w-72 -rotate-6 object-contain"
    />
  </div>
</div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pt-10">
        {/* ===================== FEATURED BRANDS + TOP CATEGORIES ===================== */}
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <SectionCard>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
                Featured Brands
              </h3>
              <Link to="/shop" className="text-xs font-bold uppercase text-gray-400 hover:text-brand-600 dark:hover:text-brand-400">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-y-6 sm:grid-cols-5">
              {brands.map((b) => (
                <span
                  key={b}
                  className="text-center text-sm font-extrabold uppercase tracking-tight text-gray-400 dark:text-gray-500"
                >
                  {b}
                </span>
              ))}
            </div>
          </SectionCard>

          <SectionCard>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
                Top Categories
              </h3>
              <Link to="/shop" className="text-xs font-bold uppercase text-gray-400 hover:text-brand-600 dark:hover:text-brand-400">
                View All
              </Link>
            </div>
            <IconRow items={topCategories} />
          </SectionCard>
        </section>

        {/* ===================== DEALS OF THE DAY ===================== */}
        <DealsOfTheDay />

        {/* ===================== MEMBER FREE SHIPPING BANNER ===================== */}
        <section className="relative overflow-hidden rounded-2xl bg-brand-500 px-8 py-4 text-center">
          <p className="text-sm font-bold text-white">
            <span className="mr-1">✦</span> Member get{" "}
            <span className="font-extrabold underline">Free Shipping</span> with no order minimum. *Restriction apply for 30-days trial
          </p>
        </section>

        {/* ===================== BEST SELLER ===================== */}
        <section>
          <SectionHeader title="Best Seller" tabs={["New In", "Popular"]} />
          <ProductGrid products={bestSellerGrid} />
        </section>

        {/* ===================== BRAND NEW FOR YOU ===================== */}
        <BrandNewForYou />

        {/* ===================== TOP CELLPHONES & TABLETS ===================== */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
              Top Cellphones &amp; Tablets
            </h2>
            <Link to="/shop" className="text-xs font-bold uppercase text-gray-400 hover:text-brand-600 dark:hover:text-brand-400">
              View All
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
            <div className="h-[220px] lg:h-auto">
              <PhonePromoBanner />
            </div>
            <IconRow items={cellphoneQuickLinks} />
          </div>
          <div className="mt-6">
            <ProductGrid products={cellphoneGrid} />
          </div>
        </section>

        {/* ===================== BEST LAPTOPS & COMPUTERS ===================== */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
              Best Laptops &amp; Computers
            </h2>
            <Link to="/shop" className="text-xs font-bold uppercase text-gray-400 hover:text-brand-600 dark:hover:text-brand-400">
              View All
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
            <a
              href="#"
              className="relative flex h-[220px] flex-col justify-end overflow-hidden rounded-2xl bg-gray-950 p-6 text-white lg:h-auto"
            >
              <img src={des} alt="Mobok 2 Superchard" className="absolute inset-0 h-full w-full object-cover opacity-60" />
              <div className="relative z-10">
                <h3 className="text-xl font-extrabold leading-tight">
                  Mobok 2
                  <br />
                  Superchard
                </h3>
                <p className="mt-1 text-xs text-gray-300">
                  By M2 &middot; Start from <span className="font-bold text-brand-400">$1,599</span>
                </p>
              </div>
            </a>
            <IconRow items={laptopQuickLinks} />
          </div>
          <div className="mt-6">
            <ProductGrid products={laptopGrid} />
          </div>
        </section>

        {/* ===================== AUDIOS / GAMING / OFFICE ===================== */}
        <section className="grid gap-6 lg:grid-cols-3">
          <ThreeUpIconPanel title="Audios &amp; Cameras" image={des1} items={audioItems} />
          <ThreeUpIconPanel title="Gaming" image={gear} items={gamingItems} />
          <ThreeUpIconPanel title="Office Equipments" image={des} items={officeItems} />
        </section>

        {/* ===================== 10% BACK + APP DOWNLOAD ===================== */}
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-600 to-brand-600 p-8 text-white">
            <p className="text-2xl font-extrabold uppercase">10% Back</p>
            <p className="mt-2 max-w-xs text-sm text-white/80">
              Earn 10% cash back on Swootech.{" "}
              <a href="#" className="underline">
                Learn how
              </a>
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gray-950 p-8 text-white">
            <p className="text-lg font-extrabold">Download our app</p>
            <p className="mt-2 max-w-xs text-sm text-gray-300">
              Enter your phone number and we'll send you a download link.
            </p>
            <div className="mt-4 flex max-w-xs items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
              <input
                type="tel"
                placeholder="(000) 000-0000"
                className="w-full bg-transparent text-sm placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="button"
                aria-label="Send app link"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-500 text-white"
              >
                <Download size={15} />
              </button>
            </div>
          </div>
        </section>

        {/* ===================== RECENTLY VIEWED ===================== */}
        <section>
          <SectionHeader title="Your Recently Viewed" />
          <ProductGrid products={recentlyViewed} />
        </section>

        {/* ===================== ABOUT TEXT ===================== */}
        <section className="border-t border-gray-200 pt-10 dark:border-gray-800">
          <h2 className="text-base font-extrabold text-gray-900 dark:text-white">
            Swoo &mdash; #1 Online Marketplace for technology
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Nulla posuere mi vitae posuere
              iaculis. Quisque iaculis dignissim consectetur. Morbi condimentum sagittis leo vitae dictum.
              Suspendisse ornare dolor sit, quis maximus tellus. Fusce mattis sollicitudin quam, et
              scelerisque malesuada. Donec vehicula ante at arcu sagittis, sed pellentesque erat sodales
              torquent per conubia.
            </p>
            <p>
              Morbi pretium mauris eu, aliquet ipsum imperdiet non euismod placerat. Nam eget justo eu erat
              lacinia placerat. Morbi condimentum sagittis leo vitae dictum. Suspendisse ornare dolor sit,
              quis maximus tellus, vitae dictum turpis. Vitae dictum turpis mollis, lobortis ligula id,
              varius elit, vitae bibendum sed nisi, dictum sed pellentesque erat sodales portitor.
            </p>
          </div>
          <a href="#" className="mt-3 inline-block text-xs font-bold text-brand-600 hover:underline dark:text-brand-400">
            View All
          </a>
        </section>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Deals of the day                                                     */
/* ------------------------------------------------------------------ */

function DealsOfTheDay() {
  const timeUnits = [
    { label: "d", value: "162" },
    { label: "h", value: "09" },
    { label: "m", value: "32" },
    { label: "s", value: "04" },
  ];

  return (
    <section className="overflow-hidden rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-2xl bg-brand-500 px-8 py-5">
        <h2 className="text-2xl font-bold uppercase text-white">
          Deals Of The Day
        </h2>
      </div>

      <div className="grid gap-6 bg-white p-6 lg:grid-cols-[4fr_1.2fr]">
        {/* LEFT SIDE */}
        <div className="grid items-center gap-8 lg:grid-cols-[70px_350px_1fr]">

          {/* Thumbnails */}
          <div className="flex flex-col items-center gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex h-16 w-16 items-center justify-center rounded-lg border bg-white shadow-sm"
              >
                <img
                  src={redmi11}
                  alt=""
                  className="h-14 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative flex justify-center">
            <div className="absolute left-0 top-4 rounded-xl bg-brand-500 px-5 py-3 text-white shadow-lg">
              <p className="text-sm uppercase">SAVE</p>
              <p className="text-3xl font-bold">$199.00</p>
            </div>

            <img
              src={redmi11}
              alt="Redmi Note 11"
              className="h-[430px] object-contain"
            />
          </div>

          {/* Product Details */}
          <div>
            <p className="text-sm text-gray-500">(12)</p>

            <h3 className="mt-2 text-3xl font-bold leading-tight text-gray-900">
              Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
            </h3>

            <div className="mt-5 flex items-center gap-4">
              <span className="text-5xl font-bold text-red-500">
                $569.00
              </span>

              <span className="text-3xl text-gray-400 line-through">
                $759.00
              </span>
            </div>

            <ul className="mt-8 list-disc space-y-3 pl-5 text-lg text-gray-600">
              <li>Intel LGA 1700 Socket: Supports 13th &amp; 12th Gen Intel Core</li>
              <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
              <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
            </ul>

            <div className="mt-8 flex gap-4">
              <span className="rounded-lg bg-green-100 px-5 py-2 font-semibold text-green-600">
                FREE SHIPPING
              </span>

              <span className="rounded-lg bg-red-100 px-5 py-2 font-semibold text-red-500">
                FREE GIFT
              </span>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-xl font-semibold uppercase">
                Hurry Up! Promotion Will Expires In
              </p>

              <div className="flex gap-4">
                {timeUnits.map((u) => (
                  <div
                    key={u.label}
                    className="flex h-24 w-20 flex-col items-center justify-center rounded-xl bg-gray-100"
                  >
                    <span className="text-4xl font-bold">
                      {u.value}
                    </span>

                    <span className="text-lg text-gray-500">
                      {u.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[35%] rounded-full bg-brand-500"></div>
              </div>

              <p className="mt-3 text-lg">
                Sold: <strong>26/75</strong>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-rows-3 gap-5">

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={gear}
              alt=""
              className="h-full w-full object-cover"
            />

            <span className="absolute right-4 top-4 rounded-lg bg-brand-500 px-3 py-2 font-bold text-white">
              SALE 50%
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={opodpro}   // import laptop image
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={vision}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Brand new for you                                                    */
/* ------------------------------------------------------------------ */

function BrandNewForYou() {
  const tiles = [
    {
      image: zumac,
      title: "Zumac Steel Computer Case",
      subtitle: "And an option to upgrade every three years.",
    },
    {
      image: monitor,
      title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
      subtitle: "Limited time offer. Hurry up",
    },
    {
      image: chair,
      title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
      subtitle: "Limited time offer. Hurry up",
    },
    {
      image: ipad,
      title: "iPed Pro Mini 6 - Powerful in hand",
      subtitle:
        "From $19.99/month for 36 months. $280.35 final payment due in month 37",
    },
  ];

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold uppercase text-gray-900 dark:text-white">
          Brand New For You
        </h2>

        <Link
          to="/shop"
          className="text-sm font-bold uppercase text-gray-400 hover:text-brand-600"
        >
          View All
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {tiles.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-2xl bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900"
          >
            {/* Thumbnail */}
            <div className="h-56 overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-2xl font-bold leading-snug text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                {item.subtitle}
              </p>

              <button
                type="button"
                className="mt-6 rounded-xl border-2 border-brand-500 px-10 py-3 text-sm font-bold uppercase text-brand-500 transition hover:bg-brand-500 hover:text-white"
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}