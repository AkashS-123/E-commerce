export default function LoginIllustration() {
  return (
    <svg
      viewBox="0 0 420 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md"
      role="img"
      aria-label="Illustration of secure login with a locked phone, a shield, and two people"
    >
      {/* phone */}
      <rect x="150" y="55" width="130" height="270" rx="18" className="fill-brand-900 dark:fill-brand-700" />
      <rect x="162" y="72" width="106" height="236" rx="4" className="fill-white dark:fill-gray-900" />

      {/* credit card */}
      <g>
        <rect x="30" y="255" width="150" height="80" rx="10" className="fill-cyan-400" />
        <rect x="30" y="278" width="150" height="14" className="fill-cyan-900" />
        <text x="45" y="322" fontFamily="monospace" fontSize="13" className="fill-cyan-900" fontWeight="700">
          XXXX - XXXX - XXXX
        </text>
      </g>

      {/* plants */}
      <circle cx="200" cy="300" r="14" className="fill-emerald-600" />
      <circle cx="222" cy="292" r="16" className="fill-emerald-500" />
      <rect x="192" y="300" width="16" height="18" rx="2" className="fill-stone-500" />
      <rect x="214" y="292" width="16" height="26" rx="2" className="fill-stone-500" />

      {/* shield */}
      <path
        d="M258 190 L288 178 L318 190 V220 C318 245 302 262 288 268 C274 262 258 245 258 220 Z"
        className="fill-white stroke-cyan-400 dark:fill-gray-800"
        strokeWidth="4"
      />
      <path
        d="M275 220 L284 230 L302 208"
        stroke="currentColor"
        className="text-cyan-500"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* lock badge */}
      <circle cx="180" cy="90" r="26" className="fill-indigo-600" />
      <rect x="169" y="86" width="22" height="17" rx="3" fill="white" />
      <path d="M172 86 v-6 a8 8 0 0 1 16 0 v6" stroke="white" strokeWidth="4" fill="none" />

      {/* gears */}
      <circle cx="230" cy="65" r="12" className="fill-slate-400" />
      <circle cx="252" cy="80" r="9" className="fill-slate-300" />

      {/* dollar bubble */}
      <rect x="55" y="105" width="52" height="38" rx="10" className="fill-emerald-500" />
      <path d="M55 143 l14 14 v-14 z" className="fill-emerald-500" />
      <text x="72" y="130" fontSize="20" fontWeight="700" fill="white" textAnchor="middle">
        $
      </text>

      {/* rating bubble */}
      <rect x="300" y="130" width="60" height="40" rx="10" className="fill-amber-400" />
      <path d="M300 170 l-13 13 v-13 z" className="fill-amber-400" />
      <text x="330" y="155" fontSize="15" textAnchor="middle">
        ★★★
      </text>

      {/* person left, seated on card */}
      <g>
        <circle cx="95" cy="220" r="17" className="fill-amber-200" />
        <path
          d="M65 300 C65 265 82 245 95 245 C108 245 125 265 125 300"
          className="fill-amber-400"
        />
        <rect x="72" y="240" width="46" height="18" rx="9" className="fill-amber-500" />
      </g>

      {/* person right, standing */}
      <g>
        <circle cx="335" cy="230" r="16" className="fill-amber-200" />
        <path
          d="M308 340 C308 275 320 258 335 258 C350 258 362 275 362 340"
          className="fill-sky-500"
        />
        <rect x="316" y="252" width="38" height="16" rx="8" className="fill-sky-600" />
      </g>
    </svg>
  );
}
