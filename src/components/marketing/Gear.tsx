"use client";

import {
  BatteryCharging,
  Gauge,
  Glasses,
  LucideIcon,
  Plus,
  Shirt,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/divex/Section";
import { Button } from "@/components/divex/Button";
import { Card } from "@/components/divex/Card";
import { Badge } from "@/components/divex/Badge";

type Tone = "success" | "warning";
const GEAR: { icon: LucideIcon; name: string; meta: string; status: string; tone: Tone }[] = [
  { icon: Shirt, name: "Bare 5mm Wetsuit", meta: "42 dives", status: "Good", tone: "success" },
  { icon: Gauge, name: "Scubapro MK25 Reg", meta: "Service due", status: "2 dives left", tone: "warning" },
  { icon: Glasses, name: "Mask · Cressi Z1", meta: "127 dives", status: "Good", tone: "success" },
  { icon: BatteryCharging, name: "Shearwater Peregrine", meta: "Battery 80%", status: "Good", tone: "success" },
];

export function Gear() {
  return (
    <Section id="gear">
      <div
        className="flex flex-col-reverse lg:flex-row-reverse"
        style={{ gap: 48, alignItems: "center" }}
      >
        <div style={{ flex: 1, minWidth: 280 }}>
          <Eyebrow>Gear tracking</Eyebrow>
          <h2
            style={{
              fontSize: "var(--text-3xl)",
              color: "#fff",
              marginBottom: 18,
            }}
          >
            Know your kit. Dive it longer.
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
            Every item logs its own dive count. Get nudged before a service is due,
            so your gear is always ready for the boat.
          </p>
          <Button variant="secondary" icon={Plus}>
            Add gear
          </Button>
        </div>
        <Card
          tone="deep"
          pad="md"
          radius="xl"
          style={{
            flex: 1,
            minWidth: 280,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",
          }}
        >
          {GEAR.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "8px 4px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    flex: "0 0 auto",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.06)",
                    color: "var(--aqua-400)",
                  }}
                >
                  <Icon size={20} strokeWidth={2} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#fff",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {g.name}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-400)" }}>{g.meta}</div>
                </div>
                <Badge tone={g.tone}>{g.status}</Badge>
              </div>
            );
          })}
        </Card>
      </div>
    </Section>
  );
}
