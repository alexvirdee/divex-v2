"use client";

import * as React from "react";
import {
  Anchor,
  Award,
  BatteryCharging,
  Flame,
  Gauge,
  Glasses,
  LucideIcon,
  MapPin,
  Moon,
  Settings,
  Shirt,
} from "lucide-react";
import { Avatar } from "@/components/divex/Avatar";
import { IconButton } from "@/components/divex/IconButton";
import { Badge } from "@/components/divex/Badge";
import { StatTile } from "@/components/divex/StatTile";
import { MiniDepthChart } from "@/components/divex/MiniDepthChart";
import { AchievementBadge } from "@/components/divex/AchievementBadge";

function SectionLabel({ children, action }: { children: React.ReactNode; action?: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "24px 0 12px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 18,
          color: "#fff",
        }}
      >
        {children}
      </span>
      {action ? (
        <span style={{ color: "var(--orange-500)", fontSize: 14, fontWeight: 600 }}>{action}</span>
      ) : null}
    </div>
  );
}

type GearTone = "success" | "warning";
const GEAR: { icon: LucideIcon; name: string; meta: string; tone: GearTone; status: string }[] = [
  { icon: Shirt, name: "Bare 5mm Wetsuit", meta: "42 dives", tone: "success", status: "Good" },
  { icon: Gauge, name: "Scubapro MK25", meta: "Service due", tone: "warning", status: "2 left" },
  { icon: Glasses, name: "Mask · Cressi Z1", meta: "127 dives", tone: "success", status: "Good" },
  { icon: BatteryCharging, name: "Shearwater Peregrine", meta: "Battery 80%", tone: "success", status: "Good" },
];

export function Profile() {
  return (
    <div className="dvx-scroll" style={{ flex: 1, overflowY: "auto", padding: "0 0 130px" }}>
      <div
        style={{
          position: "relative",
          padding: "24px 18px 18px",
          background: "var(--grad-descent)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--glow-brand)",
            opacity: 0.6,
          }}
        />
        <div style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}>
          <IconButton icon={Settings} variant="glass" aria-label="Settings" />
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            marginTop: -8,
          }}
        >
          <Avatar name="Maya Okafor" size="xl" ring />
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 22,
              color: "#fff",
            }}
          >
            Maya Okafor
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Badge tone="brand" icon={Award}>
              Divemaster
            </Badge>
            <Badge tone="onDeep" icon={MapPin}>
              Bali, ID
            </Badge>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 18px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 10,
            marginTop: 18,
          }}
        >
          <StatTile label="Dives" value="127" accent="orange" />
          <StatTile label="Hours" value="94" accent="aqua" />
          <StatTile label="Max" value="38m" accent="white" />
        </div>

        <SectionLabel action="2026">Depth by month</SectionLabel>
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            background: "var(--surface-card-dark)",
            border: "1px solid var(--hairline-dark)",
            boxShadow: "var(--shadow-deep)",
            padding: 16,
          }}
        >
          <MiniDepthChart
            points={[12, 18, 22, 16, 28, 31, 24, 30, 38, 26, 33, 29]}
            height={120}
            accent="orange"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 8,
              color: "var(--ink-400)",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
            }}
          >
            <span>JAN</span>
            <span>APR</span>
            <span>JUL</span>
            <span>OCT</span>
            <span>DEC</span>
          </div>
        </div>

        <SectionLabel action="View all">Achievements</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            justifyItems: "center",
          }}
        >
          <AchievementBadge icon={Gauge} title="30m" caption="Club" size="sm" />
          <AchievementBadge icon={Flame} title="Streak" caption="6 wks" accent="aqua" size="sm" />
          <AchievementBadge icon={Anchor} title="Wreck" caption="First" size="sm" />
          <AchievementBadge icon={Moon} title="Night" earned={false} size="sm" />
        </div>

        <SectionLabel action="Manage">My gear</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {GEAR.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  borderRadius: "var(--radius-md)",
                  background: "var(--surface-card-dark)",
                  border: "1px solid var(--hairline-dark)",
                  padding: 12,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    flex: "0 0 auto",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.06)",
                    color: "var(--aqua-400)",
                  }}
                >
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: 14,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {g.name}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--ink-400)" }}>{g.meta}</div>
                </div>
                <Badge tone={g.tone}>{g.status}</Badge>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
