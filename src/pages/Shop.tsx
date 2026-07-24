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

  const filteredProducts = useMemo(() => {
    // Search should cover every product in the store, including the ones
    // that only otherwise appear in the Best Seller carousel.
    const catalog = [...shopProducts, ...bestSellers];
    const seen = new Set<string>();
    const allProducts = catalog.filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });

    if (!query) return shopProducts;
    const q = query.toLowerCase();
    return allProducts.filter((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  const sortedProducts = useMemo(() => {
    const items = [...filteredProducts];
    const priceOf = (p: (typeof items)[number]) => p.priceRange?.[0] ?? p.price ?? 0;
    if (sort === "Price: Low to High") items.sort((a, b) => priceOf(a) - priceOf(b));
    if (sort === "Price: High to Low") items.sort((a, b) => priceOf(b) - priceOf(a));
    if (sort === "Best Rated") items.sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));
    return items;
  }, [sort, filteredProducts]);

  const visibleBestSellers = bestSellers.slice(bestSellerIndex, bestSellerIndex + 4);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/shop" },
          query ? { label: `Search results for "${query}"` } : { label: "Top Cell Phones & Tablets" },
        ]}
      />

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10 sm:py-14">
        {/* Hero banners */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-8">
          <h1 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
            Top Cell Phones &amp; Tablets
          </h1>
          <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <HeadphoneHero />
            <PhonePromoBanner />
          </div>
        </div>

        {/* Popular categories */}
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
            <CategoryPanel active={activeCategory} onSelect={setActiveCategory} />
            <FilterPanel />

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
            {/* Best seller in this category */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
                  Best Seller In This Category
                </h2>
                <div className="flex gap-1">
                  <button
                    type="button"
                    aria-label="Previous"
                    onClick={() => setBestSellerIndex((i) => Math.max(0, i - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next"
                    onClick={() =>
                      setBestSellerIndex((i) => Math.min(bestSellers.length - 4, i + 1))
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {visibleBestSellers.map((product) => (
                  <ProductCardTile key={product.id} product={product} linkTo="/product" interactive />
                ))}
              </div>
            </div>

            {/* Product grid */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-8">
              {query && (
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  {sortedProducts.length > 0 ? (
                    <>
                      {sortedProducts.length} result{sortedProducts.length === 1 ? "" : "s"} for{" "}
                      <span className="font-bold text-gray-900 dark:text-white">&ldquo;{query}&rdquo;</span>
                    </>
                  ) : (
                    <>
                      No results for{" "}
                      <span className="font-bold text-gray-900 dark:text-white">&ldquo;{query}&rdquo;</span>
                    </>
                  )}
                </p>
              )}

              <ProductGridToolbar
                total={sortedProducts.length}
                showing={Math.min(perPage, sortedProducts.length)}
                perPage={perPage}
                onPerPageChange={setPerPage}
                sort={sort}
                onSortChange={setSort}
                view={view}
                onViewChange={setView}
              />

              {sortedProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400 dark:bg-gray-800">
                    <SearchX size={24} />
                  </span>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
                    We couldn't find anything matching &ldquo;{query}&rdquo;
                  </p>
                  <p className="max-w-sm text-sm text-gray-400 dark:text-gray-500">
                    Try a different search term, or browse our full catalog below.
                  </p>
                </div>
              ) : (
                <div
                  className={
                    "mt-6 grid gap-x-6 gap-y-8 " +
                    (view === "grid" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-1")
                  }
                >
                  {sortedProducts.map((product) =>
                    view === "grid" ? (
                      <ProductCardTile key={product.id} product={product} linkTo="/product" interactive />
                    ) : (
                      <div
                        key={product.id}
                        className="flex items-center gap-4 rounded-xl border border-gray-100 p-4 dark:border-gray-800"
                      >
                        <div className="w-28 shrink-0">
                          <ProductCardTile product={product} linkTo="/product" compact />
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}

              {sortedProducts.length > 0 && <Pagination page={page} totalPages={20} onChange={setPage} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
