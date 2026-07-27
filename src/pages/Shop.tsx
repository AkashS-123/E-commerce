import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, SearchX } from "lucide-react";

import Breadcrumb from "../components/Breadcrumb";
import HeadphoneHero from "../components/HeadphoneHero";
import PhonePromoBanner from "../components/PhonePromoBanner";
import PopularCategories from "../components/PopularCategories";
import CategoryPanel from "../components/CategoryPanel";
import FilterPanel from "../components/FilterPanel";
import ProductGridToolbar from "../components/ProductGridToolbar";
import ProductCardTile from "../components/ProductCardTile";
import Pagination from "../components/Pagination";

import { bestSellers, shopProducts } from "../data/shopProducts";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const [activeCategory, setActiveCategory] = useState("All");

  const [perPage, setPerPage] = useState(24);
  const [sort, setSort] = useState("Default");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);

  const [bestSellerIndex, setBestSellerIndex] = useState(0);

  // -----------------------
  // FILTER STATES
  // -----------------------

  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("10000");

  const [brands, setBrands] = useState<Record<string, boolean>>({});
  const [ratings, setRatings] = useState<Record<number, boolean>>({});
  const [screenSizes, setScreenSizes] = useState<Record<string, boolean>>({});
  const [color, setColor] = useState<string | null>(null);
  const [memory, setMemory] = useState<Record<string, boolean>>({});
  const [conditions, setConditions] = useState<Record<string, boolean>>({});

  const filteredProducts = useMemo(() => {
    const catalog = [...shopProducts, ...bestSellers];

    const seen = new Set<string>();

    const products = catalog.filter((product) => {
      if (seen.has(product.id)) return false;
      seen.add(product.id);
      return true;
    });

    return products.filter((product) => {
      // -----------------------
      // SEARCH
      // -----------------------

      if (
        query &&
        !product.name.toLowerCase().includes(query.toLowerCase())
      ) {
        return false;
      }

      // -----------------------
      // CATEGORY
      // -----------------------

      if (
        activeCategory !== "All" &&
        product.device !== activeCategory.toLowerCase()
      ) {
        return false;
      }

      // -----------------------
      // PRICE
      // -----------------------

      const price =
        product.price ??
        product.priceRange?.[0] ??
        0;

      if (price < Number(minPrice)) return false;
      if (price > Number(maxPrice)) return false;
            // -----------------------
      // BRAND
      // -----------------------

      const selectedBrands = Object.keys(brands).filter(
        (brand) => brands[brand]
      );

      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(product.brand ?? "")
      ) {
        return false;
      }

      // -----------------------
      // RATING
      // -----------------------

      const selectedRatings = Object.keys(ratings)
        .filter((rating) => ratings[Number(rating)])
        .map(Number);

      if (
        selectedRatings.length > 0 &&
        !selectedRatings.includes(product.rating ?? 0)
      ) {
        return false;
      }

      // -----------------------
      // MEMORY
      // -----------------------

      const selectedMemory = Object.keys(memory).filter(
        (item) => memory[item]
      );

      if (
        selectedMemory.length > 0 &&
        !selectedMemory.includes(product.memory ?? "")
      ) {
        return false;
      }

      // -----------------------
      // SCREEN SIZE
      // -----------------------

      const selectedSizes = Object.keys(screenSizes).filter(
        (size) => screenSizes[size]
      );

      if (
        selectedSizes.length > 0 &&
        !selectedSizes.includes(product.screenSize ?? "")
      ) {
        return false;
      }

      // -----------------------
      // COLOR
      // -----------------------

      if (color && !product.colors?.includes(color)) {
        return false;
      }

      // -----------------------
      // CONDITION
      // -----------------------

      const selectedConditions = Object.keys(conditions).filter(
        (condition) => conditions[condition]
      );

      if (
        selectedConditions.length > 0 &&
        !selectedConditions.includes(product.condition ?? "")
      ) {
        return false;
      }

      return true;
    });
  }, [
    query,
    activeCategory,
    minPrice,
    maxPrice,
    brands,
    ratings,
    screenSizes,
    color,
    memory,
    conditions,
  ]);
    const sortedProducts = useMemo(() => {
    const items = [...filteredProducts];

    const getPrice = (product: (typeof items)[number]) =>
      product.price ?? product.priceRange?.[0] ?? 0;

    switch (sort) {
      case "Price: Low to High":
        items.sort((a, b) => getPrice(a) - getPrice(b));
        break;

      case "Price: High to Low":
        items.sort((a, b) => getPrice(b) - getPrice(a));
        break;

      case "Best Rated":
        items.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;

      default:
        break;
    }

    return items;
  }, [filteredProducts, sort]);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * perPage;
    return sortedProducts.slice(start, start + perPage);
  }, [sortedProducts, page, perPage]);

  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / perPage)
  );

  const visibleBestSellers = bestSellers.slice(
    bestSellerIndex,
    bestSellerIndex + 4
  );

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/shop" },
          query
            ? { label: `Search results for "${query}"` }
            : { label: "Top Cell Phones & Tablets" },
        ]}
      />

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10 sm:py-14">

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-8">
          <h1 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
            Top Cell Phones &amp; Tablets
          </h1>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <HeadphoneHero />
            <PhonePromoBanner />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-8">
          <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
            Popular Categories
          </h2>

          <div className="mt-6">
            <PopularCategories />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">

          <div className="space-y-6">

            <CategoryPanel
              active={activeCategory}
              onSelect={setActiveCategory}
            />

            <FilterPanel
              {...({
                minPrice,
                maxPrice,
                setMinPrice,
                setMaxPrice,
                brands,
                setBrands,
                ratings,
                setRatings,
                screenSizes,
                setScreenSizes,
                color,
                setColor,
                memory,
                setMemory,
                conditions,
                setConditions,
              } as any)}
            />

            <a
              href="#"
              className="relative flex h-40 flex-col justify-between overflow-hidden rounded-2xl bg-gray-900 p-5 text-white"
            >
              <span className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/25" />

              <span className="relative text-lg font-extrabold leading-tight">
                OKODo hero 11+
                <br />
                5K wireless
              </span>

              <span className="relative text-xs font-semibold text-gray-300">
                From <span className="text-brand-400">$169</span>
              </span>
            </a>

          </div>

          <div className="space-y-8">
          {/* Best Sellers */}
