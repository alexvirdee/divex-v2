"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { IconButton } from "@/components/divex/IconButton";
import { Tag } from "@/components/divex/Tag";
import { DiveLogCard } from "@/components/divex/DiveLogCard";
import { DIVES, type Dive } from "./data";

const FILTERS = ["All", "Reef", "Wreck", "Drift"];

export function Logbook({ onOpenDive }: { onOpenDive: (d: Dive) => void }) {
  const [filter, setFilter] = React.useState("All");
  const shown = DIVES.filter((d) => filter === "All" || d.conditions === filter);
  const months = Array.from(new Set(shown.map((d) => d.month)));
  return (
    <div className="dvx-scroll" style={{ flex: 1, overflowY: "auto", padding: "0 18px 130px" }}>
      <div
        style={{
          paddingTop: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 28,
            color: "#fff",
          }}
        >
          Logbook
        </h1>
        <IconButton icon={Search} variant="glass" aria-label="Search" />
      </div>
      <div
        className="dvx-rail"
        style={{
          display: "flex",
          gap: 8,
          marginTop: 14,
          overflowX: "auto",
          paddingBottom: 4,
        }}
      >
        {FILTERS.map((f) => (
          <Tag key={f} tone="onDeep" selected={filter === f} onClick={() => setFilter(f)}>
            {f}
          </Tag>
        ))}
      </div>
      {months.map((m) => (
        <div key={m}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 18,
              color: "#fff",
              margin: "24px 0 12px",
            }}
          >
            {m}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {shown
              .filter((d) => d.month === m)
              .map((d) => (
                <DiveLogCard key={d.number} {...d} onClick={() => onOpenDive(d)} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
