import { useState, type FormEvent } from "react";
import { MapPin } from "lucide-react";

export default function MyAddress() {
  const [street, setStreet] = useState("257 Thatcher Road St");
  const [city, setCity] = useState("Brooklyn, Manhattan");
  const [state, setState] = useState("NY");
  const [zip, setZip] = useState("10092");
  const [saved, setSaved] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">My Address</h1>

      <div className="mt-6 flex items-start gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-800/60">
        <MapPin size={18} className="mt-0.5 shrink-0 text-brand-500" />
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {street}, {city}, {state} {zip}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
        <div>
          <label
            htmlFor="street"
            className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
          >
            Street Address
          </label>
          <input
            id="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="w-full max-w-2xl rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
            >
              City
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="state"
              className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
            >
              State
            </label>
            <input
              id="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="zip"
              className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
            >
              ZIP Code
            </label>
            <input
              id="zip"
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>

        {saved && (
          <p role="status" className="text-sm font-medium text-brand-600 dark:text-brand-400">
            Address saved.
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
