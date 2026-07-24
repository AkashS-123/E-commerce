interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const pages = [1, 2, 3, 4];

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          className={
            "flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold transition " +
            (page === p
              ? "bg-brand-500 text-white"
              : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800")
          }
        >
          {p}
        </button>
      ))}
      <span className="px-1 text-gray-400 dark:text-gray-500">...</span>
      <button
        type="button"
        onClick={() => onChange(totalPages)}
        className={
          "flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold transition " +
          (page === totalPages
            ? "bg-brand-500 text-white"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800")
        }
      >
        {totalPages}
      </button>
      <button
        type="button"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        className="ml-1 rounded-md px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      >
        Next
      </button>
    </div>
  );
}
