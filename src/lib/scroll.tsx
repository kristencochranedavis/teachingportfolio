/**
 * Smooth scrolling and walking around the gallery.
 * Ported from dantederosamusic.com (src/lib/scroll.tsx), with the colour sweep
 * in place of the film cut and the fade through dark.
 *
 * - `<SmoothScroll>` runs one Lenis instance (wheel only; touch stays native),
 *   driven by `gsap.ticker`, only while motion is on. Motion off: native scroll.
 * - `useGo()` moves to a place: `go({ to: "/rooms/3" })` or `go({ to: "/", hash: "reading-room" })`.
 *   - Another page: the colour sweep carries you there (motion off: an instant cut).
 *   - This page, ≤ 1.5 viewports away: a Lenis glide.
 *   - This page, further: a sweep in the destination section's wall colour.
 *   Every path lands focus on the destination, for keyboard and screen-reader users.
 * - A ResizeObserver re-measures every ScrollTrigger when the page height changes.
 */
import { useCallback, useEffect, type MouseEvent, type ReactNode } from "react";
import { useRouter } from "@tanstack/react-router";
import Lenis from "lenis";
import { gsap, isMotionEnabled, registerGsap, ScrollTrigger, useMotionEnabled } from "./motion";
import { sweep } from "./sweep";
import { WALLS, type WallId } from "./walls";
import { paintWall } from "./wall-driver";

let instance: Lenis | null = null;
let locks = 0;

export function getLenis(): Lenis | null {
  return instance;
}

/** Stop smooth scrolling while a dialog is open. Returns an idempotent release. */
export function lockScroll(): () => void {
  locks += 1;
  instance?.stop();
  let released = false;
  return () => {
    if (released) return;
    released = true;
    locks -= 1;
    if (locks === 0) instance?.start();
  };
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const motion = useMotionEnabled();
  useRefreshOnPageResize();
  useRouteResync();
  useKeyboardScroll();
  return (
    <>
      {motion ? <LenisDriver /> : null}
      {children}
    </>
  );
}

function LenisDriver() {
  useEffect(() => {
    registerGsap();
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, anchors: false });
    instance = lenis;
    if (locks > 0) lenis.stop();
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      if (instance === lenis) instance = null;
    };
  }, []);
  return null;
}

function useRefreshOnPageResize() {
  useEffect(() => {
    registerGsap();
    let last = -1;
    let timer = 0;
    const observer = new ResizeObserver(() => {
      const height = document.body.offsetHeight;
      if (height === last) return;
      const first = last < 0;
      last = height;
      if (first) return;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    });
    observer.observe(document.body);
    const settle = () => ScrollTrigger.refresh();
    void document.fonts?.ready.then(settle);
    window.addEventListener("load", settle, { once: true });
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      window.removeEventListener("load", settle);
    };
  }, []);
}

const KEY_STEPS: Record<string, (page: number) => number> = {
  PageDown: (page) => page,
  PageUp: (page) => -page,
  " ": (page) => page,
  ArrowDown: () => 40,
  ArrowUp: () => -40,
};

function editable(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false;
  if (el.isContentEditable) return true;
  if (el.closest("input, textarea, select, button, a[href], [role='region'], dialog")) return true;
  return false;
}

/**
 * Keyboard scrolling must work wherever focus lands after a route change (the new
 * page's H1). Native keys do the scrolling; this only steps in if a key the browser
 * should have scrolled with left the page where it was (for example Page Down
 * doing nothing on /rooms/01), and then scrolls by the same amount itself.
 */
function useKeyboardScroll(): void {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
      const key = e.key === " " && e.shiftKey ? "PageUp" : e.key;
      const step = KEY_STEPS[key];
      if (!step || editable(e.target)) return;
      const before = window.scrollY;
      window.setTimeout(() => {
        if (Math.abs(window.scrollY - before) > 1) return;
        const page = Math.max(40, window.innerHeight - navHeight() - 40);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const to = Math.min(max, Math.max(0, before + step(page)));
        if (to === before) return;
        const lenis = instance;
        if (lenis) lenis.scrollTo(to, { duration: 0.5 });
        else window.scrollTo({ top: to, behavior: isMotionEnabled() ? "smooth" : "auto" });
      }, 140);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
}

