/**
 * Wall colours: the exhibition's wayfinding (PLAN §2 "Wall colours as wayfinding").
 *
 * Every colour is taken from the museum photo (duck-egg wall, gilt frame, cream
 * blouse, oak floor) or deepened from it into the tones a museum paints its rooms.
 * Each room (chart) keeps its colour everywhere: the index, its page, every link
 * to it, the floor plan.
 *
 * Contrast is measured by `node scripts/contrast.mjs` (ink and muted ink, on the
 * bare wall and under the "lights up" glow). Keep every value ≥ 4.5:1.
 */

export type Wall = {
  /** Short name used by the floor plan and screen-reader labels. */
  name: string;
  bg: string;
  ink: string;
  muted: string;
  accent: string;
};

export const WALLS = {
  // Entrance: the duck-egg wall in the photo.
  entrance: { name: "Entrance", bg: "#AFC6C0", ink: "#14221F", muted: "#2E423C", accent: "#5E400E" },
  // Who is Kristen: pale mist, the duck-egg wall in soft light.
  about: { name: "Who is Kristen", bg: "#E2EAE6", ink: "#15211D", muted: "#33453F", accent: "#5E400E" },
  // Philosophy peak: the shadowed duck-egg, deepened to a museum green.
  philosophy: { name: "Philosophy", bg: "#1F3A3D", ink: "#F2EDE3", muted: "#C9D2CF", accent: "#D9AE5C" },
  // The room index: the palest mist, so the eight room colours carry it.
  index: { name: "The rooms", bg: "#E9EEEB", ink: "#15211D", muted: "#34463F", accent: "#5E400E" },
  // Rooms 1–8: one blue-green family from the duck-egg wall, deepening room by room
  // (the "Deeper rooms" palette, used site-wide).
  // The gilt accent is the only warm colour.
  room1: { name: "Room 1", bg: "#C9D6CF", ink: "#15211D", muted: "#33453F", accent: "#5E400E" },
  room2: { name: "Room 2", bg: "#B3C7BE", ink: "#15211D", muted: "#31433D", accent: "#5A3D0C" },
  room3: { name: "Room 3", bg: "#9DB5B0", ink: "#11201C", muted: "#2B3D37", accent: "#4F3409" },
  room4: { name: "Room 4", bg: "#8FA6AE", ink: "#101A1F", muted: "#24343A", accent: "#46300A" },
  room5: { name: "Room 5", bg: "#3F6162", ink: "#F3EEE4", muted: "#E6E9E2", accent: "#F0D49A" },
  room6: { name: "Room 6", bg: "#34545A", ink: "#F3EEE4", muted: "#D3DAD6", accent: "#E8C27A" },
  room7: { name: "Room 7", bg: "#253F45", ink: "#F3EEE4", muted: "#C9D2CF", accent: "#E2B967" },
  room8: { name: "Room 8", bg: "#1C2B33", ink: "#F0EAE0", muted: "#C6CDD0", accent: "#E2B967" },
  // The Reading Room: at the back of the exhibition, the deepest wall of all.
  reading: { name: "Reading Room", bg: "#142027", ink: "#EEE8DE", muted: "#C2CBCF", accent: "#E2B967" },
  // Exit: back through the entrance hall.
  exit: { name: "Exit", bg: "#AFC6C0", ink: "#14221F", muted: "#2E423C", accent: "#5E400E" },
} as const satisfies Record<string, Wall>;

export type WallId = keyof typeof WALLS;

/** The warm gallery light that comes up over a room or label (motion.css `.lit::before`). */
/** Light walls take the full glow; dark walls (light ink) a gentler one, so text keeps its contrast. */
export const GLOW_RGB = [255, 246, 228]; export const GLOW_ALPHA = 0.18; export const GLOW_ALPHA_DARK = 0.06;

export function roomWall(n: number): WallId {
  return `room${Math.min(8, Math.max(1, n))}` as WallId;
}

/** CSS custom properties for a wall, for `style={wallStyle(...)}`. */
export function wallVars(id: WallId): Record<string, string> {
  const w = WALLS[id];
  return { "--wall": w.bg, "--ink": w.ink, "--muted": w.muted, "--accent": w.accent };
}
