import { Link } from "react-router-dom";

interface BreadcrumbProps {
  items: { label: string; to?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <span key={item.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-300 dark:text-gray-600">/</span>}
                {item.to && !isLast ? (
                  <Link to={item.to} className="hover:text-brand-600 dark:hover:text-brand-400">
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={
                      isLast
                        ? "font-semibold text-gray-900 dark:text-white"
                        : ""
                    }
                  >
                    {item.label}
                  </span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
