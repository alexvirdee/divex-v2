"use client";

import * as React from "react";
import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";

type Tone = "deep" | "light";
type Accent = "orange" | "aqua" | "white";
type TrendDir = "up" | "down" | "flat";

export interface StatTileProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "ref"> {
  value: string | number;
  unit?: string;
  label: string;
  icon?: LucideIcon;
  trend?: string;
  trendDir?: TrendDir;
  tone?: Tone;
  accent?: Accent;
}

export function StatTile({
  value,
  unit,
  label,
  icon: Icon,
  trend,
  trendDir = "up",
  tone = "deep",
  accent = "orange",
  style,
  ...rest
}: StatTileProps) {
  const deep = tone === "deep";
  const accents: Record<Accent, string> = {
    orange: "var(--orange-500)",
    aqua: "var(--aqua-400)",
    white: deep ? "#fff" : "var(--text-strong)",
  };
  const valueColor = accents[accent];
  const trendColor =
    trendDir === "down"
      ? "var(--danger)"
      : trendDir === "flat"
        ? "var(--ink-400)"
        : "var(--success)";

  const TrendIcon = trendDir === "down" ? TrendingDown : trendDir === "flat" ? Minus : TrendingUp;

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius-lg)",
        padding: 20,
        background: deep ? "var(--surface-card-dark)" : "var(--surface-card)",
        border: deep ? "1px solid var(--hairline-dark)" : "none",
        boxShadow: deep ? "var(--shadow-deep)" : "var(--shadow-float)",
        ...style,
      }}
      {...rest}
    >
      {accent === "orange" && deep ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--glow-brand)",
            opacity: 0.7,
            pointerEvents: "none",
          }}
        />
      ) : null}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: deep ? "var(--ink-300)" : "var(--text-muted)",
          }}
        >
          {label}
        </span>
        {Icon ? (
          <span
            style={{
              display: "inline-flex",
              width: 32,
              height: 32,
              borderRadius: "var(--radius-pill)",
              alignItems: "center",
              justifyContent: "center",
              background: deep ? "rgba(255,255,255,0.06)" : "var(--surface-sunken)",
              color: valueColor,
            }}
          >
            <Icon size={17} strokeWidth={2.2} />
          </span>
        ) : null}
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "baseline",
          gap: 4,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: 34,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: valueColor,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {value}
        </span>
        {unit ? (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 15,
              color: deep ? "var(--ink-300)" : "var(--text-muted)",
            }}
          >
            {unit}
          </span>
        ) : null}
      </div>
      {trend ? (
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginTop: 10,
            color: trendColor,
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <TrendIcon size={15} strokeWidth={2.4} />
          {trend}
        </div>
      ) : null}
    </div>
  );
}
