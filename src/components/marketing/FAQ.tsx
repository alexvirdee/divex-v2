"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Section, Eyebrow } from "@/components/divex/Section";

const FAQS = [
  {
    q: "Do I need a dive computer to use Divex?",
    a: "Nope. Log dives by hand in seconds, or import profiles from supported computers for the full depth-over-time curve.",
  },
  {
    q: "Does it work offline, on the boat?",
    a: "Yes. Log everything offline and Divex syncs the moment you're back in signal.",
  },
  {
    q: "Can I export my logbook?",
    a: "On Pro you can export to CSV and the open UDDF standard, so your data is always yours.",
  },
  {
    q: "Is my dive data private?",
    a: "Always. Dives are private by default — you choose what to share with buddies or the community.",
  },
];

export function FAQ() {
  const [open, setOpen] = React.useState<number>(0);
  return (
    <Section id="faq">
      <Eyebrow>Questions</Eyebrow>
      <h2 style={{ fontSize: "var(--text-3xl)", color: "#fff", marginBottom: 28 }}>
        Before you suit up.
      </h2>
      <div style={{ maxWidth: 760 }}>
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          const Icon = isOpen ? Minus : Plus;
          return (
            <div
              key={i}
              style={{ borderBottom: "1px solid var(--hairline-dark)" }}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "20px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#fff",
                  }}
                >
                  {f.q}
                </span>
                <Icon size={20} strokeWidth={2.4} color="var(--orange-500)" />
              </button>
              {isOpen ? (
                <p
                  style={{
                    margin: 0,
                    padding: "0 0 22px",
                    color: "var(--ink-300)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    maxWidth: 620,
                  }}
                >
                  {f.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
