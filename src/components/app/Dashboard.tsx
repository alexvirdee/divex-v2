"use client";

import * as React from "react";
import {
  Anchor,
  Bell,
  Camera,
  Flame,
  Gauge,
  MapPin,
  Moon,
  Timer,
  Waves,
} from "lucide-react";
import { Avatar } from "@/components/divex/Avatar";
import { IconButton } from "@/components/divex/IconButton";
import { Badge } from "@/components/divex/Badge";
import { StatTile } from "@/components/divex/StatTile";
import { DiveLogCard } from "@/components/divex/DiveLogCard";
import { AchievementBadge } from "@/components/divex/AchievementBadge";
import { DIVES, type Dive } from "./data";

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

export function Dashboard({ onOpenDive }: { onOpenDive: (d: Dive) => void }) {
  return (
    <div className="dvx-scroll" style={{ flex: 1, overflowY: "auto", padding: "0 18px 130px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Avatar name="Maya Okafor" ring />
          <div>
            <div style={{ fontSize: 13, color: "var(--ink-300)" }}>Welcome back</div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 19,
                color: "#fff",
              }}
            >
              Maya
            </div>
          </div>
        </div>
        <IconButton icon={Bell} variant="glass" aria-label="Notifications" />
      </div>

      <div style={{ marginTop: 18 }}>
        <Badge tone="brand" icon={Flame}>
          6-week dive streak
        </Badge>
      </div>

      <SectionLabel>This season</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <StatTile label="Total dives" value="127" icon={Waves} trend="+8 this month" />
        <StatTile label="Max depth" value="38.2" unit="m" accent="aqua" icon={Gauge} />
        <StatTile label="Bottom time" value="94" unit="hrs" accent="white" icon={Timer} />
        <StatTile label="Sites" value="34" icon={MapPin} trend="2 new" />
      </div>

      <SectionLabel action="See all">Recent dives</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {DIVES.slice(0, 2).map((d) => (
          <DiveLogCard key={d.number} {...d} onClick={() => onOpenDive(d)} />
        ))}
      </div>

      <SectionLabel action="View all">Next milestones</SectionLabel>
      <div
        className="dvx-rail"
        style={{
          display: "flex",
          gap: 16,
          overflowX: "auto",
          paddingBottom: 4,
        }}
      >
        <AchievementBadge icon={Gauge} title="40m Club" caption="1.8m to go" accent="aqua" />
        <AchievementBadge icon={Anchor} title="First wreck" earned={true} />
        <AchievementBadge icon={Moon} title="Night diver" earned={false} />
        <AchievementBadge icon={Camera} title="100 photos" earned={false} />
      </div>
    </div>
  );
}
