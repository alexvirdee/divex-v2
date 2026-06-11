"use client";

import * as React from "react";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { Button } from "@/components/divex/Button";
import { Input } from "@/components/divex/Input";
import { LogoMark } from "@/components/divex/Logo";

export function Auth({ onSignIn }: { onSignIn: () => void }) {
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
          background: "var(--glow-brand)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          marginTop: 24,
        }}
      >
        <LogoMark size={56} />
        <div
          className="dvx-eyebrow"
          style={{ color: "var(--aqua-400)", marginTop: 8 }}
        >
          Welcome back
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 30,
            color: "#fff",
            textAlign: "center",
            letterSpacing: "-0.02em",
            maxWidth: 280,
            lineHeight: 1.05,
          }}
        >
          Sign in to your logbook.
        </h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSignIn();
        }}
        style={{
          position: "relative",
          marginTop: 36,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <Input
          tone="deep"
          label="Email"
          icon={Mail}
          placeholder="you@divex.app"
          type="email"
          aria-label="Email"
        />
        <Input
          tone="deep"
          label="Password"
          icon={Lock}
          placeholder="••••••••"
          type="password"
          aria-label="Password"
        />
        <a
          href="#"
          style={{
            color: "var(--aqua-400)",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "right",
            marginTop: -4,
          }}
        >
          Forgot password?
        </a>
        <Button
          fullWidth
          size="lg"
          trailingIcon={ArrowRight}
          type="submit"
          style={{ marginTop: 10 }}
        >
          Sign in
        </Button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            margin: "20px 0 4px",
            color: "var(--ink-400)",
            fontSize: 13,
          }}
        >
          <span style={{ flex: 1, height: 1, background: "var(--hairline-dark)" }} />
          or continue with
          <span style={{ flex: 1, height: 1, background: "var(--hairline-dark)" }} />
        </div>
        <Button fullWidth variant="glass" size="md">
          Apple
        </Button>
        <Button fullWidth variant="glass" size="md">
          Google
        </Button>
      </form>

      <div
        style={{
          position: "relative",
          marginTop: "auto",
          textAlign: "center",
          paddingTop: 24,
          color: "var(--ink-300)",
          fontSize: 14,
        }}
      >
        New to Divex?{" "}
        <a href="#" style={{ color: "var(--orange-500)", fontWeight: 700 }}>
          Create an account
        </a>
      </div>
    </div>
  );
}
