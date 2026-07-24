export default function ContactVisual() {
  return (
    <svg viewBox="0 0 480 420" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="420" fill="#111827" />
      <g opacity="0.5">
        <circle cx="60" cy="60" r="140" fill="#1f2937" />
        <circle cx="430" cy="360" r="180" fill="#1f2937" />
      </g>

      {/* desk */}
      <rect x="0" y="330" width="480" height="90" fill="#0b0f17" />

      {/* laptop base */}
      <path d="M120 330 L360 330 L390 300 L90 300 Z" fill="#374151" />
      {/* laptop screen */}
      <g transform="translate(150 150)">
        <rect x="0" y="0" width="180" height="130" rx="6" fill="#e5e7eb" transform="skewX(-4)" />
        <rect x="8" y="8" width="164" height="106" rx="2" fill="#9ca3af" transform="skewX(-4)" />
        <rect x="18" y="20" width="80" height="8" rx="2" fill="#4b5563" transform="skewX(-4)" />
        <rect x="18" y="36" width="120" height="6" rx="2" fill="#6b7280" transform="skewX(-4)" />
        <rect x="18" y="48" width="100" height="6" rx="2" fill="#6b7280" transform="skewX(-4)" />
      </g>

      {/* wrist / hand shapes typing, kept abstract */}
      <path
        d="M260 300 C270 270 300 250 330 250 C345 250 355 262 350 275 C345 288 325 292 315 300 Z"
        fill="#f3d5b5"
      />
      <path
        d="M150 300 C145 268 120 246 92 246 C78 246 68 258 74 271 C80 284 100 290 112 300 Z"
        fill="#f3d5b5"
      />

      <text x="30" y="60" fill="#e5e7eb" fontSize="18" fontWeight="700" fontFamily="sans-serif">
        Let&apos;s talk shop.
      </text>
    </svg>
  );
}
