"use client";

import * as React from "react";
import { ArrowRight, Gauge, MapPin, Waves } from "lucide-react";
import { Button } from "@/components/divex/Button";
import { LogoMark } from "@/components/divex/Logo";

const STEPS = [
  {
    icon: Waves,
    title: "Log every descent.",
    body: "Tap, tweak, done — before you've dried off. Your logbook keeps up with you.",
  },
  {
    icon: Gauge,
    title: "Real dive profiles.",
    body: "Depth-over-time curves rendered like your dive computer. Numbers as heroes.",
  },
  {
    icon: MapPin,
    title: "Discover sites.",
    body: "Reefs, wrecks, walls, with real conditions from divers who've been down there.",
  },
];

export function Onboarding({ onDone }: { onDone: () => void }) {
  const [step, setStep] = React.useState(0);
  const s = STEPS[step];
  const Icon = s.icon;
  const isLast = step === STEPS.length - 1;

  return (
    <div
      style={{
        flex: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: "var(--grad-descent)",
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--glow-aqua)",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
        <LogoMark size={36} />
        <button
          onClick={onDone}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--ink-300)",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Skip
        </button>
      </div>

      <div
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 24,
        }}
      >
        <div
          className="dvx-bob"
          style={{
            width: 130,
            height: 130,
            borderRadius: "30%",
            background: "var(--grad-sunrise)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "var(--shadow-brand)",
            color: "#fff",
          }}
        >
          <Icon size={62} strokeWidth={1.8} />
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 32,
            color: "#fff",
            letterSpacing: "-0.02em",
            maxWidth: 280,
          }}
        >
          {s.title}
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "var(--ink-200)",
            lineHeight: 1.55,
            maxWidth: 300,
          }}
        >
          {s.body}
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 24,
          }}
        >
          {STEPS.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === step ? 26 : 8,
                height: 8,
                borderRadius: 999,
                background: i === step ? "var(--orange-500)" : "rgba(255,255,255,0.18)",
                transition: "width var(--dur-base) var(--ease-out)",
              }}
            />
          ))}
        </div>
        <Button
          fullWidth
          size="lg"
          trailingIcon={ArrowRight}
          onClick={() => (isLast ? onDone() : setStep(step + 1))}
        >
          {isLast ? "Get started" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
