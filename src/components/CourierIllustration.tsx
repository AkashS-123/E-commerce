export default function CourierIllustration() {
  return (
    <svg viewBox="0 0 400 420" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
      <rect width="400" height="420" fill="#1ab24a" />
      <circle cx="70" cy="60" r="90" fill="#ffffff" opacity="0.06" />
      <circle cx="340" cy="380" r="120" fill="#ffffff" opacity="0.06" />

      {/* legs */}
      <rect x="150" y="300" width="34" height="100" rx="8" fill="#1f2937" />
      <rect x="210" y="300" width="34" height="100" rx="8" fill="#1f2937" />

      {/* torso / polo shirt */}
      <path
        d="M120 190 C120 150 155 130 197 130 C239 130 274 150 274 190 L268 305 L126 305 Z"
        fill="#0f9c44"
      />
      <path d="M170 132 L197 160 L224 132" fill="none" stroke="#0b7a35" strokeWidth="6" strokeLinecap="round" />

      {/* arms */}
      <path
        d="M120 195 C95 205 82 230 88 265 C92 285 108 298 128 300 L140 270 C126 262 120 248 124 232 Z"
        fill="#0f9c44"
      />
      <path
        d="M274 195 C299 205 312 230 306 265 C302 285 286 298 266 300 L254 270 C268 262 274 248 270 232 Z"
        fill="#0f9c44"
      />
      <circle cx="112" cy="272" r="14" fill="#f3d5b5" />
      <circle cx="282" cy="272" r="14" fill="#f3d5b5" />

      {/* head */}
      <circle cx="197" cy="95" r="46" fill="#f3d5b5" />
      <path
        d="M151 85 C151 55 172 40 197 40 C222 40 243 55 243 85 C230 70 215 78 197 78 C179 78 164 70 151 85 Z"
        fill="#5b3a29"
      />
      {/* cap */}
      <path d="M148 68 C148 45 170 30 197 30 C224 30 246 45 246 68 L250 78 L144 78 Z" fill="#0f9c44" />
      <rect x="140" y="72" width="60" height="12" rx="6" fill="#0b7a35" />
      {/* smile */}
      <path d="M178 108 Q197 122 216 108" stroke="#7a4a2f" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="178" cy="92" r="3" fill="#3a2418" />
      <circle cx="216" cy="92" r="3" fill="#3a2418" />

      {/* held package */}
      <rect x="150" y="280" width="95" height="80" rx="4" fill="#e3c08d" stroke="#c79c62" strokeWidth="2" />
      <circle cx="197" cy="315" r="18" fill="#ffffff" />
      <path
        d="M188 315 a9 9 0 1 1 18 0 a9 9 0 0 1 -18 0"
        fill="none"
        stroke="#1ab24a"
        strokeWidth="4"
      />
      <text x="197" y="345" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#5b3a29">
        SWOO
      </text>
    </svg>
  );
}
