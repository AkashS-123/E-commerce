interface TeamAvatarProps {
  skinTone: string;
  hairColor: string;
  shirtColor: string;
  hairStyle?: "short" | "side" | "bald";
  hasGlasses?: boolean;
  hasBeard?: boolean;
  bgTone: string;
  className?: string;
}

export default function TeamAvatar({
  skinTone,
  hairColor,
  shirtColor,
  hairStyle = "short",
  hasGlasses = false,
  hasBeard = false,
  bgTone,
  className,
}: TeamAvatarProps) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <rect width="200" height="200" fill={bgTone} />

      {/* shoulders / shirt */}
      <path d="M35 200 C35 155 62 138 100 138 C138 138 165 155 165 200 Z" fill={shirtColor} />
      {/* collar */}
      <path d="M82 140 L100 165 L118 140" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.7" />

      {/* neck */}
      <rect x="86" y="118" width="28" height="30" fill={skinTone} />

      {/* head */}
      <ellipse cx="100" cy="95" rx="42" ry="46" fill={skinTone} />

      {/* beard */}
      {hasBeard && (
        <path
          d="M62 92 C60 118 74 138 100 138 C126 138 140 118 138 92 C132 108 120 118 100 118 C80 118 68 108 62 92 Z"
          fill={hairColor}
          opacity="0.85"
        />
      )}

      {/* hair */}
      {hairStyle !== "bald" && (
        <path
          d={
            hairStyle === "side"
              ? "M56 90 C52 52 74 30 100 30 C126 30 148 52 144 90 C140 70 132 82 100 82 C86 82 60 70 56 90 Z"
              : "M58 92 C54 55 72 30 100 30 C128 30 146 55 142 92 C138 78 128 68 128 68 C120 80 108 66 100 66 C92 66 80 80 72 68 C72 68 62 78 58 92 Z"
          }
          fill={hairColor}
        />
      )}

      {/* glasses */}
      {hasGlasses && (
        <g stroke="#1f2937" strokeWidth="3" fill="none">
          <rect x="66" y="88" width="30" height="22" rx="6" />
          <rect x="104" y="88" width="30" height="22" rx="6" />
          <line x1="96" y1="98" x2="104" y2="98" />
          <line x1="66" y1="94" x2="54" y2="90" />
          <line x1="134" y1="94" x2="146" y2="90" />
        </g>
      )}

      {/* eyes (skip drawing separately if glasses cover them visually, keep simple) */}
      {!hasGlasses && (
        <>
          <circle cx="81" cy="98" r="3" fill="#2d2013" />
          <circle cx="119" cy="98" r="3" fill="#2d2013" />
        </>
      )}

      {/* mouth */}
      <path d="M88 118 Q100 126 112 118" stroke="#7a4a2f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
