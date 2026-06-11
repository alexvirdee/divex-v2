"use client";

import { Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/divex/Section";
import { Button } from "@/components/divex/Button";
import { Badge } from "@/components/divex/Badge";

interface Plan {
  name: string;
  price: string;
  period?: string;
  cta: string;
  highlight: boolean;
  feats: string[];
}

const PLANS: Plan[] = [
  {
    name: "Surface",
    price: "Free",
    cta: "Start free",
    highlight: false,
    feats: ["Unlimited dive logs", "Basic stats", "Site discovery", "1 gear item"],
  },
  {
    name: "Deep",
    price: "$6",
    period: "/mo",
    cta: "Go Deep",
    highlight: true,
    feats: [
      "Everything in Surface",
      "Full dive profiles",
      "Gear service tracking",
      "Achievements & streaks",
      "Trip sharing",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    period: "/mo",
    cta: "Go Pro",
    highlight: false,
    feats: [
      "Everything in Deep",
      "Multi-gas planning",
      "CSV / UDDF export",
      "Priority support",
    ],
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing"
      style={{ background: "var(--bg-light)", borderRadius: "var(--radius-2xl)" }}
    >
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <Eyebrow>Pricing</Eyebrow>
        <h2 style={{ fontSize: "var(--text-3xl)", color: "var(--text-strong)" }}>
          Dive in for free. Go deep when you&apos;re ready.
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 18,
          alignItems: "start",
        }}
      >
        {PLANS.map((p) => (
          <div
            key={p.name}
            style={{
              position: "relative",
              borderRadius: "var(--radius-xl)",
              padding: 28,
              background: p.highlight ? "var(--grad-descent)" : "var(--surface-card)",
              border: p.highlight ? "none" : "1.5px solid var(--hairline)",
              boxShadow: p.highlight ? "var(--shadow-xl)" : "var(--shadow-float)",
              transform: p.highlight ? "translateY(-8px)" : "none",
            }}
          >
            {p.highlight ? (
              <Badge tone="solid" style={{ position: "absolute", top: -12, left: 28 }}>
                Most popular
              </Badge>
            ) : null}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 16,
                color: p.highlight ? "var(--aqua-400)" : "var(--text-muted)",
                marginBottom: 10,
              }}
            >
              {p.name}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 4,
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 44,
                  color: p.highlight ? "#fff" : "var(--text-strong)",
                  letterSpacing: "-0.03em",
                }}
              >
                {p.price}
              </span>
              {p.period ? (
                <span
                  style={{
                    color: p.highlight ? "var(--ink-300)" : "var(--text-muted)",
                    fontSize: 16,
                  }}
                >
                  {p.period}
                </span>
              ) : null}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 26,
              }}
            >
              {p.feats.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: p.highlight ? "var(--ink-200)" : "var(--text-body)",
                    fontSize: 14.5,
                  }}
                >
                  <Check
                    size={17}
                    strokeWidth={2.4}
                    color="var(--orange-500)"
                    style={{ flex: "0 0 auto" }}
                  />
                  {f}
                </div>
              ))}
            </div>
            <Button fullWidth variant={p.highlight ? "primary" : "secondary"}>
              {p.cta}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
