import { sidebarCategories } from "../data/shopFilters";

interface CategoryPanelProps {
  active: string;
  onSelect: (label: string) => void;
}

export default function CategoryPanel({ active, onSelect }: CategoryPanelProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800">
      <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
        Categories
      </h2>

      <button
        type="button"
        onClick={() => onSelect("All")}
        className={
          "mt-4 w-full rounded-lg py-2.5 text-sm font-bold transition " +
          (active === "All"
            ? "bg-brand-500 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200")
        }
      >
        All Categories
      </button>

      <p className="mt-5 text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
        Cell Phones &amp; Tablets
      </p>
      <ul className="mt-3 space-y-2 text-sm">
        {sidebarCategories.map((cat) => (
          <li key={cat.label}>
            <button
              type="button"
              onClick={() => onSelect(cat.label)}
              className={
                "flex w-full items-center justify-between text-left transition " +
                (active === cat.label
                  ? "font-bold text-brand-600 dark:text-brand-400"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white")
              }
            >
              {cat.label}
              {cat.suffix && <span className="text-gray-400 dark:text-gray-500">{cat.suffix}</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
