"use client";

import { Star } from "lucide-react";
import { Section, Eyebrow } from "@/components/divex/Section";
import { Card } from "@/components/divex/Card";
import { Avatar } from "@/components/divex/Avatar";

const QUOTES = [
  {
    q: "I used to forget half my dives. Now I log them on the boat before my hair's even dry.",
    name: "Maya Okafor",
    role: "Divemaster · 340 dives",
  },
  {
    q: "The depth profiles look exactly like my computer. My logbook finally feels premium.",
    name: "Leo Marsh",
    role: "Tech diver · 1,200 dives",
  },
  {
    q: "Tracking gear service inside the app saved my reg from a missed overhaul. Worth it alone.",
    name: "Ana Coral",
    role: "Instructor · 800 dives",
  },
];

export function Testimonials() {
  return (
    <Section>
      <Eyebrow>Loved by divers</Eyebrow>
      <h2
        style={{
          fontSize: "var(--text-3xl)",
          color: "#fff",
          marginBottom: 40,
          maxWidth: 560,
        }}
      >
        The crew can&apos;t stop logging.
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}
      >
        {QUOTES.map((t) => (
          <Card key={t.name} tone="glass" pad="lg" radius="xl">
            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 14,
                color: "var(--orange-500)",
              }}
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={2} />
              ))}
            </div>
            <p
              style={{
                fontSize: 17,
                color: "#fff",
                lineHeight: 1.5,
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              “{t.q}”
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Avatar name={t.name} />
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: 14,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {t.name}
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-300)" }}>{t.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
