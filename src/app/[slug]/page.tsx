import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";

type Page = { kicker: string; title: string; sub: string };

const PAGES: Record<string, Page> = {
  features: {
    kicker: "Product",
    title: "Features.",
    sub: "A full tour of every Divex feature. Coming up before launch.",
  },
  "dive-sites": {
    kicker: "Discover",
    title: "Dive sites.",
    sub: "A living map of reefs, wrecks and walls. Browse from the homepage for now.",
  },
  pricing: {
    kicker: "Plans",
    title: "Pricing.",
    sub: "Surface for free, Deep for explorers, Pro for tech divers.",
  },
  changelog: {
    kicker: "Updates",
    title: "Changelog.",
    sub: "Every dive into the codebase, logged.",
  },
  community: {
    kicker: "Divers",
    title: "Community.",
    sub: "Buddies, trips, dive boats — together.",
  },
  "dive-log-import": {
    kicker: "Divers",
    title: "Dive log import.",
    sub: "Bring your history with you. UDDF, CSV and the major dive computers.",
  },
  "mobile-app": {
    kicker: "Divers",
    title: "Mobile app.",
    sub: "iOS and Android, built mobile-first.",
  },
  support: {
    kicker: "Divers",
    title: "Support.",
    sub: "Real divers answering real questions.",
  },
  about: {
    kicker: "Company",
    title: "About Divex.",
    sub: "Made by divers, for divers.",
  },
  blog: {
    kicker: "Company",
    title: "Field notes.",
    sub: "Stories from the surface interval.",
  },
  careers: {
    kicker: "Company",
    title: "Careers.",
    sub: "Join the crew.",
  },
  press: {
    kicker: "Company",
    title: "Press.",
    sub: "Logos, screenshots and the story so far.",
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) return { title: "Divex" };
  return {
    title: `${page.title.replace(/\.$/, "")} — Divex`,
    description: page.sub,
  };
}

export default async function PlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) notFound();

  return (
    <main
      style={{
        background: "var(--grad-descent)",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "var(--text-on-deep)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />
      <section
        style={{
          flex: 1,
          position: "relative",
          padding: "var(--section-y) var(--gutter)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Brand glow behind the title */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--glow-brand)",
            opacity: 0.6,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: 360,
            background: "var(--glow-aqua)",
            opacity: 0.35,
            pointerEvents: "none",
          }}
        />

        <div
          className="dvx-fade-up"
          style={{
            position: "relative",
            maxWidth: "var(--reading-max)",
            margin: "0 auto",
          }}
        >
          <div
            className="dvx-eyebrow"
            style={{ color: "var(--aqua-400)", marginBottom: 18 }}
          >
            {page.kicker} · Coming soon
          </div>
          <h1
            style={{
              fontSize: "var(--text-5xl)",
              color: "#fff",
              lineHeight: 1.0,
              marginBottom: 22,
            }}
          >
            {page.title}
          </h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--ink-200)",
              lineHeight: 1.6,
              marginBottom: 36,
            }}
          >
            {page.sub}
          </p>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--orange-500)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "-0.01em",
            }}
          >
            <ArrowLeft size={18} strokeWidth={2.4} /> Back to home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
