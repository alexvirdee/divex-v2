"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "glass";
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { padding: string; fontSize: number; height: number; gap: number; icon: number }> = {
  sm: { padding: "8px 16px", fontSize: 14, height: 38, gap: 7, icon: 16 },
  md: { padding: "12px 22px", fontSize: 15, height: 48, gap: 9, icon: 18 },
  lg: { padding: "16px 30px", fontSize: 17, height: 58, gap: 10, icon: 20 },
};

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  trailingIcon?: LucideIcon;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    icon: Icon,
    trailingIcon: Trailing,
    fullWidth = false,
    disabled = false,
    type = "button",
    style,
    ...rest
  },
  ref
) {
  const s = SIZES[size];

  const variants: Record<Variant, React.CSSProperties> = {
    primary: {
      background: "var(--grad-sunrise)",
      color: "var(--brand-on)",
      boxShadow: "var(--shadow-brand)",
      border: "none",
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--blue-600)",
      boxShadow: "var(--shadow-sm)",
      border: "1.5px solid var(--hairline)",
    },
    ghost: {
      background: "transparent",
      color: "var(--brand)",
      border: "none",
    },
    glass: {
      background: "var(--glass-dark-bg)",
      color: "var(--text-on-deep)",
      border: "1px solid var(--glass-border)",
      backdropFilter: "blur(var(--glass-blur))",
      WebkitBackdropFilter: "blur(var(--glass-blur))",
    },
  };

  const base: React.CSSProperties = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: s.fontSize,
    letterSpacing: "-0.01em",
    lineHeight: 1,
    padding: s.padding,
    minHeight: s.height,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out)",
    WebkitTapHighlightColor: "transparent",
    ...variants[variant],
    ...style,
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      style={base}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
      }}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseEnter={(e) => {
        if (!disabled && variant === "primary") e.currentTarget.style.filter = "brightness(1.05)";
      }}
      {...rest}
    >
      {Icon ? <Icon size={s.icon} strokeWidth={2.2} /> : null}
      {children ? <span>{children}</span> : null}
      {Trailing ? <Trailing size={s.icon} strokeWidth={2.2} /> : null}
    </button>
  );
});
