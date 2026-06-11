"use client";

import Image from "next/image";
import { ChevronRight, Compass, Gauge, Waves } from "lucide-react";
import { Section, Eyebrow } from "@/components/divex/Section";
import { Button } from "@/components/divex/Button";
import { Tag } from "@/components/divex/Tag";
import { Card } from "@/components/divex/Card";
import { Badge } from "@/components/divex/Badge";
import { siteImage } from "@/lib/imagery";

const SITES = [
  { name: "Manta Point", region: "Nusa Penida, Bali", depth: "5–28m", tag: "Drift" },
  { name: "USAT Liberty", region: "Tulamben, Bali", depth: "5–30m", tag: "Wreck" },
  { name: "Crystal Bay", region: "Nusa Penida, Bali", depth: "8–40m", tag: "Reef" },
];

export function Sites() {
  return (
    <Section id="sites">
      <div
        className="flex flex-col lg:flex-row"
        style={{ gap: 48, alignItems: "center" }}
      >
        <div style={{ flex: 1, minWidth: 280 }}>
          <Eyebrow>Dive site discovery</Eyebrow>
          <h2
            style={{
              fontSize: "var(--text-3xl)",
              color: "#fff",
              marginBottom: 18,
            }}
          >
            Find your next descent.
          </h2>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--ink-200)",
              lineHeight: 1.6,
              marginBottom: 28,
              maxWidth: 460,
            }}
          >
            Browse a living map of reefs, wrecks and walls — with real conditions,
            depth ranges and photos from divers who&apos;ve been down there.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
            {["Reef", "Wreck", "Wall", "Drift", "Cave", "Night"].map((t, i) => (
              <Tag key={t} tone="onDeep" selected={i === 0} icon={i === 0 ? Waves : undefined}>
                {t}
              </Tag>
            ))}
          </div>
          <Button variant="secondary" icon={Compass}>
            Explore sites near me
          </Button>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 280,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: "100%",
          }}
        >
          {SITES.map((s) => (
            <Card
              key={s.name}
              tone="deep"
              pad="sm"
              interactive
              style={{ display: "flex", alignItems: "center", gap: 14 }}
            >
              <div
                style={{
                  position: "relative",
                  width: 64,
                  height: 64,
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
                  sizes="64px"
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
              <ChevronRight size={20} color="var(--ink-400)" />
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
