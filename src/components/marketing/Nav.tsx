"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/divex/Button";
import { IconButton } from "@/components/divex/IconButton";
import { Wordmark } from "@/components/divex/Logo";

const LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Dive sites", href: "/#sites" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export function Nav() {
  const [open, setOpen] = React.useState(false);

  // Close mobile menu if viewport grows past breakpoint
  React.useEffect(() => {
    if (!open) return;
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [open]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--glass-dark-bg)",
        borderBottom: "1px solid var(--hairline-dark)",
        backdropFilter: "blur(var(--glass-blur))",
        WebkitBackdropFilter: "blur(var(--glass-blur))",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "14px var(--gutter)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Link href="/" style={{ display: "inline-flex", flex: "0 0 auto" }}>
          <Wordmark light height={26} />
        </Link>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: 32 }}
        >
          {LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/app">
            <Button size="sm" trailingIcon={ArrowRight}>
              Open the app
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <IconButton
            icon={open ? X : Menu}
            variant="glass"
            size="sm"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          />
        </div>
      </div>

      {/* Mobile drawer — full width, drops from header */}
      {open ? (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid var(--hairline-dark)",
            background: "var(--glass-dark-bg)",
            backdropFilter: "blur(var(--glass-blur))",
            WebkitBackdropFilter: "blur(var(--glass-blur))",
            animation: "dvx-fade-up var(--dur-base) var(--ease-out) both",
          }}
        >
          <div
            style={{
              maxWidth: "var(--content-max)",
              margin: "0 auto",
              padding: "10px var(--gutter) 18px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 4px",
                  color: "var(--ink-100)",
                  fontFamily: "var(--font-display)",
                  fontSize: 17,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  borderBottom: "1px solid var(--hairline-dark)",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/app"
              onClick={() => setOpen(false)}
              style={{ marginTop: 16 }}
            >
              <Button fullWidth size="md" trailingIcon={ArrowRight}>
                Open the app
              </Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        color: hover ? "#fff" : "var(--ink-200)",
        fontSize: 15,
        fontWeight: 600,
        transition: "color var(--dur-fast) var(--ease-out)",
        padding: "4px 0",
      }}
    >
      {label}
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -2,
          height: 2,
          borderRadius: 2,
          background: "var(--orange-500)",
          transform: hover ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform var(--dur-base) var(--ease-out)",
        }}
      />
    </Link>
  );
}
