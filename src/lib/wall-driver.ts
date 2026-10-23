/**
 * The wall driver: repaints the gallery as you move through it.
 * Ported from dantederosamusic.com's sunset driver (src/lib/light.ts), with
 * wall colours in place of light states.
 *
 * - Every `[data-wall]` section names its wall (src/lib/walls.ts).
 * - On a page with several (`/`), section i > 0 gets `fromTo(<html>, wall[i-1],
 *   wall[i])` scrubbed while its top moves from 70% to 30% of the viewport, so
 *   the wall colour follows the scroll in both directions.
 * - On a page with one (a room), its wall is simply set.
 * - One page-long ScrollTrigger tracks which section you are in and publishes
 *   it (nav label, floor plan "you are here", visited rooms).
 * - Not gated on motion: a colour state isn't movement. With motion off it
 *   follows native scrolling.
 */
import { useEffect, useSyncExternalStore } from "react";
import { gsap, registerGsap, ScrollTrigger } from "./motion";
import { GLOW_ALPHA, GLOW_ALPHA_DARK, WALLS, type WallId } from "./walls";

const VARS = { bg: "--wall", ink: "--ink", muted: "--muted", accent: "--accent" } as const;

function varsOf(id: WallId): Record<string, string> {
  const w = WALLS[id];
  return { [VARS.bg]: w.bg, [VARS.ink]: w.ink, [VARS.muted]: w.muted, [VARS.accent]: w.accent };
}

function luminance(hex: string): number {
  const c = [1, 3, 5].map((i) => Number.parseInt(hex.slice(i, i + 2), 16) / 255);
  const l = c.map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * (l[0] ?? 0) + 0.7152 * (l[1] ?? 0) + 0.0722 * (l[2] ?? 0);
}

/** Gallery-light strength for a wall: the same rule scripts/contrast.mjs measures. */
function glowFor(id: WallId): number {
  const w = WALLS[id];
  return luminance(w.ink) > luminance(w.bg) ? GLOW_ALPHA_DARK : GLOW_ALPHA;
}

function wallOf(el: HTMLElement): WallId {
  const id = el.dataset["wall"];
  return id && id in WALLS ? (id as WallId) : "entrance";
}

/** Paint the root wall at once (route changes, the colour sweep). */
export function paintWall(id: WallId): void {
  gsap.set(document.documentElement, varsOf(id));
}

// ---- the current section (a tiny external store) ------------------------------

let scene = "";
const sceneListeners = new Set<() => void>();

function setScene(next: string): void {
  if (next === scene) return;
  scene = next;
  if (next) document.documentElement.setAttribute("data-scene", next);
  else document.documentElement.removeAttribute("data-scene");
  for (const l of sceneListeners) l();
}

export function useScene(): string {
  return useSyncExternalStore(
    (l) => {
      sceneListeners.add(l);
      return () => sceneListeners.delete(l);
    },
    () => scene,
  );
}

// ---- the driver -------------------------------------------------------------

function start(sections: HTMLElement[]): () => void {
  registerGsap();
  const root = document.documentElement;
  const walls = sections.map(wallOf);
  sections.forEach((el, i) => el.style.setProperty("--glow", String(glowFor(walls[i] ?? "entrance"))));
  const ids = sections.map((el) => el.dataset["scene"] ?? el.id ?? "");
  const mixers = walls.map((w, i) => {
    const from = WALLS[walls[i - 1] ?? w];
    const to = WALLS[w];
    return {
      bg: gsap.utils.interpolate(from.bg, to.bg),
      ink: gsap.utils.interpolate(from.ink, to.ink),
      muted: gsap.utils.interpolate(from.muted, to.muted),
      accent: gsap.utils.interpolate(from.accent, to.accent),
    };
  });
  // Each section i > 0 repaints the wall while its top moves from 70% to 30% of the viewport.
  let ranges: { start: number; end: number }[] = [];
  const measure = () => {
    const vh = window.innerHeight;
    ranges = sections.map((el) => {
      const top = el.getBoundingClientRect().top + window.scrollY;
      return { start: top - vh * 0.7, end: top - vh * 0.3 };
    });
  };
  let last = "";
  const write = () => {
    const y = window.scrollY;
    let index = 0;
    let p = 1;
    for (let i = 1; i < ranges.length; i++) {
      const r = ranges[i];
      if (!r || y < r.start) break;
      index = i;
      p = Math.min(1, (y - r.start) / Math.max(1, r.end - r.start));
    }
    const m = mixers[index];
    if (m) {
      const key = `${index}:${p.toFixed(3)}`;
      if (key !== last) {
        last = key;
        root.style.setProperty(VARS.bg, m.bg(p));
        root.style.setProperty(VARS.ink, m.ink(p));
        root.style.setProperty(VARS.muted, m.muted(p));
        root.style.setProperty(VARS.accent, m.accent(p));
      }
    }
    // You are "in" a section once its repaint is half done.
    const active = index > 0 && p < 0.5 ? index - 1 : index;
    setScene(ids[active] ?? "");
  };

  measure();
  write();
  const page = ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: write,
    onRefresh: () => {
      measure();
      write();
    },
  });

  return () => {
    page.kill();
  };
}

function same(a: readonly Element[], b: readonly Element[]): boolean {
  return a.length === b.length && a.every((el, i) => el === b[i]);
}

/** Mounted once in the root layout. Rebuilds when the route renders new sections. */
export function useWallDriver(): void {
  useEffect(() => {
    let sections: HTMLElement[] = [];
    let stop: (() => void) | null = null;

    const sync = () => {
      const next = Array.from(document.querySelectorAll<HTMLElement>("main [data-wall]"));
      if (same(next, sections)) return;
      stop?.();
      sections = next;
      stop = next.length > 0 ? start(next) : null;
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.getElementById("main") ?? document.body, {
      childList: true,
      subtree: true,
    });
    return () => {
      observer.disconnect();
      stop?.();
      stop = null;
      sections = [];
    };
  }, []);
}
