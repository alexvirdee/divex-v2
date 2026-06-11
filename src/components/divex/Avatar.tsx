"use client";

import * as React from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
const SIZES: Record<Size, number> = { xs: 28, sm: 36, md: 44, lg: 56, xl: 80 };

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  name?: string;
  size?: Size;
  ring?: boolean;
  status?: "online" | "offline";
}

export function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  status,
  style,
  ...rest
}: AvatarProps) {
  const d = SIZES[size];
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span
      style={{ position: "relative", display: "inline-flex", flex: "0 0 auto", ...style }}
      {...rest}
    >
      <span
        style={{
          width: d,
          height: d,
          borderRadius: "var(--radius-pill)",
          overflow: "hidden",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--grad-reef)",
          color: "#fff",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: d * 0.38,
          boxShadow: ring ? "0 0 0 2.5px var(--bg-deep), 0 0 0 5px var(--brand)" : "none",
        }}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          initials || "?"
        )}
      </span>
      {status ? (
        <span
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: Math.max(8, d * 0.26),
            height: Math.max(8, d * 0.26),
            borderRadius: 999,
            background: status === "online" ? "var(--success)" : "var(--ink-400)",
            border: "2px solid var(--bg-deep)",
          }}
        />
      ) : null}
    </span>
  );
}
