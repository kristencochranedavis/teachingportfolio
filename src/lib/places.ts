/** The places on the floor plan, in walking order (also the plan's DOM and focus order). */
import { pad2 } from "../data";
import type { UI } from "../i18n/ui";
import type { WallId } from "./walls";

export type Place = {
  id: string;
  label: string;
  short?: string;
  n?: number;
  wall: WallId;
  to: string;
  hash?: string;
};

export function places(t: UI): Place[] {
  return [
    { id: "entrance", label: t.entrance, wall: "entrance", to: "/", hash: "entrance" },
    { id: "who", label: t.who, wall: "about", to: "/", hash: "who" },
    ...Array.from({ length: 8 }, (_, i): Place => {
      const n = i + 1;
      return { id: `room${n}`, label: t.room(n), short: t.shortNames[n], n, wall: `room${n}` as WallId, to: `/rooms/${pad2(n)}` };
    }),
    { id: "reading-room", label: t.readingPlace, wall: "reading", to: "/", hash: "reading-room" },
  ];
}

const PLACE_IDS = new Set(["entrance", "who", "reading-room", ...Array.from({ length: 8 }, (_, i) => `room${i + 1}`)]);

/** Which floor-plan place a section (data-scene) belongs to. */
export function placeOfScene(scene: string): string {
  if (scene === "philosophy") return "who";
  if (scene.startsWith("reading-room")) return "reading-room";
  return PLACE_IDS.has(scene) ? scene : "";
}

/** What the nav says you're looking at. */
export function sceneLabel(scene: string, t: UI): { text: string; wall?: WallId } {
  const labels: Record<string, { text: string; wall: WallId }> = {
    entrance: { text: t.entrance, wall: "entrance" },
    who: { text: t.who, wall: "about" },
    philosophy: { text: t.philosophyScene, wall: "philosophy" },
    rooms: { text: t.roomsScene, wall: "index" },
    "reading-room": { text: t.readingScene, wall: "reading" },
    exit: { text: t.exitScene, wall: "exit" },
  };
  const hit = labels[scene];
  if (hit) return hit;
  const room = /^room(\d)$/.exec(scene);
  if (room) {
    const n = Number(room[1]);
    return { text: t.roomNamed(n, t.shortNames[n] ?? ""), wall: `room${n}` as WallId };
  }
  return { text: "" };
}
