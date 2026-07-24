import type { SVGProps } from "react";

export default function ProfileAvatar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" {...props}>
      <rect width="200" height="200" className="fill-gray-200 dark:fill-gray-700" />
      {/* shoulders */}
      <path
        d="M40 200 C40 155 66 138 100 138 C134 138 160 155 160 200 Z"
        className="fill-emerald-700"
      />
      <path d="M85 140 h30 v20 a15 15 0 0 1 -30 0 Z" className="fill-amber-200" />
      {/* neck */}
      <rect x="86" y="118" width="28" height="30" className="fill-amber-200" />
      {/* head */}
      <ellipse cx="100" cy="95" rx="42" ry="46" className="fill-amber-200" />
      {/* hair */}
      <path
        d="M58 92 C54 55 72 30 100 30 C128 30 146 55 142 92 C138 78 128 68 128 68 C120 80 108 66 100 66 C92 66 80 80 72 68 C72 68 62 78 58 92 Z"
        className="fill-amber-900"
      />
      {/* beard */}
      <path
        d="M62 92 C60 118 74 138 100 138 C126 138 140 118 138 92 C132 108 120 118 100 118 C80 118 68 108 62 92 Z"
        className="fill-amber-800"
        opacity="0.85"
      />
      {/* glasses */}
      <g className="stroke-gray-800" strokeWidth="3" fill="none">
        <rect x="66" y="88" width="30" height="22" rx="6" />
        <rect x="104" y="88" width="30" height="22" rx="6" />
        <line x1="96" y1="98" x2="104" y2="98" />
        <line x1="66" y1="94" x2="54" y2="90" />
        <line x1="134" y1="94" x2="146" y2="90" />
      </g>
      {/* mouth */}
      <path d="M92 118 Q100 124 108 118" className="stroke-amber-900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
