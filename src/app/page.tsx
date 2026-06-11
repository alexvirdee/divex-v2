import { Nav } from "@/components/marketing/Nav";
import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { Stats } from "@/components/marketing/Stats";
import { Sites } from "@/components/marketing/Sites";
import { Gear } from "@/components/marketing/Gear";
import { Screenshots } from "@/components/marketing/Screenshots";
import { Testimonials } from "@/components/marketing/Testimonials";
import { Pricing } from "@/components/marketing/Pricing";
import { FAQ } from "@/components/marketing/FAQ";
import { Waitlist } from "@/components/marketing/Waitlist";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
  return (
    <main
      style={{
        background: "var(--grad-descent)",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "var(--text-on-deep)",
      }}
    >
      <Nav />
      <Hero />
      <Features />
      <Stats />
      <Sites />
      <Gear />
      <Screenshots />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  );
}
