"use client";

import * as React from "react";
import { Lock, LucideIcon, Medal } from "lucide-react";

type Accent = "orange" | "aqua";
type Size = "sm" | "md" | "lg";

const DIMS: Record<Size, number> = { sm: 56, md: 72, lg: 96 };

export interface AchievementBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  title?: string;
  caption?: string;
  earned?: boolean;
  accent?: Accent;
  size?: Size;
}

export function AchievementBadge({
  icon: Icon = Medal,
  title,
  caption,
  earned = true,
  accent = "orange",
  size = "md",
  style,
  ...rest
}: AchievementBadgeProps) {
  const d = DIMS[size];
  const grad = accent === "aqua" ? "var(--grad-reef)" : "var(--grad-sunrise)";
  const glow = accent === "aqua" ? "var(--shadow-aqua)" : "var(--shadow-brand)";

  const DisplayIcon = earned ? Icon : Lock;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        textAlign: "center",
        width: d + 28,
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: d,
          height: d,
          borderRadius: "28%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: earned ? grad : "var(--surface-card-dark)",
          border: earned ? "none" : "1.5px dashed var(--hairline-dark)",
          boxShadow: earned ? glow : "none",
          color: earned ? "#fff" : "var(--ink-500)",
          opacity: earned ? 1 : 0.6,
          position: "relative",
          transition: "transform var(--dur-base) var(--ease-spring)",
        }}
      >
        <DisplayIcon size={d * 0.42} strokeWidth={2} />
      </div>
      {title ? (
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 13,
            color: earned ? "var(--text-on-deep)" : "var(--ink-400)",
            lineHeight: 1.15,
          }}
        >
          {title}
        </div>
      ) : null}
      {caption ? (
        <div
          style={{
            fontSize: 11,
            color: "var(--ink-400)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.2,
          }}
        >
          {caption}
        </div>
      ) : null}
    </div>
  );
}
