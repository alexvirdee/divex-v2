import Link from "next/link";
import { AppShell } from "@/components/app/AppShell";
import { Wordmark } from "@/components/divex/Logo";

export default function AppPreview() {
  return (
    <main
      style={{
        background: "var(--bg-deep)",
        minHeight: "100vh",
        padding: "32px var(--gutter) 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: 500,
          background: "var(--glow-aqua)",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />
      <header
        style={{
          position: "relative",
          maxWidth: "var(--content-max)",
          margin: "0 auto 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <Wordmark light height={26} />
        </Link>
        <Link
          href="/"
          style={{
            color: "var(--ink-300)",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          ← Back to marketing site
        </Link>
      </header>

      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        <div
          className="dvx-eyebrow"
          style={{ color: "var(--aqua-400)", marginBottom: 14 }}
        >
          Interactive preview
        </div>
        <h1
          style={{
            fontSize: "var(--text-4xl)",
            color: "#fff",
            marginBottom: 12,
          }}
        >
          The Divex app, live in your browser.
        </h1>
        <p
          style={{
            fontSize: "var(--text-lg)",
            color: "var(--ink-300)",
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          Tap through onboarding, sign in, log a dive, and explore the
          logbook — everything renders with the real components.
        </p>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AppShell />
      </div>
    </main>
  );
}
