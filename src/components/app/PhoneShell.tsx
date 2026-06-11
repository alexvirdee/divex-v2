"use client";

import * as React from "react";

export function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        height: 820,
        borderRadius: 52,
        padding: 14,
        background: "#05101c",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "var(--shadow-xl)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 40,
          overflow: "hidden",
          background: "var(--grad-descent)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 22px 6px",
            color: "#fff",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            fontWeight: 700,
            flex: "0 0 auto",
          }}
        >
          <span>9:41</span>
          <div
            style={{
              width: 92,
              height: 26,
              borderRadius: 999,
              background: "#000",
            }}
          />
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                display: "inline-block",
                width: 18,
                height: 10,
                borderRadius: 2,
                background: "#fff",
              }}
            />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
