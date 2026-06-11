"use client";

import {
  Backpack,
  Gauge,
  LucideIcon,
  MapPin,
  PenLine,
  TrendingUp,
  Users,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/divex/Section";
import { Card } from "@/components/divex/Card";

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: PenLine,
    title: "Log in seconds",
    body: "Smart defaults pull your last site, buddy and gear. Tap, tweak, done — before you've dried off.",
  },
  {
    icon: Gauge,
    title: "Real dive profiles",
    body: "Depth-over-time curves, bottom time, temps and pressure rendered like your dive computer.",
  },
  {
    icon: MapPin,
    title: "Discover sites",
    body: "Explore reefs, wrecks and walls near you, with conditions, depth ranges and diver photos.",
  },
  {
    icon: Backpack,
    title: "Track your gear",
    body: "Service reminders, dive counts per item, and a kit list you actually keep up to date.",
  },
  {
    icon: TrendingUp,
    title: "Stats that motivate",
    body: "Streaks, depth clubs and milestones turn your logbook into a season worth chasing.",
  },
  {
    icon: Users,
    title: "Built for buddies",
    body: "Tag dive buddies, share trips, and compare logs from the same descent.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <Eyebrow>Everything in one place</Eyebrow>
      <h2
        style={{
          fontSize: "var(--text-3xl)",
          color: "#fff",
          maxWidth: 620,
          marginBottom: 44,
        }}
      >
        A logbook that keeps up with your adventures.
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}
      >
        {FEATURES.map((f) => {
          const Icon = f.icon;
          return (
            <Card key={f.title} tone="deep" pad="lg" interactive radius="xl">
              <span
                style={{
                  display: "inline-flex",
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,107,53,0.14)",
                  color: "var(--orange-500)",
                  marginBottom: 16,
                }}
              >
                <Icon size={24} strokeWidth={2} />
              </span>
              <h3 style={{ fontSize: "var(--text-xl)", color: "#fff", marginBottom: 8 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 15, color: "var(--ink-300)", lineHeight: 1.6 }}>{f.body}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
