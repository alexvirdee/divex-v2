"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";

type Variant = "soft" | "solid" | "ghost" | "glass" | "outline";
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, number> = { sm: 36, md: 44, lg: 52 };
const ICON_SIZES: Record<Size, number> = { sm: 18, md: 20, lg: 24 };

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
  icon: LucideIcon;
  variant?: Variant;
  size?: Size;
  "aria-label": string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon: Icon, variant = "soft", size = "md", disabled = false, style, ...rest },
  ref
) {
  const d = SIZES[size];

  const variants: Record<Variant, React.CSSProperties> = {
    soft: { background: "var(--surface-sunken)", color: "var(--blue-600)", border: "none" },
    solid: {
      background: "var(--grad-sunrise)",
      color: "#fff",
      border: "none",
      boxShadow: "var(--shadow-brand)",
    },
    ghost: { background: "transparent", color: "var(--text-body)", border: "none" },
    glass: {
      background: "var(--glass-dark-bg)",
      color: "#fff",
      border: "1px solid var(--glass-border)",
      backdropFilter: "blur(var(--glass-blur))",
      WebkitBackdropFilter: "blur(var(--glass-blur))",
    },
    outline: {
      background: "transparent",
      color: "var(--blue-600)",
      border: "1.5px solid var(--hairline)",
    },
  };

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: d,
    height: d,
    borderRadius: "var(--radius-pill)",
    flex: "0 0 auto",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out)",
    WebkitTapHighlightColor: "transparent",
    ...variants[variant],
    ...style,
  };

  return (
    <button
      ref={ref}
      disabled={disabled}
      style={base}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "scale(0.92)";
      }}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      {...rest}
    >
      <Icon size={ICON_SIZES[size]} strokeWidth={2} />
    </button>
  );
});
