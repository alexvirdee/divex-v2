"use client";

import * as React from "react";
import Image from "next/image";
import {
  ChevronLeft,
  Eye,
  Gauge,
  Heart,
  MapPin,
  Share2,
  Thermometer,
  Timer,
  Waves,
} from "lucide-react";
import { IconButton } from "@/components/divex/IconButton";
import { Badge } from "@/components/divex/Badge";
import { StatTile } from "@/components/divex/StatTile";
import { MiniDepthChart } from "@/components/divex/MiniDepthChart";
import { Avatar } from "@/components/divex/Avatar";
import { Button } from "@/components/divex/Button";
import type { Dive } from "./data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 18,
        color: "#fff",
        margin: "24px 0 12px",
      }}
    >
      {children}
    </div>
  );
}

export function DiveDetail({ dive, onBack }: { dive: Dive; onBack: () => void }) {
  return (
    <div className="dvx-scroll" style={{ flex: 1, overflowY: "auto", paddingBottom: 130 }}>
      <div
        style={{
          position: "relative",
          height: 230,
          background: "var(--grad-reef)",
          overflow: "hidden",
        }}
      >
        <Image
          src={dive.image}
          alt={dive.site}
          fill
          priority
          sizes="(max-width: 400px) 100vw, 400px"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,16,24,0.25) 0%, rgba(8,16,24,0.55) 50%, rgba(8,16,24,0.95) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 16,
            right: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton icon={ChevronLeft} variant="glass" aria-label="Back" onClick={onBack} />
          <div style={{ display: "flex", gap: 8 }}>
            <IconButton icon={Share2} variant="glass" aria-label="Share" />
            <IconButton icon={Heart} variant="glass" aria-label="Like" />
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 16, left: 18, right: 18 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
            <Badge tone="solid">Dive #{dive.number}</Badge>
            <Badge tone="aqua" icon={Waves}>
              {dive.conditions}
            </Badge>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 28,
              color: "#fff",
              lineHeight: 1.05,
            }}
          >
            {dive.site}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              marginTop: 4,
              color: "var(--ink-200)",
              fontSize: 14,
            }}
          >
            <MapPin size={14} />
            {dive.location} · {dive.date}
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 18px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <StatTile label="Max depth" value={dive.depth} unit="m" accent="orange" icon={Gauge} />
          <StatTile label="Bottom time" value={dive.duration} unit="min" accent="aqua" icon={Timer} />
          <StatTile label="Water temp" value={dive.temp} unit="°C" accent="white" icon={Thermometer} />
          <StatTile label="Visibility" value={dive.viz} unit="m" accent="white" icon={Eye} />
        </div>

        <SectionLabel>Dive profile</SectionLabel>
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            background: "var(--surface-card-dark)",
            border: "1px solid var(--hairline-dark)",
            boxShadow: "var(--shadow-deep)",
            padding: 16,
          }}
        >
          <MiniDepthChart points={dive.profile} height={150} />
        </div>

        <SectionLabel>Notes</SectionLabel>
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            background: "var(--surface-card-dark)",
            border: "1px solid var(--hairline-dark)",
            padding: 16,
            color: "var(--ink-200)",
            fontSize: 15,
            lineHeight: 1.6,
          }}
        >
          {dive.notes}
        </div>

        <SectionLabel>Buddy</SectionLabel>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            borderRadius: "var(--radius-lg)",
            background: "var(--surface-card-dark)",
            border: "1px solid var(--hairline-dark)",
            padding: 14,
          }}
        >
          <Avatar name={dive.buddy} status="online" />
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "#fff",
                fontSize: 15,
              }}
            >
              {dive.buddy}
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-400)" }}>Dive buddy</div>
          </div>
          <Button size="sm" variant="secondary">
            View log
          </Button>
        </div>
      </div>
    </div>
  );
}
