import { useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePassword() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!current || !next || !confirm) {
      setError("Fill in every field to update your password.");
      setSaved(false);
      return;
    }
    if (next !== confirm) {
      setError("New passwords don't match.");
      setSaved(false);
      return;
    }
    setError("");
    setSaved(true);
    setCurrent("");
    setNext("");
    setConfirm("");
    window.setTimeout(() => setSaved(false), 2500);
  }

  const fieldClass =
    "w-full max-w-2xl rounded-lg border border-gray-200 px-4 py-3 pr-11 text-sm text-gray-800 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100";

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">Change Password</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
        <div>
          <label
            htmlFor="current-password"
            className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
          >
            Current Password
          </label>
          <div className="relative max-w-2xl">
            <input
              id="current-password"
              type={show ? "text" : "password"}
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="new-password"
            className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
          >
            New Password
          </label>
          <div className="relative max-w-2xl">
            <input
              id="new-password"
              type={show ? "text" : "password"}
              value={next}
              onChange={(e) => setNext(e.target.value)}
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="confirm-new-password"
            className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
          >
            Confirm New Password
          </label>
          <div className="relative max-w-2xl">
            <input
              id="confirm-new-password"
              type={show ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className={fieldClass}
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              aria-label={show ? "Hide passwords" : "Show passwords"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {error && (
          <p role="alert" className="text-sm font-medium text-red-500">
            {error}
          </p>
        )}
        {saved && (
          <p role="status" className="text-sm font-medium text-brand-600 dark:text-brand-400">
            Password updated.
          </p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-brand-500 px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}
