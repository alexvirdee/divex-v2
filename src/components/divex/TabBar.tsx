"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";

export interface TabBarItem {
  id: string;
  label: string;
  icon: LucideIcon;
  prominent?: boolean;
}

export interface TabBarProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  items: TabBarItem[];
  activeId: string;
  onChange?: (id: string) => void;
}

export function TabBar({ items, activeId, onChange, style, ...rest }: TabBarProps) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        padding: 8,
        borderRadius: "var(--radius-pill)",
        background: "var(--glass-dark-bg)",
        border: "1px solid var(--glass-border)",
        backdropFilter: "blur(var(--glass-blur))",
        WebkitBackdropFilter: "blur(var(--glass-blur))",
        boxShadow: "var(--shadow-xl)",
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const active = it.id === activeId;
        const Icon = it.icon;
        if (it.prominent) {
          return (
            <button
              key={it.id}
              aria-label={it.label}
              onClick={() => onChange?.(it.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                borderRadius: "var(--radius-pill)",
                border: "none",
                cursor: "pointer",
                background: "var(--grad-sunrise)",
                color: "#fff",
                boxShadow: "var(--shadow-brand)",
                transition: "transform var(--dur-fast) var(--ease-spring)",
                flex: "0 0 auto",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Icon size={24} strokeWidth={2.2} />
            </button>
          );
        }
        return (
          <button
            key={it.id}
            onClick={() => onChange?.(it.id)}
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              padding: "8px 12px",
              border: "none",
              cursor: "pointer",
              background: "transparent",
              borderRadius: "var(--radius-pill)",
              flex: 1,
              color: active ? "var(--orange-500)" : "var(--ink-300)",
              transition: "color var(--dur-base) var(--ease-out)",
            }}
          >
            <Icon size={22} strokeWidth={active ? 2.4 : 2} />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: "0.01em",
              }}
            >
              {it.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
