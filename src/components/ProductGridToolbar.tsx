import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";

interface ProductGridToolbarProps {
  total: number;
  showing: number;
  perPage: number;
  onPerPageChange: (n: number) => void;
  sort: string;
  onSortChange: (s: string) => void;
  view: "grid" | "list";
  onViewChange: (v: "grid" | "list") => void;
}

const perPageOptions = [24, 48, 72];
const sortOptions = ["Default", "Price: Low to High", "Price: High to Low", "Newest", "Best Rated"];

export default function ProductGridToolbar({
  total,
  showing,
  perPage,
  onPerPageChange,
  sort,
  onSortChange,
  view,
  onViewChange,
}: ProductGridToolbarProps) {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4 dark:border-gray-800">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        1 - {showing} of {total} results
      </p>

      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          Show item
          <div className="flex gap-1">
            {perPageOptions.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => onPerPageChange(n)}
                className={
                  "rounded-md px-2 py-1 text-xs font-bold transition " +
                  (perPage === n
                    ? "bg-brand-500 text-white"
                    : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800")
                }
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="relative text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            Show item
            <button
              type="button"
              onClick={() => setSortOpen((o) => !o)}
              className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-200"
            >
              {sort}
            </button>
          </div>
          {sortOpen && (
            <div className="absolute right-0 top-full z-10 mt-1 w-44 rounded-lg border border-gray-100 bg-white py-1 shadow-lg dark:border-gray-800 dark:bg-gray-900">
              {sortOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onSortChange(opt);
                    setSortOpen(false);
                  }}
                  className="block w-full px-3 py-2 text-left text-xs text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
          View As
          <button
            type="button"
            onClick={() => onViewChange("grid")}
            aria-label="Grid view"
            className={
              "flex h-7 w-7 items-center justify-center rounded-md " +
              (view === "grid" ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white" : "")
            }
          >
            <LayoutGrid size={14} />
          </button>
          <button
            type="button"
            onClick={() => onViewChange("list")}
            aria-label="List view"
            className={
              "flex h-7 w-7 items-center justify-center rounded-md " +
              (view === "list" ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white" : "")
            }
          >
            <List size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
