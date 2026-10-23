/**
 * Motion: GSAP registration, the motion preference, and `withMotion()`.
 * Ported from dantederosamusic.com (src/lib/motion.ts), minus the SSR guards.
 *
 * The preference lives on `<html data-motion="on|off">`. The inline script in
 * index.html sets it before first paint from localStorage, falling back to
 * `prefers-reduced-motion`. Everything else reads the attribute.
 */
import { useSyncExternalStore } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export { gsap, ScrollTrigger };

/** Keep in sync with the boot script in index.html. */
export const MOTION_STORAGE_KEY = "kd-motion";
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
const NO_PREF_QUERY = "(prefers-reduced-motion: no-preference)";

let registered = false;

export function registerGsap(): void {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

const listeners = new Set<() => void>();
let osListenerAttached = false;

function readStored(): "on" | "off" | null {
  try {
    const v = window.localStorage.getItem(MOTION_STORAGE_KEY);
    return v === "on" || v === "off" ? v : null;
  } catch {
    return null;
  }
}

export function isMotionEnabled(): boolean {
  const attr = document.documentElement.getAttribute("data-motion");
  if (attr === "on" || attr === "off") return attr === "on";
  return !window.matchMedia(REDUCED_QUERY).matches;
}

function notify(): void {
  for (const rerun of activeContexts) rerun();
  for (const listener of listeners) listener();
  if (registered) ScrollTrigger.refresh();
}

function applyMotion(on: boolean): void {
  document.documentElement.setAttribute("data-motion", on ? "on" : "off");
  notify();
}

function attachOsListener(): void {
  if (osListenerAttached) return;
  osListenerAttached = true;
  // Follow OS changes only while the visitor hasn't made an explicit choice.
  window.matchMedia(REDUCED_QUERY).addEventListener("change", (e) => {
    if (readStored() === null) applyMotion(!e.matches);
  });
}

export function subscribeMotion(listener: () => void): () => void {
  attachOsListener();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Turn motion on or off, persist the choice, and re-run every `withMotion` context. */
export function setMotion(on: boolean): void {
  try {
    window.localStorage.setItem(MOTION_STORAGE_KEY, on ? "on" : "off");
  } catch {
    // Storage blocked: the choice lasts for this page view.
  }
  applyMotion(on);
}

export function useMotionEnabled(): boolean {
  return useSyncExternalStore(subscribeMotion, isMotionEnabled, () => true);
}

// ---- withMotion --------------------------------------------------------------

export type MotionSetup = (context: gsap.Context) => void | (() => void);

export interface WithMotionOptions {
  scope?: Element | string | object | null;
  conditions?: Record<string, string>;
}

export interface MotionHandle {
  revert(): void;
}

const activeContexts = new Set<() => void>();

/**
 * Run `full` when motion is on, otherwise `reduced` (if given). Built on
 * `gsap.matchMedia()`, so animations and ScrollTriggers created inside are
 * reverted automatically. Re-runs when the motion toggle flips, when the OS
 * reduced-motion setting changes, or when any of `options.conditions` change.
 */
export function withMotion(
  full: MotionSetup,
  reduced?: MotionSetup,
  options: WithMotionOptions = {},
): MotionHandle {
  registerGsap();
  let mm: gsap.MatchMedia | null = null;

  const run = () => {
    mm?.revert();
    mm = gsap.matchMedia(options.scope ?? undefined);
    // `noPref` and `reduce` are complementary, so exactly one always matches and
    // the setup runs on every device.
    mm.add({ ...options.conditions, noPref: NO_PREF_QUERY, reduce: REDUCED_QUERY }, (context) => {
      const setup = isMotionEnabled() ? full : reduced;
      return setup?.(context);
    });
  };

  run();
  activeContexts.add(run);

  return {
    revert() {
      activeContexts.delete(run);
      mm?.revert();
      mm = null;
    },
  };
}
