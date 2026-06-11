"use client";

import { ArrowRight, Mail, Waves } from "lucide-react";
import { Section } from "@/components/divex/Section";
import { Card } from "@/components/divex/Card";
import { AchievementBadge } from "@/components/divex/AchievementBadge";
import { Input } from "@/components/divex/Input";
import { Button } from "@/components/divex/Button";

export function Waitlist() {
  return (
    <Section id="waitlist">
      <Card
        tone="gradient"
        radius="2xl"
        pad="lg"
        style={{ position: "relative", overflow: "hidden", textAlign: "center" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--glow-brand)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 560,
            margin: "0 auto",
            padding: "20px 0",
          }}
        >
          <AchievementBadge
            icon={Waves}
            size="lg"
            style={{ margin: "0 auto 8px" }}
          />
          <h2 style={{ fontSize: "var(--text-4xl)", color: "#fff", marginBottom: 14 }}>
            Your first descent is waiting.
          </h2>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--ink-200)",
              marginBottom: 28,
            }}
          >
            Join 9,200+ divers on the waitlist and be first in the water when Divex launches.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "flex",
              gap: 12,
              maxWidth: 460,
              margin: "0 auto",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 220 }}>
              <Input
                tone="deep"
                icon={Mail}
                placeholder="you@divex.app"
                aria-label="Email"
              />
            </div>
            <Button size="lg" trailingIcon={ArrowRight}>
              Join the waitlist
            </Button>
          </form>
          <div
            style={{
              fontSize: 13,
              color: "var(--ink-400)",
              marginTop: 14,
            }}
          >
            No spam. Just the splash.
          </div>
        </div>
      </Card>
    </Section>
  );
}
