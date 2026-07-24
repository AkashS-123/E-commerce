import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search, ChevronDown, Truck, RotateCcw, ShieldCheck } from "lucide-react";

const perks = [
  { icon: Truck, label: "Free Shipping Over $199" },
  { icon: RotateCcw, label: "30 Days Money Back" },
  { icon: ShieldCheck, label: "100% Secure Payment" },
];

export default function CategoryBar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  // Keep the input in sync if the URL's ?q= changes from elsewhere
  // (e.g. navigating back, or clearing the search on the Shop page).
  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? `/shop?q=${encodeURIComponent(trimmed)}` : "/shop");
  }

  return (
    <div className="bg-brand-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <form
          onSubmit={handleSubmit}
          role="search"
          className="flex items-center gap-2 rounded-lg bg-white pl-1 pr-1.5 shadow-sm"
        >
          <button
            type="button"
            className="hidden shrink-0 items-center gap-1 rounded-md px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:flex"
          >
            All Categories <ChevronDown size={15} />
          </button>
          <span className="hidden h-6 w-px bg-gray-200 sm:block" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything..."
            aria-label="Search products"
            className="w-full min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-gray-700 hover:bg-gray-50"
          >
            <Search size={17} />
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-semibold text-white">
          {perks.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2">
              <Icon size={16} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
