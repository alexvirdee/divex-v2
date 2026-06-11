"use client";

import * as React from "react";
import { Check, MapPin, X } from "lucide-react";
import { IconButton } from "@/components/divex/IconButton";
import { Input } from "@/components/divex/Input";
import { Tag } from "@/components/divex/Tag";
import { Button } from "@/components/divex/Button";

export function CreateDive({ onClose }: { onClose: () => void }) {
  const [cond, setCond] = React.useState("Reef");
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(4,16,28,0.6)",
          backdropFilter: "blur(2px)",
        }}
      />
      <div
        style={{
          position: "relative",
          background: "var(--blue-700)",
          borderTopLeftRadius: "var(--radius-2xl)",
          borderTopRightRadius: "var(--radius-2xl)",
          borderTop: "1px solid var(--hairline-dark)",
          padding: "14px 18px 24px",
          maxHeight: "88%",
          overflowY: "auto",
          boxShadow: "var(--shadow-xl)",
        }}
      >
        <div
          style={{
            width: 40,
            height: 5,
            borderRadius: 999,
            background: "var(--ink-600)",
            margin: "0 auto 16px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 18,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 22,
              color: "#fff",
            }}
          >
            Log a dive
          </h2>
          <IconButton icon={X} variant="soft" aria-label="Close" onClick={onClose} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Input tone="deep" label="Dive site" icon={MapPin} placeholder="Manta Point" />
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <Input tone="deep" label="Max depth" suffix="m" placeholder="28.4" />
            </div>
            <div style={{ flex: 1 }}>
              <Input tone="deep" label="Bottom time" suffix="min" placeholder="47" />
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <Input tone="deep" label="Water temp" suffix="°C" placeholder="26" />
            </div>
            <div style={{ flex: 1 }}>
              <Input tone="deep" label="Visibility" suffix="m" placeholder="18" />
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 700,
                color: "var(--ink-200)",
                marginBottom: 8,
              }}
            >
              Conditions
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Reef", "Wreck", "Wall", "Drift", "Night", "Cave"].map((c) => (
                <Tag
                  key={c}
                  tone="onDeep"
                  selected={cond === c}
                  onClick={() => setCond(c)}
                >
                  {c}
                </Tag>
              ))}
            </div>
          </div>
          <Button
            fullWidth
            size="lg"
            icon={Check}
            onClick={onClose}
            style={{ marginTop: 6 }}
          >
            Save dive
          </Button>
        </div>
      </div>
    </div>
  );
}
