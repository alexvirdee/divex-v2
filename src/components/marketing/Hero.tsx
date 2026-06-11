"use client";

import Image from "next/image";
import { Flame, Gauge, Play, Sparkles, Waves } from "lucide-react";
import { Button } from "@/components/divex/Button";
import { Badge } from "@/components/divex/Badge";
import { StatTile } from "@/components/divex/StatTile";
import { DiveLogCard } from "@/components/divex/DiveLogCard";
import { IMG } from "@/lib/imagery";

function PhoneMock() {
  return (
    <div style={{ position: "relative", width: 290, flex: "0 0 auto" }}>
      <div
        style={{
          position: "absolute",
          inset: "-40px -30px",
          background: "var(--glow-brand)",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "relative",
          borderRadius: 44,
          padding: 12,
          background: "#05101c",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "var(--shadow-xl)",
        }}
      >
        <div
          style={{
            borderRadius: 32,
            overflow: "hidden",
            background: "var(--grad-descent)",
            padding: 18,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 12, color: "var(--ink-300)" }}>Welcome back</div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#fff",
                }}
              >
                Maya
              </div>
            </div>
            <Badge tone="brand" icon={Flame}>
              6-week streak
            </Badge>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <StatTile label="Dives" value="127" icon={Waves} />
            <StatTile label="Max depth" value="38" unit="m" accent="aqua" icon={Gauge} />
          </div>
          <DiveLogCard
            number={127}
            site="Manta Point"
            location="Nusa Penida"
            depth={28}
            duration={47}
            temp={26}
            conditions="Drift"
            image={IMG.reef}
          />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "40px var(--gutter) var(--section-y)",
        isolation: "isolate",
        overflow: "hidden",
      }}
    >
      {/* Full-bleed underwater backdrop. Sits behind the hero, fades to deep canvas at the bottom. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <Image
          src={IMG.sunrays}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 25%",
            opacity: 0.38,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,16,24,0.45) 0%, rgba(10,37,64,0.55) 45%, var(--ink-950) 100%)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          height: 400,
          background: "var(--glow-aqua)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
      <div
        className="flex flex-col-reverse lg:flex-row"
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          position: "relative",
          gap: 56,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <Badge tone="onDeep" icon={Sparkles} style={{ marginBottom: 22 }}>
            Now in early access
          </Badge>
          <h1
            style={{
              fontSize: "var(--text-5xl)",
              color: "#fff",
              lineHeight: 1.0,
              marginBottom: 22,
            }}
          >
            Dive deeper.
            <br />
            <span style={{ color: "var(--orange-500)" }}>Log every</span> descent.
          </h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--ink-200)",
              lineHeight: 1.6,
              marginBottom: 32,
              maxWidth: 480,
            }}
          >
            The logbook your dives deserve. Track depth, sites, gear and stats in one
            beautiful place — and relive every adventure beneath the surface.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Button size="lg" icon={Waves}>
              Open my logbook
            </Button>
            <Button size="lg" variant="glass" trailingIcon={Play}>
              Watch the dive
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 28,
              color: "var(--ink-300)",
              fontSize: 14,
            }}
          >
            <div style={{ display: "flex" }}>
              {["#FF6B35", "#20C5C6", "#2F5C92", "#FF8453"].map((c, i) => (
                <span
                  key={i}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 999,
                    background: c,
                    border: "2px solid var(--bg-deep)",
                    marginLeft: i ? -8 : 0,
                  }}
                />
              ))}
            </div>
            <span>
              <b style={{ color: "#fff" }}>9,200+</b> divers on the waitlist
            </span>
          </div>
        </div>
        <PhoneMock />
      </div>
    </section>
  );
}
