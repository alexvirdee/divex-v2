import * as React from "react";

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Divex"
    >
      <defs>
        <linearGradient id="dvxDescent" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14365E" />
          <stop offset="0.5" stopColor="#0A2540" />
          <stop offset="1" stopColor="#081018" />
        </linearGradient>
        <linearGradient id="dvxSpark" x1="30" y1="40" x2="66" y2="78" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8453" />
          <stop offset="1" stopColor="#ED5320" />
        </linearGradient>
      </defs>
      <rect width="96" height="96" rx="26" fill="url(#dvxDescent)" />
      <path
        d="M24 34c4-5 8-5 12 0s8 5 12 0 8-5 12 0 8 5 12 0"
        stroke="#20C5C6"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 48l16 12 16-12"
        stroke="url(#dvxSpark)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 64l11 8 11-8"
        stroke="#FF6B35"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function Wordmark({ light = true, height = 28 }: { light?: boolean; height?: number }) {
  const textColor = light ? "#F8FAFC" : "#081018";
  return (
    <svg
      width={(260 / 72) * height}
      height={height}
      viewBox="0 0 260 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Divex"
    >
      <defs>
        <linearGradient id="wmDescent" x1="36" y1="8" x2="36" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14365E" />
          <stop offset="0.5" stopColor="#0A2540" />
          <stop offset="1" stopColor="#081018" />
        </linearGradient>
        <linearGradient id="wmSpark" x1="20" y1="32" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8453" />
          <stop offset="1" stopColor="#ED5320" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="56" height="56" rx="16" fill="url(#wmDescent)" />
      <path
        d="M22 27c2.3-3 4.7-3 7 0s4.7 3 7 0 4.7-3 7 0 4.7 3 7 0"
        stroke="#20C5C6"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 35l10 7.5 10-7.5"
        stroke="url(#wmSpark)"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.5 45l6.5 5 6.5-5"
        stroke="#FF6B35"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <text
        x="80"
        y="48"
        fontFamily="var(--font-display)"
        fontSize="34"
        fontWeight="700"
        letterSpacing="-1"
        fill={textColor}
      >
        Divex
      </text>
    </svg>
  );
}
