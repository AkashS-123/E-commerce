import { useState } from "react";
import { Star } from "lucide-react";
import {
  brandFilters,
  ratingFilters,
  screenSizeFilters,
  colorFilters,
  memoryFilters,
  conditionFilters,
} from "../data/shopFilters";

function Checkbox({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center justify-between gap-2 text-sm text-gray-600 dark:text-gray-300">
      <span className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-600"
        />
        {label}
      </span>
      <span className="text-gray-400 dark:text-gray-500">({count})</span>
    </label>
  );
}

export default function FilterPanel() {
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("10000");
  const [brands, setBrands] = useState<Record<string, boolean>>({});
  const [ratings, setRatings] = useState<Record<number, boolean>>({});
  const [screenSizes, setScreenSizes] = useState<Record<string, boolean>>({});
  const [color, setColor] = useState<string | null>(null);
  const [memory, setMemory] = useState<Record<string, boolean>>({});
  const [conditions, setConditions] = useState<Record<string, boolean>>({});

  function toggle(setter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>, key: string) {
    setter((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function resetAll() {
    setMinPrice("0");
    setMaxPrice("10000");
    setBrands({});
    setRatings({});
    setScreenSizes({});
    setColor(null);
    setMemory({});
    setConditions({});
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
          Filters
        </h2>
        <button
          type="button"
          onClick={resetAll}
          className="text-xs font-semibold text-gray-400 hover:text-brand-600 dark:hover:text-brand-400"
        >
          Reset All
        </button>
      </div>

      <div className="mt-5 space-y-6">
        <div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">By Price</h3>
          <div className="mt-3 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="h-full w-3/5 rounded-full bg-brand-500" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">$</span>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-16 rounded-md border border-gray-200 px-2 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
            <span className="text-gray-400">–</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">$</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-20 rounded-md border border-gray-200 px-2 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
            <button
              type="button"
              className="ml-auto rounded-md bg-brand-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-brand-600"
            >
              Go
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">By Rating</h3>
          <div className="mt-3 space-y-2">
            {ratingFilters.map((r) => (
              <label key={r.stars} className="flex items-center justify-between gap-2 text-sm">
                <span className="flex items-center gap-1.5">
                  <input
                    type="checkbox"
                    checked={!!ratings[r.stars]}
                    onChange={() => setRatings((prev) => ({ ...prev, [r.stars]: !prev[r.stars] }))}
                    className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-600"
                  />
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="text-gray-400 dark:text-gray-500">({r.count})</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">By Screen Size</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {screenSizeFilters.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => toggle(setScreenSizes, size)}
                className={
                  "rounded-md border px-3 py-1.5 text-xs font-semibold transition " +
                  (screenSizes[size]
                    ? "border-brand-500 bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-300"
                    : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-300")
                }
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">By Color</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {colorFilters.map((hex) => (
              <button
                key={hex}
                type="button"
                aria-label={`Filter by color ${hex}`}
                onClick={() => setColor((c) => (c === hex ? null : hex))}
                className={
                  "h-7 w-7 rounded-full border-2 transition " +
                  (color === hex ? "border-brand-500" : "border-transparent")
                }
                style={{ backgroundColor: hex, boxShadow: hex === "#ffffff" ? "inset 0 0 0 1px #e5e7eb" : undefined }}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">By Memory</h3>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {memoryFilters.map((m) => (
              <Checkbox
                key={m.label}
                label={m.label}
                count={m.count}
                checked={!!memory[m.label]}
                onChange={() => toggle(setMemory, m.label)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">By Brands</h3>
          <div className="mt-3 space-y-2">
            {brandFilters.map((b) => (
              <Checkbox
                key={b.label}
                label={b.label}
                count={b.count}
                checked={!!brands[b.label]}
                onChange={() => toggle(setBrands, b.label)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">By Conditions</h3>
          <div className="mt-3 space-y-2">
            {conditionFilters.map((c) => (
              <Checkbox
                key={c.label}
                label={c.label}
                count={c.count}
                checked={!!conditions[c.label]}
                onChange={() => toggle(setConditions, c.label)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
