import { ShieldCheck, Truck, Tag, Sparkles } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import BoxesIllustration from "../components/BoxesIllustration";
// import CourierIllustration from "../components/CourierIllustration";
// import SkylineIllustration from "../components/SkylineIllustration";
import { leadership } from "../data/leadership";
import { timelineLeft, timelineRight } from "../data/timeline";
import swat from "../assets/swat.png"
import vision from "../assets/vision.png"

const stats = [
  { value: "$12,5M", label: "Total revenue from 2001 - 2023" },
  { value: "12K+", label: "Orders delivered successful on everyday" },
  { value: "725+", label: "Store and office in U.S and worldwide" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "100% Authentic Products",
    body: "Swoo Tech Mart just distribute 100% authorized products & guarantee quality. Nulla porta nulla nec orci vulputate, id rutrum sapien varius.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    body: "Fast shipping with a lots of option to delivery. 100% guarantee that your goods alway on time and perserve quality.",
  },
  {
    icon: Tag,
    title: "Affordable Price",
    body: "We offer an affordable & competitive price with a lots of special promotions.",
  },
];

function TimelineList({ entries }: { entries: { year: string; text: string }[] }) {
  return (
    <dl className="space-y-4">
      {entries.map((entry) => (
        <div key={entry.year} className="flex gap-3 text-sm">
          <dt className="w-14 shrink-0 font-extrabold text-gray-900 dark:text-white">{entry.year}:</dt>
          <dd className="text-gray-600 dark:text-gray-300">{entry.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function About() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Pages" }, { label: "About" }]} />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          {/* Hero */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <BoxesIllustration />
            </div>
            <div className="relative flex min-h-[260px] flex-col justify-center px-8 py-10 sm:px-12">
              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                Best experience
                <br />
                always wins
              </h1>
              <p className="mt-4 max-w-xs text-sm font-medium text-gray-600">
                #1 Online Marketplace for Electronic &amp; Technology in Mahanttan, CA
              </p>
            </div>
          </div>

          {/* Purpose + stats */}
          <div className="mt-10 grid gap-8 border-b border-gray-100 pb-10 dark:border-gray-800 sm:grid-cols-2 lg:grid-cols-4">
            <p className="text-lg font-extrabold leading-snug text-gray-900 dark:text-white lg:col-span-1">
              OUR PURPOSE IS TO{" "}
              <span className="text-brand-600 dark:text-brand-400">ENRICH AND ENHANCE LIVES</span>{" "}
              THROUGH TECHNOLOGY
            </p>
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Courier + copy panel */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img src={swat} alt="Team of diverse colleagues collaborating around a table, discussing plans and using laptops in a bright modern office, conveying focused positive energy" />
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-gray-50 p-8 dark:bg-gray-800/60 sm:p-10">
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
                We connect millions of buyers and sellers around the world, empowering people
                &amp; creating economic opportunity for all.
              </h2>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                Within our markets, millions of people around the world connect, both online
                and offline, to make, sell and buy unique goods. We also offer a wide range of
                Seller Services and tools that help creative entrepreneurs start, manage &amp;
                scale their businesses.
              </p>
              <button
                type="button"
                className="mt-6 w-fit rounded-lg bg-brand-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
              >
                Our Showreel
              </button>
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-extrabold text-gray-900 dark:text-white">{title}</h3>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <Icon size={18} />
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{body}</p>
              </div>
            ))}
          </div>

          {/* Mission and vision */}
          <div className="mt-14">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
              Our Mission and Vision
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel
              magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus.
              Vestibulum enim eros, porta eget quam et, euismod dictum elit. Nullam eu tempus
              magna. Fusce malesuada nisi id felis placerat porta vel sed augue.{" "}
              <strong className="text-gray-800 dark:text-gray-100">Vivamus mollis mauris</strong>{" "}
              vitae rhoncus egestas. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>

            <div className="mt-8 h-72 overflow-hidden rounded-2xl sm:h-96">
              <img src={vision} alt="Futuristic cityscape with illuminated buildings and network lines representing global connectivity and Swoo Tech Mart mission to connect people worldwide" />
              {/* <SkylineIllustration /> */}
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-14">
            <h2 className="text-lg font-extrabold uppercase text-gray-900 dark:text-white">
              From a retail store to the global chain of stores
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-gray-600 dark:text-gray-300">
              Pellentesque laoreet justo nec ex sodales euismod. Aliquot orci tortor, bibendum
              nec ultricies ac, auctor nec purus. Maecenas in consectetur erat.
            </p>

            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              <TimelineList entries={timelineLeft} />
              <TimelineList entries={timelineRight} />
            </div>
          </div>

          {/* Leadership */}
          <div className="mt-14">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-extrabold uppercase text-gray-900 dark:text-white">
                Leaderships
              </h2>
              <a href="#" className="text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400">
                View All
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {leadership.map((leader) => (
                <div key={leader.name}>
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img src={leader.image} alt={`${leader.name} ${leader.title} smiling confident headshot in an office environment with a softly blurred background, professional and approachable tone`} />
                  </div>
                  <p className="mt-3 text-sm font-bold text-gray-900 dark:text-white">{leader.name}</p>
                  <p className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                    {leader.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Promo strip */}
      <div className="mx-auto max-w-7xl px-6 pb-14">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-4 text-center text-sm font-semibold text-white">
          <Sparkles size={16} />
          Member get <span className="font-extrabold">FREE SHIPPING</span> with no order
          minimum!. *Restriction apply
          <a href="#" className="font-extrabold underline underline-offset-2">
            Try free 30-days trial!
          </a>
        </div>
      </div>
    </>
  );
}
