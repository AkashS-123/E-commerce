interface ProductShowcaseProps {
  color: string;
  angle?: "front" | "back" | "side";
  className?: string;
}

export default function ProductShowcase({ color, angle = "front", className }: ProductShowcaseProps) {
  return (
    <svg viewBox="0 0 300 300" className={className}>
      <rect width="300" height="300" fill="#f8fafc" />
      <circle cx="150" cy="150" r="120" fill={color} opacity="0.08" />

      {angle === "back" ? (
        <g>
          <rect x="100" y="40" width="100" height="220" rx="20" fill={color} />
          <circle cx="180" cy="70" r="12" fill="#0a0a0a" opacity="0.5" />
          <circle cx="180" cy="70" r="8" fill="#0a0a0a" />
          <circle cx="150" cy="70" r="8" fill="#0a0a0a" />
          <rect x="130" y="230" width="40" height="4" rx="2" fill="#0a0a0a" opacity="0.3" />
        </g>
      ) : angle === "side" ? (
        <g transform="rotate(-8 150 150)">
          <rect x="105" y="35" width="90" height="230" rx="18" fill="#111827" />
          <rect x="112" y="42" width="76" height="216" rx="10" fill={color} />
          <rect x="118" y="50" width="64" height="140" rx="4" fill="#0f172a" opacity="0.85" />
        </g>
      ) : (
        <g>
          <rect x="105" y="35" width="90" height="230" rx="18" fill="#111827" />
          <rect x="112" y="42" width="76" height="216" rx="10" fill="#0f172a" />
          <rect x="118" y="50" width="64" height="188" rx="4" fill={color} opacity="0.9" />
          <circle cx="150" cy="248" r="3" fill="#334155" />
        </g>
      )}
    </svg>
  );
}
