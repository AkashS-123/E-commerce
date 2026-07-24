import mii from "../assets/mii.png"

export default function PhonePromoBanner() {
  return (
    <div className="relative isolate flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 to-sky-100 p-6 dark:from-indigo-950 dark:to-sky-950 ">
      <div className="relative z-10">
        <h2 className="text-xl font-extrabold leading-tight text-gray-900 dark:text-white">
          redmi note 12
          <br />
          Pro+ 5g
        </h2>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Rise to the challenge</p>
      </div>

      <button
        type="button"
        className="absolute right-5 top-5 z-10 rounded-md bg-gray-900 px-3 py-1.5 text-[11px] font-extrabold uppercase text-white dark:bg-white dark:text-gray-900"
      >
        Shop Now
      </button>

      <img
        src={mii}
        alt="Redmi Note 12 Pro+ 5G"
        className=" absolute w-full h-full right-1 object-contain"
        style={{ bottom: "5px" }}
      />
    </div>
  );
}