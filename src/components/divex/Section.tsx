"use client";

import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  contained?: boolean;
}

export function Section({ contained = true, children, style, ...rest }: SectionProps) {
  return (
    <section
      style={{
        padding: "var(--section-y) var(--gutter)",
        position: "relative",
        ...style,
      }}
      {...rest}
    >
      {contained ? (
        <div
          style={{
            maxWidth: "var(--content-max)",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

export function Eyebrow({
  children,
  color = "var(--orange-500)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color,
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}
