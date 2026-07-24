export default function SkylineIllustration() {
  const buildings = [
    { x: 0, w: 60, h: 220 },
    { x: 65, w: 40, h: 280 },
    { x: 110, w: 70, h: 180 },
    { x: 185, w: 50, h: 320 },
    { x: 240, w: 60, h: 240 },
    { x: 305, w: 45, h: 300 },
    { x: 355, w: 65, h: 200 },
    { x: 425, w: 50, h: 260 },
    { x: 480, w: 70, h: 340 },
    { x: 555, w: 45, h: 220 },
  ];

  return (
    <svg viewBox="0 0 600 360" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill="url(#skyGrad)" />

      {buildings.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={360 - b.h} width={b.w} height={b.h} fill={i % 2 === 0 ? "#334155" : "#3f4a5e"} />
          {Array.from({ length: Math.floor(b.h / 22) }).map((_, row) =>
            Array.from({ length: Math.max(1, Math.floor(b.w / 16)) }).map((_, col) => {
              const lit = (row * 3 + col * 2 + i) % 5 !== 0;
              return (
                <rect
                  key={`${row}-${col}`}
                  x={b.x + 6 + col * 16}
                  y={360 - b.h + 10 + row * 22}
                  width="8"
                  height="10"
                  fill={lit ? "#fbbf24" : "#1e293b"}
                  opacity={lit ? 0.85 : 0.4}
                />
              );
            }),
          )}
        </g>
      ))}
    </svg>
  );
}
