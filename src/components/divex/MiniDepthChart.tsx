"use client";

import * as React from "react";

type Accent = "aqua" | "orange";

export interface MiniDepthChartProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, "ref" | "points"> {
  points: number[];
  height?: number;
  showMax?: boolean;
  accent?: Accent;
}

export function MiniDepthChart({
  points = [],
  height = 140,
  showMax = true,
  accent = "aqua",
  style,
  ...rest
}: MiniDepthChartProps) {
  const n = points.length;
  const W = 320;
  const H = height;
  const padX = 6;
  const padTop = 14;
  const padBot = 10;
  const maxDepth = Math.max(1, ...points);
  const innerW = W - padX * 2;
  const innerH = H - padTop - padBot;

  const x = (i: number) => padX + (n <= 1 ? innerW / 2 : (i / (n - 1)) * innerW);
  const y = (d: number) => padTop + (d / maxDepth) * innerH;

  const pts = points.map((d, i): [number, number] => [x(i), y(d)]);
  let line = "";
  if (pts.length) {
    line = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const [px, py] = pts[i - 1];
      const [cx, cy] = pts[i];
      const mx = (px + cx) / 2;
      line += ` C ${mx} ${py}, ${mx} ${cy}, ${cx} ${cy}`;
    }
  }
  const area = pts.length
    ? `${line} L ${pts[pts.length - 1][0]} ${H - padBot} L ${pts[0][0]} ${H - padBot} Z`
    : "";

  const maxIdx = points.indexOf(maxDepth);
  const stroke = accent === "orange" ? "var(--orange-500)" : "var(--aqua-400)";
  const fillId = `dvxchart-${accent}-${React.useId().replace(/:/g, "")}`;
  const stopColor = accent === "orange" ? "#FF6B35" : "#20C5C6";

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      width="100%"
      height={H}
      style={{ display: "block", overflow: "visible", ...style }}
      {...rest}
    >
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stopColor} stopOpacity="0.34" />
          <stop offset="100%" stopColor={stopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.33, 0.66, 1].map((g, i) => (
        <line
          key={i}
          x1={padX}
          x2={W - padX}
          y1={padTop + g * innerH}
          y2={padTop + g * innerH}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
        />
      ))}
      {area ? <path d={area} fill={`url(#${fillId})`} /> : null}
      {line ? (
        <path
          d={line}
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : null}
      {showMax && n ? (
        <g>
          <circle
            cx={x(maxIdx)}
            cy={y(maxDepth)}
            r="4.5"
            fill="var(--orange-500)"
            stroke="var(--ink-950)"
            strokeWidth="2"
          />
          <text
            x={x(maxIdx)}
            y={y(maxDepth) + 18}
            textAnchor="middle"
            style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }}
            fill="var(--orange-400)"
          >
            {maxDepth}m
          </text>
        </g>
      ) : null}
    </svg>
  );
}
