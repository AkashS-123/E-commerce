import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./SocialIcons";

const categories = [
  "Laptops",
  "PC & Computers",
  "Cell Phones",
  "Tablets",
  "Gaming & VR",
  "Networks",
  "Cameras",
  "Sounds",
  "Office",
];

const company = [
  { label: "About Swoo", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Career" },
  { label: "Blog" },
  { label: "Sitemap" },
  { label: "Store Locations" },
];

const helpCenter = [
  "Customer Service",
  "Policy",
  "Terms & Conditions",
  "Track Order",
  "FAQs",
  "My Account",
  "Product Support",
];

const partner = ["Become Seller", "Affiliate", "Advertise", "Partnership"];

const socials = [
  { icon: TwitterIcon, label: "Twitter" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: YoutubeIcon, label: "YouTube" },
];

const payments = ["PayPal", "Mastercard", "Visa", "Stripe", "Klarna"];

type FooterLink = string | { label: string; to?: string };

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
        {links.map((link) => {
          const label = typeof link === "string" ? link : link.label;
          const to = typeof link === "string" ? undefined : link.to;
          return (
            <li key={label}>
              {to ? (
                <Link to={to} className="hover:text-brand-600 dark:hover:text-brand-400">
                  {label}
                </Link>
              ) : (
                <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">
                  {label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-14 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 sm:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <h2 className="mb-5 text-sm font-extrabold uppercase leading-snug text-gray-900 dark:text-white">
            Swoo &mdash; 1st NYC Tech Online Market
          </h2>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
            Hotline 24/7
          </p>
          <a
            href="tel:+0253686251"
            className="mb-4 block text-xl font-extrabold text-brand-600 dark:text-brand-400"
          >
            (025) 3686 25 16
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            257 Thatcher Road St, Brooklyn, Manhattan,
            <br />
            NY 10092
            <br />
            contact@swootechmart.com
          </p>

          <div className="mt-5 flex gap-2">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition hover:bg-brand-500 hover:text-white dark:bg-gray-800 dark:text-gray-300"
              >
                <Icon width={15} height={15} />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Top Categories" links={categories} />
        <FooterColumn title="Company" links={company} />
        <FooterColumn title="Help Center" links={helpCenter} />
        <FooterColumn title="Partner" links={partner} />
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-3">
          <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-600 dark:border-gray-700 dark:text-gray-300">
            USD <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-600 dark:border-gray-700 dark:text-gray-300">
            <span aria-hidden>🇺🇸</span> Eng <ChevronDown size={14} />
          </button>
        </div>

        <div className="lg:max-w-md lg:flex-1">
          <h3 className="mb-3 text-sm font-extrabold text-gray-900 dark:text-white">
            Subscribe &amp; get{" "}
            <span className="text-red-500">10% off</span> for your first order
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center border-b border-gray-300 dark:border-gray-700"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full flex-1 bg-transparent py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none dark:text-gray-200"
            />
            <button
              type="submit"
              className="shrink-0 text-sm font-bold uppercase text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            By subscribing, you're accepted our{" "}
            <a href="#" className="underline">
              Policy
            </a>
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 dark:text-gray-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              Swoo Tech Mart
            </span>
            . All Rights Reserved
          </p>
          <p className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-400 dark:text-gray-500">
            {payments.join(" · ")}
          </p>
          <a href="#" className="text-brand-600 hover:underline dark:text-brand-400">
            Mobile Site
          </a>
        </div>
      </div>
    </footer>
  );
}
