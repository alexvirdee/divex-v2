"use client";

import * as React from "react";
import { LucideIcon, X } from "lucide-react";

type Tone = "default" | "onDeep";

const PALETTES: Record<Tone, { bg: string; fg: string; selBg: string; selFg: string }> = {
  default: {
    bg: "var(--surface-sunken)",
    fg: "var(--text-body)",
    selBg: "var(--blue-600)",
    selFg: "#fff",
  },
  onDeep: {
    bg: "rgba(255,255,255,0.07)",
    fg: "var(--ink-200)",
    selBg: "var(--brand)",
    selFg: "#fff",
  },
};

export interface TagProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
  icon?: LucideIcon;
  selected?: boolean;
  onRemove?: (e: React.MouseEvent) => void;
  tone?: Tone;
}

export function Tag({
  icon: Icon,
  selected = false,
  onRemove,
  tone = "default",
  children,
  style,
  ...rest
}: TagProps) {
  const p = PALETTES[tone];
  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "8px 14px",
        borderRadius: "var(--radius-pill)",
        border: "none",
        cursor: "pointer",
        background: selected ? p.selBg : p.bg,
        color: selected ? p.selFg : p.fg,
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1,
        transition:
          "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
        WebkitTapHighlightColor: "transparent",
        ...style,
      }}
      {...rest}
    >
      {Icon ? <Icon size={15} strokeWidth={2.2} /> : null}
      {children}
      {onRemove ? (
        <X
          size={14}
          strokeWidth={2.4}
          onClick={(e) => {
            e.stopPropagation();
            onRemove(e);
          }}
          style={{ marginLeft: 2, opacity: 0.7 }}
        />
      ) : null}
    </button>
  );
}
