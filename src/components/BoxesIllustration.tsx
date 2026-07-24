export default function BoxesIllustration() {
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="boxesBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef9ee" />
          <stop offset="100%" stopColor="#e9f7ee" />
        </linearGradient>
      </defs>
      <rect width="600" height="280" fill="url(#boxesBg)" />

      {[
        { x: 300, y: 190, w: 70, h: 70 },
        { x: 375, y: 150, w: 80, h: 110 },
        { x: 340, y: 120, w: 60, h: 70 },
        { x: 460, y: 170, w: 70, h: 90 },
        { x: 455, y: 110, w: 65, h: 65 },
        { x: 405, y: 90, w: 55, h: 65 },
        { x: 525, y: 140, w: 55, h: 120 },
        { x: 240, y: 210, w: 65, h: 50 },
      ].map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx="3"
            fill="#e3c08d"
            stroke="#c79c62"
            strokeWidth="2"
          />
          <line
            x1={b.x}
            y1={b.y + b.h * 0.35}
            x2={b.x + b.w}
            y2={b.y + b.h * 0.35}
            stroke="#c79c62"
            strokeWidth="1.5"
          />
          <rect
            x={b.x + b.w * 0.3}
            y={b.y + b.h * 0.5}
            width={b.w * 0.4}
            height={b.h * 0.22}
            fill="#f4e3c4"
          />
        </g>
      ))}

      {/* small line-art appliance icons scattered across a couple boxes for texture */}
      <g stroke="#8a6a3a" strokeWidth="1.5" fill="none" opacity="0.7">
        <rect x="420" y="105" width="24" height="18" rx="2" />
        <circle cx="432" cy="114" r="5" />
        <rect x="480" y="185" width="26" height="34" rx="2" />
        <line x1="480" y1="200" x2="506" y2="200" />
      </g>
    </svg>
  );
}
