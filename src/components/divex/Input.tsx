"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";

type Tone = "light" | "deep";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "ref"> {
  label?: string;
  icon?: LucideIcon;
  suffix?: string;
  hint?: string;
  error?: string;
  tone?: Tone;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, icon: Icon, suffix, hint, error, tone = "light", id, style, ...rest },
  ref
) {
  const [focused, setFocused] = React.useState(false);
  const deep = tone === "deep";
  const inputId = id || (label ? "in-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);

  const fieldBg = deep ? "rgba(255,255,255,0.05)" : "var(--surface-card)";
  const textColor = deep ? "var(--text-on-deep)" : "var(--text-strong)";
  const borderColor = error
    ? "var(--danger)"
    : focused
      ? "var(--focus-ring)"
      : deep
        ? "var(--hairline-dark)"
        : "var(--hairline)";

  return (
    <label
      htmlFor={inputId}
      style={{ display: "flex", flexDirection: "column", gap: 7, ...style }}
    >
      {label ? (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.02em",
            color: deep ? "var(--ink-200)" : "var(--text-body)",
          }}
        >
          {label}
        </span>
      ) : null}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "0 16px",
          minHeight: 52,
          background: fieldBg,
          borderRadius: "var(--radius-md)",
          border: `1.5px solid ${borderColor}`,
          boxShadow: focused
            ? `0 0 0 4px ${error ? "rgba(240,71,62,0.18)" : "rgba(32,197,198,0.18)"}`
            : deep
              ? "none"
              : "var(--shadow-xs)",
          transition:
            "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        }}
      >
        {Icon ? (
          <Icon size={18} strokeWidth={2} color="var(--text-muted)" style={{ flex: "0 0 auto" }} />
        ) : null}
        <input
          ref={ref}
          id={inputId}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            minWidth: 0,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-body)",
            fontSize: 16,
            fontWeight: 500,
            color: textColor,
          }}
          {...rest}
        />
        {suffix ? (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              color: "var(--text-muted)",
              flex: "0 0 auto",
            }}
          >
            {suffix}
          </span>
        ) : null}
      </div>

      {error || hint ? (
        <span
          style={{
            fontSize: 13,
            fontFamily: "var(--font-body)",
            color: error ? "var(--danger)" : deep ? "var(--ink-300)" : "var(--text-muted)",
          }}
        >
          {error || hint}
        </span>
      ) : null}
    </label>
  );
});
