"use client";

import { Gauge, MapPin, Timer, Waves } from "lucide-react";
import { Section, Eyebrow } from "@/components/divex/Section";
import { Card } from "@/components/divex/Card";
import { StatTile } from "@/components/divex/StatTile";

export function Stats() {
  const items = [
    { label: "Dives logged", value: "1.4M", accent: "orange" as const, icon: Waves },
    { label: "Dive sites mapped", value: "12k", accent: "aqua" as const, icon: MapPin },
    { label: "Deepest logged", value: "112", unit: "m", accent: "white" as const, icon: Gauge },
    { label: "Avg. log time", value: "38", unit: "sec", accent: "orange" as const, icon: Timer },
  ];
  return (
    <Section>
      <Card tone="gradient" radius="2xl" pad="lg" style={{ overflow: "hidden", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--glow-brand)",
            opacity: 0.8,
          }}
        />
        <div style={{ position: "relative" }}>
          <Eyebrow color="var(--aqua-400)">The numbers surface</Eyebrow>
          <h2
            style={{
              fontSize: "var(--text-3xl)",
              color: "#fff",
              maxWidth: 560,
              marginBottom: 36,
            }}
          >
            Your diving, finally measured.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
            }}
          >
            {items.map((s) => (
              <StatTile key={s.label} {...s} />
            ))}
          </div>
        </div>
      </Card>
    </Section>
  );
}
