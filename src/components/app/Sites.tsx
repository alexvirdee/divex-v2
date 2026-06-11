"use client";

import * as React from "react";
import Image from "next/image";
import { Gauge, Map, Navigation, Search } from "lucide-react";
import { Input } from "@/components/divex/Input";
import { Tag } from "@/components/divex/Tag";
import { Card } from "@/components/divex/Card";
import { Badge } from "@/components/divex/Badge";
import { siteImage } from "@/lib/imagery";
import { SITES } from "./data";

export function Sites() {
  const [q, setQ] = React.useState("");
  const FILTERS = ["Near me", "Reef", "Wreck", "Wall", "Drift"];
  return (
    <div className="dvx-scroll" style={{ flex: 1, overflowY: "auto", padding: "0 18px 130px" }}>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 28,
          color: "#fff",
          paddingTop: 10,
        }}
      >
        Dive sites
      </h1>
      <div style={{ margin: "14px 0 6px" }}>
        <Input
          tone="deep"
          icon={Search}
          placeholder="Search reefs, wrecks, walls…"
          aria-label="Search sites"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div
        className="dvx-rail"
        style={{
          display: "flex",
          gap: 8,
          margin: "10px 0",
          overflowX: "auto",
          paddingBottom: 4,
        }}
      >
        {FILTERS.map((t, i) => (
          <Tag
            key={t}
            tone="onDeep"
            selected={i === 0}
            icon={i === 0 ? Navigation : undefined}
          >
            {t}
          </Tag>
        ))}
      </div>
      <div
        style={{
          position: "relative",
          height: 120,
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          background: "var(--grad-descent)",
          border: "1px solid var(--hairline-dark)",
          marginBottom: 12,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(32,197,198,0.18) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {[
          [40, 40],
          [120, 70],
          [210, 45],
          [280, 85],
          [180, 95],
        ].map((p, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: p[0],
              top: p[1],
              width: 12,
              height: 12,
              borderRadius: 999,
              background: i === 0 ? "var(--orange-500)" : "var(--aqua-400)",
              boxShadow: "0 0 0 4px rgba(32,197,198,0.18)",
            }}
          />
        ))}
        <Badge tone="onDeep" icon={Map} style={{ position: "absolute", bottom: 10, left: 10 }}>
          34 sites nearby
        </Badge>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {SITES.filter((s) => s.name.toLowerCase().includes(q.toLowerCase())).map((s) => (
          <Card
            key={s.name}
            tone="deep"
            pad="sm"
            interactive
            style={{ display: "flex", gap: 12, alignItems: "center" }}
          >
            <div
              style={{
                position: "relative",
                width: 60,
                height: 60,
                borderRadius: "var(--radius-md)",
                flex: "0 0 auto",
                overflow: "hidden",
                background: "var(--grad-reef)",
              }}
            >
              <Image
                src={siteImage(s)}
                alt={s.name}
                fill
                sizes="60px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                {s.name}
              </div>
              <div style={{ fontSize: 13, color: "var(--ink-300)" }}>{s.region}</div>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <Badge tone="aqua">{s.tag}</Badge>
                <Badge tone="onDeep" icon={Gauge}>
                  {s.depth}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
