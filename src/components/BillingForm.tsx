const inputClass =
  "w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100";
const labelClass = "mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200";

interface BillingFormProps {
  createAccount: boolean;
  onCreateAccountChange: (checked: boolean) => void;
  shipToDifferent?: boolean;
  onShipToDifferentChange?: (checked: boolean) => void;
  idPrefix?: string;
}

export default function BillingForm({
  createAccount,
  onCreateAccountChange,
  shipToDifferent,
  onShipToDifferentChange,
  idPrefix = "billing",
}: BillingFormProps) {
  const id = (name: string) => `${idPrefix}-${name}`;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={id("firstName")} className={labelClass}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input id={id("firstName")} type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor={id("lastName")} className={labelClass}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input id={id("lastName")} type="text" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor={id("company")} className={labelClass}>
          Company Name <span className="font-normal text-gray-400">(Optional)</span>
        </label>
        <input id={id("company")} type="text" className={inputClass} />
      </div>

      <div>
        <label htmlFor={id("country")} className={labelClass}>
          Country / Region <span className="text-red-500">*</span>
        </label>
        <select id={id("country")} required defaultValue="United States (US)" className={inputClass}>
          <option>United States (US)</option>
          <option>United Kingdom (UK)</option>
          <option>Canada</option>
          <option>Australia</option>
          <option>India</option>
        </select>
      </div>

      <div>
        <label htmlFor={id("street")} className={labelClass}>
          Street Address <span className="text-red-500">*</span>
        </label>
        <input
          id={id("street")}
          type="text"
          required
          placeholder="House number and street name ..."
          className={inputClass}
        />
        <input
          id={id("street2")}
          type="text"
          placeholder="Apartment, suite, unit, etc (Optional)"
          className={inputClass + " mt-3"}
        />
      </div>

      <div>
        <label htmlFor={id("city")} className={labelClass}>
          Town / City <span className="text-red-500">*</span>
        </label>
        <input id={id("city")} type="text" required className={inputClass} />
      </div>

      <div>
        <label htmlFor={id("state")} className={labelClass}>
          State / County <span className="text-red-500">*</span>
        </label>
        <select id={id("state")} required defaultValue="Washington" className={inputClass}>
          <option>Washington</option>
          <option>New York</option>
          <option>California</option>
          <option>Texas</option>
          <option>Florida</option>
        </select>
      </div>

      <div>
        <label htmlFor={id("zip")} className={labelClass}>
          Zip Code <span className="text-red-500">*</span>
        </label>
        <input id={id("zip")} type="text" required className={inputClass} />
      </div>

      <div>
        <label htmlFor={id("phone")} className={labelClass}>
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input id={id("phone")} type="tel" required className={inputClass} />
      </div>

      <div>
        <label htmlFor={id("email")} className={labelClass}>
          Email Address <span className="text-red-500">*</span>
        </label>
        <input id={id("email")} type="email" required className={inputClass} />
      </div>

      <label className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
        <input
          type="checkbox"
          checked={createAccount}
          onChange={(e) => onCreateAccountChange(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-600"
        />
        Create an account?
      </label>

      {onShipToDifferentChange && (
        <label className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
          <input
            type="checkbox"
            checked={!!shipToDifferent}
            onChange={(e) => onShipToDifferentChange(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-600"
          />
          Ship to a different address?
        </label>
      )}
    </div>
  );
}

export { inputClass, labelClass };
