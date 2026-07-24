export default function SidebarPromos() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
      <a
        href="#"
        className="relative flex h-36 flex-col justify-between overflow-hidden rounded-2xl bg-gray-900 p-5 text-white"
      >
        <span className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand-500/30" />
        <span className="absolute right-4 top-4 rounded-full bg-brand-500 px-2.5 py-1 text-xs font-extrabold">
          50%
        </span>
        <span className="relative text-2xl font-extrabold uppercase leading-none">
          Sale
          <br />
          Gear
        </span>
        <span className="relative text-xs font-semibold text-gray-300">Controllers &amp; more</span>
      </a>

      <a
        href="#"
        className="relative flex h-36 flex-col justify-between overflow-hidden rounded-2xl bg-emerald-950 p-5 text-white"
      >
        <span className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-brand-500/20" />
        <span className="relative text-lg font-extrabold leading-tight">
          oPad Pro
          <br />
          Mini 5
        </span>
        <span className="relative text-xs font-semibold text-gray-300">
          From <span className="text-brand-400">$169</span>
        </span>
      </a>
    </div>
  );
}
