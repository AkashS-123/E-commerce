import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import ContactVisual from "../components/ContactVisual";
import MapEmbed from "../components/MapEmbed";
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  PinterestIcon,
} from "../components/SocialIcons";

const offices = [
  {
    label: "United States (Head Quarter)",
    address: "152 Thatcher Road St, Mahattan, 10463, US",
    phone: "(+025) 3886 25 16",
    email: "hello@swootechmart.com",
  },
  {
    label: "United Kingdom (Branch)",
    address: "12 Buckingham Rd, Thornthwaite, HG3 4TY, UK",
    phone: "(+718) 895-5350",
    email: "contact@swootechmart.co.uk",
  },
];

const socials = [
  { icon: TwitterIcon, label: "Twitter" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: YoutubeIcon, label: "YouTube" },
  { icon: PinterestIcon, label: "Pinterest" },
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
  subscribe: boolean;
}

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "United States (US)",
  subject: "",
  message: "",
  subscribe: false,
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.country) {
      setError("Fill in the required fields marked with *.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
    setForm(initialForm);
  }

  const inputClass =
    "w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100";
  const labelClass = "mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200";

  return (
    <>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Shop", to: "/" }, { label: "Contact" }]} />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <h1 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
            Ready to work with us
          </h1>

          <div className="mt-8 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Contact us for all your questions and opinions
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number <span className="font-normal text-gray-400">(Optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="country" className={labelClass}>
                    Country / Region <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    required
                    value={form.country}
                    onChange={(e) => update("country", e.target.value)}
                    className={inputClass}
                  >
                    <option>United States (US)</option>
                    <option>United Kingdom (UK)</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>India</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>
                    Subject <span className="font-normal text-gray-400">(Optional)</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Note about your order, e.g. special note for delivery"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={inputClass + " resize-none"}
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <input
                    type="checkbox"
                    checked={form.subscribe}
                    onChange={(e) => update("subscribe", e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-600"
                  />
                  I want to receive news and updates once in a while. By submitting, I&apos;m
                  agreed to the{" "}
                  <a href="#" className="font-semibold text-brand-600 hover:underline dark:text-brand-400">
                    Terms &amp; Conditions
                  </a>
                </label>

                {error && (
                  <p role="alert" className="text-sm font-medium text-red-500">
                    {error}
                  </p>
                )}
                {sent && (
                  <p role="status" className="text-sm font-medium text-brand-600 dark:text-brand-400">
                    Thanks — your message is on its way. We'll get back to you soon.
                  </p>
                )}

                <button
                  type="submit"
                  className="rounded-lg bg-brand-500 px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/60">
                {offices.map((office, i) => (
                  <div key={office.label} className={i > 0 ? "mt-6 border-t border-gray-200 pt-6 dark:border-gray-700" : ""}>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                      {office.label}
                    </p>
                    <p className="mt-3 flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-gray-400" />
                      {office.address}
                    </p>
                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                      <Phone size={16} className="shrink-0 text-gray-400" />
                      {office.phone}
                    </p>
                    <a
                      href={`mailto:${office.email}`}
                      className="mt-2 flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
                    >
                      <Mail size={16} className="shrink-0" />
                      {office.email}
                    </a>
                  </div>
                ))}

                <div className="mt-6 flex gap-2">
                  {socials.map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:bg-brand-500 hover:text-white dark:bg-gray-900 dark:text-gray-300"
                    >
                      <Icon width={15} height={15} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <ContactVisual />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <h2 className="mb-5 text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
            Find us on Google Map
          </h2>
          <MapEmbed query="Manhattan, New York, US" label="Swoo Tech Mart headquarters location" />
        </div>
      </div>
    </>
  );
}
