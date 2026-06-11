"use client";

import { Anchor, Camera, Flame, Gauge, Thermometer, Timer, Waves } from "lucide-react";
import * as React from "react";
import { Section, Eyebrow } from "@/components/divex/Section";
import { StatTile } from "@/components/divex/StatTile";
import { DiveLogCard } from "@/components/divex/DiveLogCard";
import { MiniDepthChart } from "@/components/divex/MiniDepthChart";
import { AchievementBadge } from "@/components/divex/AchievementBadge";

function Screen({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      style={{
        borderRadius: 38,
        padding: 10,
        background: "#05101c",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "var(--shadow-xl)",
        width: 240,
        flex: "0 0 auto",
      }}
    >
      <div
        style={{
          borderRadius: 28,
          overflow: "hidden",
          background: "var(--grad-descent)",
          padding: 16,
          minHeight: 420,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            color: "#fff",
            fontSize: 18,
          }}
        >
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}

export function Screenshots() {
  return (
    <Section>
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <Eyebrow>See it in action</Eyebrow>
        <h2 style={{ fontSize: "var(--text-3xl)", color: "#fff" }}>
          Beautiful from the surface down.
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          gap: 22,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Screen label="Dashboard">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <StatTile label="Dives" value="127" icon={Waves} />
            <StatTile label="Depth" value="38" unit="m" accent="aqua" icon={Gauge} />
          </div>
          <DiveLogCard
            number={127}
            site="Manta Point"
            location="Nusa Penida"
            depth={28}
            duration={47}
            conditions="Drift"
          />
        </Screen>
        <Screen label="Dive profile">
          <div
            style={{
              borderRadius: 16,
              background: "var(--surface-card-dark)",
              border: "1px solid var(--hairline-dark)",
              padding: 12,
            }}
          >
            <MiniDepthChart points={[0, 8, 18, 26, 30, 30, 24, 14, 6, 0]} height={120} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <StatTile label="Bottom" value="47" unit="min" accent="aqua" icon={Timer} />
            <StatTile label="Temp" value="26" unit="°C" accent="white" icon={Thermometer} />
          </div>
        </Screen>
        <Screen label="Achievements">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              justifyItems: "center",
            }}
          >
            <AchievementBadge icon={Gauge} title="30m Club" size="sm" />
            <AchievementBadge icon={Flame} title="Streak" accent="aqua" size="sm" />
            <AchievementBadge icon={Anchor} title="Wreck" earned={false} size="sm" />
            <AchievementBadge icon={Camera} title="Photos" earned={false} size="sm" />
          </div>
        </Screen>
      </div>
    </Section>
  );
}
