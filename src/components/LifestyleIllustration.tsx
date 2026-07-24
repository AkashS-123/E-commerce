interface LifestyleIllustrationProps {
  accent: string;
  variant?: "hand" | "person" | "closeup";
  className?: string;
}

export default function LifestyleIllustration({
  accent,
  variant = "hand",
  className,
}: LifestyleIllustrationProps) {
  return (
    <svg viewBox="0 0 800 420" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="420" fill="#e2e8f0" />
      <rect width="800" height="420" fill={accent} opacity="0.08" />

      {variant === "hand" && (
        <g>
          <circle cx="150" cy="380" r="160" fill={accent} opacity="0.15" />
          <rect x="330" y="120" width="150" height="270" rx="22" fill="#111827" />
          <rect x="340" y="132" width="130" height="246" rx="12" fill={accent} />
          <path
            d="M300 380 C260 360 250 320 270 300 C290 285 310 300 320 320 L340 360 Z"
            fill="#f3d5b5"
          />
        </g>
      )}

      {variant === "person" && (
        <g>
          <circle cx="620" cy="120" r="180" fill={accent} opacity="0.12" />
          <rect x="120" y="140" width="180" height="280" rx="14" fill="#e5e7eb" />
          <circle cx="440" cy="150" r="46" fill="#c98a5b" />
          <path d="M394 150 C394 118 414 100 440 100 C466 100 486 118 486 150 C472 138 458 146 440 146 C422 146 408 138 394 150 Z" fill="#171310" />
          <path d="M390 200 C390 250 410 300 440 320 C470 300 490 250 490 200 Z" fill="#f5f0e8" />
          <rect x="470" y="250" width="60" height="90" rx="6" fill={accent} />
        </g>
      )}

      {variant === "closeup" && (
        <g>
          <rect x="220" y="60" width="360" height="300" rx="24" fill="#0f172a" />
          <rect x="240" y="80" width="320" height="260" rx="14" fill={accent} />
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x={260 + (i % 4) * 72}
              y={100 + Math.floor(i / 4) * 90}
              width="52"
              height="52"
              rx="12"
              fill="#ffffff"
              opacity="0.85"
            />
          ))}
        </g>
      )}
    </svg>
  );
}