/** After any route render (incl. back/forward), let Lenis pick up the restored position. */
function useRouteResync() {
  const router = useRouter();
  useEffect(
    () =>
      router.subscribe("onRendered", () => {
        const lenis = instance;
        if (lenis) {
          lenis.resize();
          lenis.scrollTo(window.scrollY, { immediate: true, force: true });
        }
        ScrollTrigger.refresh();
      }),
    [router],
  );
}

// ---- positions and focus --------------------------------------------------------

export function navHeight(): number {
  return document.querySelector<HTMLElement>(".site-nav")?.offsetHeight ?? 56;
}

function topOf(el: HTMLElement): number {
  return Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - navHeight()));
}

export function jumpToY(y: number): void {
  const lenis = instance;
  if (lenis) {
    lenis.resize();
    lenis.scrollTo(y, { immediate: true, force: true });
  } else {
    window.scrollTo(0, y);
  }
  ScrollTrigger.update();
}

function focusOn(el: HTMLElement): void {
  const target = el.querySelector<HTMLElement>("h1, h2") ?? el;
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
}

const frame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));

async function waitFor(id: string, frames = 20): Promise<HTMLElement | null> {
  for (let i = 0; i < frames; i++) {
    const el = document.getElementById(id);
    if (el) return el;
    await frame();
  }
  return null;
}

/** Wall colour of a section on the current page (for a long in-page jump). */
function wallOfSection(el: HTMLElement): string {
  const id = el.closest<HTMLElement>("[data-wall]")?.dataset["wall"];
  return id && id in WALLS ? WALLS[id as WallId].bg : getComputedStyle(document.documentElement).getPropertyValue("--wall");
}

const easeOut = (t: number) => 1 - (1 - t) ** 5;

export type GoTarget = {
  to: string;
  hash?: string;
  /** The wall of the destination page (for the sweep colour). */
  wall?: WallId;
};

export function isModifiedClick(e: MouseEvent<HTMLElement>): boolean {
  return e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
}

/** Normalise "/rooms/03" and "/rooms/3" alike. */
const samePath = (a: string, b: string) => a.replace(/\/+$/, "") === b.replace(/\/+$/, "");

export function useGo() {
  const router = useRouter();
  return useCallback(
    async (target: GoTarget) => {
      const here = window.location.pathname;
      const { to, hash, wall } = target;

      if (samePath(here, to || "/")) {
        const el = hash ? document.getElementById(hash) : document.getElementById("main");
        if (!el) return;
        window.history.replaceState(window.history.state, "", hash ? `#${hash}` : to);
        const from = window.scrollY;
        const top = hash ? topOf(el) : 0;
        const distance = Math.abs(top - from);
        const span = window.innerHeight * 1.5;
        const lenis = instance;
        if (!isMotionEnabled()) {
          jumpToY(top);
          focusOn(el);
          return;
        }
        if (distance > span || !lenis) {
          await sweep(wallOfSection(el), () => {
            jumpToY(top);
          });
          focusOn(el);
          return;
        }
        lenis.scrollTo(top, {
          duration: 0.7 + 0.6 * (distance / span),
          easing: easeOut,
          onComplete: () => focusOn(el),
        });
        return;
      }

      const color = wall ? WALLS[wall].bg : WALLS.entrance.bg;
      await sweep(color, async () => {
        await router.navigate({ href: hash ? `${to}#${hash}` : to, hashScrollIntoView: false });
        await frame();
        if (wall) paintWall(wall);
        const el = hash ? await waitFor(hash) : null;
        jumpToY(el ? topOf(el) : 0);
        ScrollTrigger.refresh();
        jumpToY(el ? topOf(el) : 0);
      });
      const landing = hash ? document.getElementById(hash) : document.getElementById("main");
      if (landing) focusOn(landing);
    },
    [router],
  );
}
