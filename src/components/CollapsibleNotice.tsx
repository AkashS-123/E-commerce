import { type ReactNode, useState } from "react";

interface CollapsibleNoticeProps {
  message: string;
  linkLabel: string;
  children: ReactNode;
}

export default function CollapsibleNotice({ message, linkLabel, children }: CollapsibleNoticeProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg bg-gray-100 dark:bg-gray-800/60">
      <div className="flex flex-wrap items-center gap-1 px-5 py-4 text-sm text-gray-700 dark:text-gray-200">
        {message}{" "}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="font-semibold text-red-500 hover:underline"
        >
          {linkLabel}
        </button>
      </div>
      {open && <div className="border-t border-gray-200 px-5 py-5 dark:border-gray-700">{children}</div>}
    </div>
  );
}
