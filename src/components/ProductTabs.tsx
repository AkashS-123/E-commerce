import { useState } from "react";
import { Star } from "lucide-react";
import { reviews } from "../data/reviews";
import des from "../assets/des.jpg";
import des1 from "../assets/des1.jpg";

const tabs: { id: "description" | "reviews" | "additional"; label: string }[] = [
  { id: "description", label: "Description" },
  { id: "reviews", label: `Reviews (${reviews.length})` },
  { id: "additional", label: "Additional Information" },
];

const specs: [string, string][] = [
  ["Brand", "sumsong"],
  ["Model", "Galatero X6 Ultra"],
  ["Network", "LTE 4G"],
  ["Display", "6.4\" Super AMOLED, 120Hz"],
  ["Storage", "64GB / 128GB / 256GB / 512GB"],
  ["Battery", "4,500 mAh, fast charging"],
  ["Warranty", "1-year limited manufacturer warranty"],
];

export default function ProductTabs() {
  const [active, setActive] = useState<"description" | "reviews" | "additional">("description");
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap gap-8 border-b border-gray-100 dark:border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={
              "border-b-2 pb-4 text-sm font-bold uppercase tracking-wide transition " +
              (active === tab.id
                ? "border-brand-500 text-gray-900 dark:text-white"
                : "border-transparent text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300")
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-8">
        {active === "description" && (
          <div className="space-y-8">
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Built for ultra-fast performance, the thin and lightweight Samsong Galatero Tab
              S2 goes anywhere you go. Photos, movies and documents pop on a crisp, clear Super
              AMOLED display. Expandable memory lets you enjoy more of your favorite content.
              And connecting and sharing between all your Samsong devices is easier than ever.
              Welcome to life with the reimagined Galatero Tab S2. Watch the world come to life
              on your tablet's <strong className="text-gray-800 dark:text-gray-100">Super AMOLED display</strong>.
              With deep contrast, rich colors and crisp details, you won't miss a thing.
            </p>

            <figure>
              <div className="aspect-[16/7] overflow-hidden rounded-2xl">
                <img
                  src={des}
                  alt="Samsong Galatero Tab S2"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs italic text-gray-400 dark:text-gray-500">
                * The Galatero Tab S2's 4 : 3 ratio display provides you with an ideal
                environment for performing office tasks.
              </figcaption>
            </figure>

            <div>
              <h3 className="text-base font-extrabold text-gray-900 dark:text-white">
                From the manufacturer
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Dive into the blockbuster movies you can't wait to see. Switch between your
                favorite apps quickly and easily. The new and improved octa-core processor
                gives you the power and speed you need to see more and do more. Expand your
                tablet's memory from 32GB up to an additional 128GB and enjoy more of your
                favorite music, photos, movies and games on the go with a microSD card. With
                Quick Connect, start a show on your Smart TV and, with the touch of a button,
                take it with you by moving it to your Galatero Tab S2.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Or send videos and photos from your tablet screen to your TV screen to share
                with everyone in the room. Work effortlessly between your Samsong tablet and
                Samsong smartphone with SideSync. Quickly drag and drop photos between devices.
                And even respond to a call from your smartphone right on your tablet screen.
              </p>
            </div>

            <div className="aspect-[16/7] overflow-hidden rounded-2xl">
              <img
                  src={des1}
                  alt="Samsong Galatero Tab S2"
                  className="h-full w-full object-cover"
                />
            </div>

            <div>
              <h3 className="text-base font-extrabold text-gray-900 dark:text-white">
                Samsong Galatero Tab S2, 8-Inch, White
              </h3>
              <p
                className={
                  "mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400 " +
                  (showMore ? "" : "line-clamp-3")
                }
              >
                The Samsong Galatero Tab S2 offers dual cameras: a rear-facing 8-megapixel
                camera with Auto Focus and a 2.1-megapixel camera on the front. Take
                high-quality pictures and video or chat with friends, family, and colleagues.
                Customize your Galatero Tab S2 with the apps you use most. The Galatero
                Essentials widget provides a collection of premium complimentary apps
                optimized for your tablet screen. Select and download the apps you want to
                instantly upgrade your tablet experience.
              </p>
              <button
                type="button"
                onClick={() => setShowMore((s) => !s)}
                className="mt-2 text-sm font-bold text-brand-600 hover:underline dark:text-brand-400"
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            </div>
          </div>
        )}

        {active === "reviews" && (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{review.author}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{review.date}</p>
                </div>
                <div className="mt-1 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-gray-600"}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-100">
                  {review.title}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{review.body}</p>
              </div>
            ))}
          </div>
        )}

        {active === "additional" && (
          <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {specs.map(([label, value]) => (
                  <tr key={label} className="odd:bg-gray-50 dark:odd:bg-gray-800/40">
                    <th className="w-40 px-5 py-3 font-semibold text-gray-500 dark:text-gray-400">
                      {label}
                    </th>
                    <td className="px-5 py-3 text-gray-800 dark:text-gray-100">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
