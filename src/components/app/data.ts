import { IMG } from "@/lib/imagery";

export type Dive = {
  number: number;
  site: string;
  location: string;
  date: string;
  month: string;
  depth: number;
  duration: number;
  temp: number;
  conditions: string;
  viz: number;
  buddy: string;
  profile: number[];
  notes: string;
  image: string;
};

export const DIVES: Dive[] = [
  {
    number: 127,
    site: "Manta Point",
    location: "Nusa Penida, Bali",
    date: "Apr 12",
    month: "April 2026",
    depth: 28.4,
    duration: 47,
    temp: 26,
    conditions: "Drift",
    viz: 18,
    buddy: "Leo Marsh",
    profile: [0, 7, 16, 24, 28, 28, 26, 20, 12, 6, 3, 0],
    notes:
      "Cleaning station was busy — three mantas circling for 20 minutes. Mild current on the point.",
    image: IMG.reef,
  },
  {
    number: 126,
    site: "USAT Liberty",
    location: "Tulamben, Bali",
    date: "Apr 10",
    month: "April 2026",
    depth: 29.0,
    duration: 52,
    temp: 27,
    conditions: "Wreck",
    viz: 15,
    buddy: "Ana Coral",
    profile: [0, 6, 14, 22, 29, 29, 24, 18, 10, 4, 0],
    notes: "Stern at 29m. Bumphead parrotfish at dawn. Easy shore entry.",
    image: IMG.wreck,
  },
  {
    number: 125,
    site: "Crystal Bay",
    location: "Nusa Penida, Bali",
    date: "Apr 8",
    month: "April 2026",
    depth: 31.5,
    duration: 41,
    temp: 23,
    conditions: "Reef",
    viz: 25,
    buddy: "Leo Marsh",
    profile: [0, 9, 20, 28, 31, 31, 22, 12, 5, 0],
    notes: "Cold thermocline below 25m. Crystal-clear blue water.",
    image: IMG.sunrays,
  },
  {
    number: 124,
    site: "Blue Corner",
    location: "Koror, Palau",
    date: "Mar 29",
    month: "March 2026",
    depth: 24.0,
    duration: 55,
    temp: 28,
    conditions: "Drift",
    viz: 30,
    buddy: "Ana Coral",
    profile: [0, 8, 18, 24, 24, 24, 18, 10, 4, 0],
    notes: "Hooked in on the wall. Grey reef sharks patrolling the current.",
    image: IMG.sunrays,
  },
];

export const SITES = [
  { name: "Manta Point", region: "Nusa Penida, Bali", depth: "5–28m", tag: "Drift", dives: 412, viz: "Great" },
  { name: "USAT Liberty", region: "Tulamben, Bali", depth: "5–30m", tag: "Wreck", dives: 980, viz: "Calm" },
  { name: "Crystal Bay", region: "Nusa Penida, Bali", depth: "8–40m", tag: "Reef", dives: 624, viz: "Mola mola" },
  { name: "Blue Corner", region: "Koror, Palau", depth: "8–25m", tag: "Drift", dives: 1503, viz: "Sharks" },
];
