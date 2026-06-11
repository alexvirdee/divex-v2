"use client";

import * as React from "react";

type Tone = "light" | "deep" | "glass" | "gradient";
type Pad = "none" | "sm" | "md" | "lg";
type Radius = "md" | "lg" | "xl" | "2xl";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: Tone;
  pad?: Pad;
  radius?: Radius;
  interactive?: boolean;
}

const PADS: Record<Pad, number> = { none: 0, sm: 16, md: 22, lg: 28 };
const RADII: Record<Radius, string> = {
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { tone = "light", pad = "md", radius = "lg", interactive = false, style, children, ...rest },
  ref
) {
  const tones: Record<Tone, React.CSSProperties> = {
    light: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-float)",
      border: "none",
    },
    deep: {
      background: "var(--surface-card-dark)",
      color: "var(--text-on-deep)",
      boxShadow: "var(--shadow-deep)",
      border: "1px solid var(--hairline-dark)",
    },
    glass: {
      background: "var(--glass-dark-bg)",
      color: "var(--text-on-deep)",
      border: "1px solid var(--glass-border)",
      backdropFilter: "blur(var(--glass-blur))",
      WebkitBackdropFilter: "blur(var(--glass-blur))",
    },
    gradient: {
      background: "var(--grad-descent)",
      color: "var(--text-on-deep)",
      boxShadow: "var(--shadow-deep)",
      border: "none",
    },
  };

  const base: React.CSSProperties = {
    borderRadius: RADII[radius],
    padding: PADS[pad],
    transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    cursor: interactive ? "pointer" : "default",
    ...tones[tone],
    ...style,
  };

  return (
    <div
      ref={ref}
      style={base}
      onMouseEnter={
        interactive
          ? (e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "var(--shadow-lg)";
            }
          : undefined
      }
      onMouseLeave={
        interactive
          ? (e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = tones[tone].boxShadow as string;
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </div>
  );
});