<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-8">
  <div className="flex items-center justify-between">
    <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
      Best Seller In This Category
    </h2>

    <div className="flex gap-1">
      <button
        type="button"
        onClick={() =>
          setBestSellerIndex((i) => Math.max(0, i - 1))
        }
        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200"
      >
        <ChevronLeft size={15} />
      </button>

      <button
        type="button"
        onClick={() =>
          setBestSellerIndex((i) =>
            Math.min(bestSellers.length - 4, i + 1)
          )
        }
        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200"
      >
        <ChevronRight size={15} />
      </button>
    </div>
  </div>

  <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
    {visibleBestSellers.map((product) => (
      <ProductCardTile
        key={product.id}
        product={product}
        linkTo="/product"
        interactive
      />
    ))}
  </div>
</div>

{/* Product Grid */}
<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-8">

  {query && (
    <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
      {sortedProducts.length > 0 ? (
        <>
          {sortedProducts.length} result
          {sortedProducts.length !== 1 && "s"} for{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            "{query}"
          </span>
        </>
      ) : (
        <>
          No results for{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            "{query}"
          </span>
        </>
      )}
    </p>
  )}

  <ProductGridToolbar
    total={sortedProducts.length}
    showing={paginatedProducts.length}
    perPage={perPage}
    onPerPageChange={(value) => {
      setPerPage(value);
      setPage(1);
    }}
    sort={sort}
    onSortChange={setSort}
    view={view}
    onViewChange={setView}
  />

  {sortedProducts.length === 0 ? (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <SearchX
        size={48}
        className="mb-4 text-gray-300"
      />

      <h3 className="text-lg font-semibold">
        No products found
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Try adjusting your filters or search term.
      </p>
    </div>
  ) : (
    <div
      className={
        view === "grid"
          ? "mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4"
          : "mt-6 space-y-4"
      }
    >
      {paginatedProducts.map((product) => (
        <ProductCardTile
          key={product.id}
          product={product}
          linkTo="/product"
          interactive
          compact={view === "list"}
        />
      ))}
    </div>
  )}

  <div className="mt-8">
    <Pagination
      page={page}
      totalPages={totalPages}
      onChange={setPage}
    />
  </div>
</div>

</div>
</div>
</div>
</>
);
}