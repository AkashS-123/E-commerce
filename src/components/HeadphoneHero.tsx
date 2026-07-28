import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import headset from "../assets/headset.png"

const slides = [
  { title: "Noise Cancelling", subtitle: "Headphone" },
  { title: "Studio Quality", subtitle: "Sound" },
  { title: "40Hr Battery", subtitle: "Life" },
];

export default function HeadphoneHero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + slides.length) % slides.length);
  }

  return (
    <div className="relative overflow-hidden rounded-2xl">
  <img
    src={headset}
    alt="Headphone"
    className="absolute inset-0 w-full h-full object-contain"
  />

      {/* Text content, sits above the image */}
      <div className="relative z-10 flex min-h-[380px] flex-col justify-center px-4 sm:px-10 py-8 max-w-full sm:max-w-[360px]">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl leading-tight">
          {slide.title}
          <br />
          {slide.subtitle}
        </h2>

        <p className="mt-4 max-w-[220px] text-sm text-white/80 leading-relaxed">
          Boso Over-Ear Headphone
          <br />
          Wifi, Voice Assistant,
          <br />
          Low Latency Game Mode
        </p>

        <button
          type="button"
          className="mt-6 w-fit rounded-lg bg-white px-6 py-3 text-xs font-extrabold uppercase text-gray-900"
        >
          Buy Now
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full bg-white/80 px-2 py-1 text-xs font-semibold text-gray-700 backdrop-blur">
        <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className="p-0.5">
          <ChevronLeft size={14} />
        </button>
        {index + 1} / {slides.length}
        <button type="button" onClick={() => go(1)} aria-label="Next slide" className="p-0.5">
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}