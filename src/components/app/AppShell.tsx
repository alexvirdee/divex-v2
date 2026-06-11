"use client";

import * as React from "react";
import { Home, Map, Plus, TrendingUp, User } from "lucide-react";
import { TabBar } from "@/components/divex/TabBar";
import { PhoneShell } from "./PhoneShell";
import { Onboarding } from "./Onboarding";
import { Auth } from "./Auth";
import { Dashboard } from "./Dashboard";
import { Logbook } from "./Logbook";
import { DiveDetail } from "./DiveDetail";
import { Sites } from "./Sites";
import { Profile } from "./Profile";
import { CreateDive } from "./CreateDive";
import type { Dive } from "./data";

type Stage = "onboarding" | "auth" | "app";
type Tab = "home" | "logbook" | "log" | "sites" | "profile";

const TABS = [
  { id: "home", label: "Home", icon: Home },
  { id: "logbook", label: "Logbook", icon: TrendingUp },
  { id: "log", label: "Log", icon: Plus, prominent: true },
  { id: "sites", label: "Sites", icon: Map },
  { id: "profile", label: "You", icon: User },
];

export function AppShell() {
  const [stage, setStage] = React.useState<Stage>("onboarding");
  const [tab, setTab] = React.useState<Tab>("home");
  const [openDive, setOpenDive] = React.useState<Dive | null>(null);
  const [creating, setCreating] = React.useState(false);

  function handleTab(id: string) {
    if (id === "log") {
      setCreating(true);
      return;
    }
    setTab(id as Tab);
    setOpenDive(null);
  }

  function content() {
    if (stage === "onboarding") return <Onboarding onDone={() => setStage("auth")} />;
    if (stage === "auth") return <Auth onSignIn={() => setStage("app")} />;

    if (openDive) return <DiveDetail dive={openDive} onBack={() => setOpenDive(null)} />;

    switch (tab) {
      case "home":
        return <Dashboard onOpenDive={setOpenDive} />;
      case "logbook":
        return <Logbook onOpenDive={setOpenDive} />;
      case "sites":
        return <Sites />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard onOpenDive={setOpenDive} />;
    }
  }

  return (
    <PhoneShell>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minHeight: 0,
        }}
      >
        {content()}
        {stage === "app" ? (
          <div
            style={{
              position: "absolute",
              left: 14,
              right: 14,
              bottom: 18,
              zIndex: 40,
            }}
          >
            <TabBar items={TABS} activeId={tab} onChange={handleTab} />
          </div>
        ) : null}
        {creating ? <CreateDive onClose={() => setCreating(false)} /> : null}
      </div>
    </PhoneShell>
  );
}
