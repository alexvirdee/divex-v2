"use client";

import * as React from "react";
import Image from "next/image";
import { MapPin, Gauge, Timer, Thermometer, LucideIcon } from "lucide-react";
import { Badge } from "./Badge";

export interface DiveLogCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "ref"> {
  number: number;
  site: string;
  location: string;
  date?: string;
  depth?: number;
  duration?: number;
  temp?: number;
  conditions?: string;
  image?: string;
}

function Metric({ icon: Icon, val, unit }: { icon: LucideIcon; val: number | string; unit: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      <Icon size={14} strokeWidth={2.2} color="var(--aqua-400)" />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          fontWeight: 700,
          color: "var(--text-on-deep)",
        }}
      >
        {val}
        <span style={{ color: "var(--ink-300)", fontWeight: 400 }}>{unit}</span>
      </span>
    </span>
  );
}

export function DiveLogCard({
  number,
  site,
  location,
  date,
  depth,
  duration,
  temp,
  conditions,
  image,
  onClick,
  style,
  ...rest
}: DiveLogCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        gap: 14,
        padding: 14,
        alignItems: "stretch",
        background: "var(--surface-card-dark)",
        border: "1px solid var(--hairline-dark)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-deep)",
        cursor: onClick ? "pointer" : "default",
        transition: "transform var(--dur-base) var(--ease-out)",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (onClick) e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
      {...rest}
    >
      <div
        style={{
          position: "relative",
          width: 76,
          flex: "0 0 auto",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          background: "var(--grad-reef)",
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={site}
            fill
            sizes="76px"
            style={{ objectFit: "cover" }}
          />
        ) : null}
        <span
          style={{
            position: "absolute",
            top: 7,
            left: 7,
            padding: "2px 8px",
            borderRadius: "var(--radius-pill)",
            background: "rgba(8,16,24,0.6)",
            backdropFilter: "blur(6px)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 700,
            color: "#fff",
            zIndex: 1,
          }}
        >
          #{number}
        </span>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 16,
                color: "var(--text-on-deep)",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {site}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
              <MapPin size={12} strokeWidth={2.2} color="var(--ink-400)" />
              <span
                style={{
                  fontSize: 12,
                  color: "var(--ink-300)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {location}
              </span>
            </div>
          </div>
          {conditions ? <Badge tone="aqua">{conditions}</Badge> : null}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: "auto" }}>
          {depth != null ? <Metric icon={Gauge} val={depth} unit="m" /> : null}
          {duration != null ? <Metric icon={Timer} val={duration} unit="min" /> : null}
          {temp != null ? <Metric icon={Thermometer} val={temp} unit="°C" /> : null}
          {date ? (
            <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--ink-400)" }}>{date}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
