"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";

type Tone =
  | "brand"
  | "aqua"
  | "blue"
  | "success"
  | "warning"
  | "danger"
  | "neutral"
  | "solid"
  | "onDeep";

const TONES: Record<Tone, { bg: string; fg: string }> = {
  brand: { bg: "var(--brand-soft)", fg: "var(--orange-700)" },
  aqua: { bg: "var(--aqua-100)", fg: "var(--aqua-700)" },
  blue: { bg: "var(--blue-50)", fg: "var(--blue-600)" },
  success: { bg: "rgba(31,185,122,0.14)", fg: "#0E8a59" },
  warning: { bg: "rgba(245,166,35,0.16)", fg: "#9a6500" },
  danger: { bg: "rgba(240,71,62,0.14)", fg: "#c5281f" },
  neutral: { bg: "var(--surface-sunken)", fg: "var(--text-body)" },
  solid: { bg: "var(--brand)", fg: "#fff" },
  onDeep: { bg: "rgba(255,255,255,0.10)", fg: "var(--ink-100)" },
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  icon?: LucideIcon;
  dot?: boolean;
}

export function Badge({ tone = "brand", icon: Icon, dot = false, style, children, ...rest }: BadgeProps) {
  const t = TONES[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 11px",
        borderRadius: "var(--radius-pill)",
        background: t.bg,
        color: t.fg,
        fontFamily: "var(--font-display)",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.01em",
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {dot ? <span style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor" }} /> : null}
      {Icon ? <Icon size={13} strokeWidth={2.4} /> : null}
      {children}
    </span>
  );
}
