"use client";

import Link from "next/link";
import { Camera, MessageCircle, Play } from "lucide-react";
import { Wordmark } from "@/components/divex/Logo";

type FooterLink = { label: string; href: string };
const COLS: { h: string; links: FooterLink[] }[] = [
  {
    h: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Dive sites", href: "/dive-sites" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    h: "Divers",
    links: [
      { label: "Community", href: "/community" },
      { label: "Dive log import", href: "/dive-log-import" },
      { label: "Mobile app", href: "/mobile-app" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    h: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        padding: "64px var(--gutter) 40px",
        borderTop: "1px solid var(--hairline-dark)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          display: "flex",
          gap: 40,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: 280 }}>
          <div style={{ marginBottom: 16 }}>
            <Wordmark light height={28} />
          </div>
          <p style={{ color: "var(--ink-400)", fontSize: 14, lineHeight: 1.6 }}>
            The logbook your dives deserve. Made by divers, for divers.
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          {COLS.map((c) => (
            <div key={c.h}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: 14,
                  marginBottom: 14,
                }}
              >
                {c.h}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {c.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{ color: "var(--ink-400)", fontSize: 14 }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "40px auto 0",
          paddingTop: 24,
          borderTop: "1px solid var(--hairline-dark)",
          display: "flex",
          justifyContent: "space-between",
          color: "var(--ink-500)",
          fontSize: 13,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span>© 2026 Divex. All rights reserved.</span>
        <span style={{ display: "flex", gap: 18, color: "var(--ink-400)" }}>
          <a href="#" aria-label="Instagram"><Camera size={18} /></a>
          <a href="#" aria-label="YouTube"><Play size={18} /></a>
          <a href="#" aria-label="Community"><MessageCircle size={18} /></a>
        </span>
      </div>
    </footer>
  );
}
