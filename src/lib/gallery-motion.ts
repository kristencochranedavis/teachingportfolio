/**
 * Gallery motion: the exhibition's one scroll language, applied from one place.
 * Ported from dantederosamusic.com (src/lib/film-motion.ts); same mechanics
 * (armed triggers, SplitText masks, scrubbed drift), new vocabulary:
 *
 * - **Lights up.** Each `.lit` element (a room's title wall, every wall label)
 *   gets `is-armed` while it waits below the fold, and `is-lit` as its top
 *   crosses 88% of the viewport. motion.css does the rest: a warm pool of
 *   gallery light swells behind it, a rule draws across, its parts rise.
 * - **Headlines rise.** `[data-split]` headings rise line by line from masks
 *   (SplitText, 90ms stagger, expo-out) as they enter.
 * - **Frames.** A `.frame`'s mat draws in (its edge traces round, the mat
 *   fills), then the image fades up and settles from a slight push-in. Inside,
 *   the picture drifts a little slower than the page (scrubbed, ≤ 4%).
 * - **Arrivals.** When the colour sweep carries you into a room, the new page
 *   renders under the sweep; its title wall is armed then and plays as the sweep
 *   reveals it.
 *
 * Hidden states are only set by JS, only on things that are off screen (or
 * covered by the sweep), so no-JS visitors, deep links and reloads mid-page
 * never see blank content. The LCP image and the H1 are never set to opacity 0.
 */
import { useEffect } from "react";
import type { SplitText as SplitTextType } from "gsap/SplitText";
import { gsap, ScrollTrigger, withMotion, type MotionHandle } from "./motion";
import { ARRIVE_EVENT, isCovered } from "./sweep";

const EDGE_PX = 2;
const LIT_START = "top 88%";
const EASE_RISE = "expo.out";
const LINE_DROP = 115;

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n || 0);
const belowFold = (el: Element) => el.getBoundingClientRect().top >= window.innerHeight - EDGE_PX;

/** Scrub `tween` by scroll, but only after `trigger` has been seen off screen once. */
function armedScrub(trigger: Element, start: string, end: string, tween: gsap.core.Animation): void {
  let armed = false;
  const sync = (self: ScrollTrigger) => {
    const y = self.scroll();
    if (!armed) {
      armed = y <= self.start + EDGE_PX || y >= self.end - EDGE_PX;
      if (!armed) return;
    }
    tween.progress(clamp01((y - self.start) / (self.end - self.start)));
  };
  ScrollTrigger.create({ trigger, start, end, onUpdate: sync, onRefresh: sync });
}

// ---- lights up ------------------------------------------------------------------

function lightsUp(scope: ParentNode, covered: boolean, onArrive: (fn: () => void) => void): void {
  for (const el of scope.querySelectorAll<HTMLElement>(".lit")) {
    if (covered && el.matches("[data-arrive] .lit, .lit[data-arrive]")) {
      el.classList.add("is-armed");
      onArrive(() => el.classList.add("is-lit"));
      continue;
    }
    if (!belowFold(el)) continue;
    el.classList.add("is-armed");
    ScrollTrigger.create({
      trigger: el,
      start: LIT_START,
      once: true,
      onEnter: () => el.classList.add("is-lit"),
    });
  }
}

/** Undo lights-up classes (motion switched off, route change). */
function unlight(scope: ParentNode): void {
  for (const el of scope.querySelectorAll<HTMLElement>(".lit.is-armed")) {
    el.classList.remove("is-armed", "is-lit");
  }
}

// ---- frames ---------------------------------------------------------------------

function frames(scope: ParentNode, covered: boolean, onArrive: (fn: () => void) => void): void {
  for (const frame of scope.querySelectorAll<HTMLElement>(".frame:not([data-intro])")) {
    const img = frame.querySelector<HTMLElement>(".frame-img");
    const edges = frame.querySelectorAll<HTMLElement>(".frame-edge");
    const mat = frame.querySelector<HTMLElement>(".frame-mat");
    const picture = frame.querySelector<HTMLElement>(".frame-drift");

    if (picture) {
      const drift = gsap.fromTo(
        picture,
        { yPercent: -3, scale: 1.06 },
        { yPercent: 3, scale: 1, ease: "none", paused: true, immediateRender: false },
      );
      armedScrub(frame, "top bottom", "bottom top", drift);
    }

    const offscreen = belowFold(frame);
    const arriving = covered && frame.closest("[data-arrive]");
    if (!offscreen && !arriving) continue;

    const tl = gsap.timeline({ paused: true });
    // The edge traces round clockwise: top, right, bottom, left.
    const [top, right, bottom, left] = Array.from(edges);
    if (top && right && bottom && left) {
      tl.fromTo(top, { scaleX: 0 }, { scaleX: 1, duration: 0.42, ease: "power2.in" }, 0)
        .fromTo(right, { scaleY: 0 }, { scaleY: 1, duration: 0.32, ease: "none" }, ">")
        .fromTo(bottom, { scaleX: 0 }, { scaleX: 1, duration: 0.42, ease: "none" }, ">")
        .fromTo(left, { scaleY: 0 }, { scaleY: 1, duration: 0.32, ease: "power2.out" }, ">");
    }
    if (mat) {
      tl.fromTo(
        mat,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.0, ease: "power3.inOut" },
        0.15,
      );
    }
    if (img) {
      tl.fromTo(
        img,
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 1.3, ease: "power2.out" },
        0.95,
      );
    }
    tl.progress(0).pause();
    if (arriving) {
      onArrive(() => tl.play());
    } else {
      ScrollTrigger.create({ trigger: frame, start: "top 92%", once: true, onEnter: () => tl.play() });
    }
  }
}

// ---- headlines ------------------------------------------------------------------

let splitLoad: Promise<typeof SplitTextType | null> | undefined;

export function loadSplitText(): Promise<typeof SplitTextType | null> {
  splitLoad ??= import("gsap/SplitText").then(
    (mod) => {
      gsap.registerPlugin(mod.SplitText);
      return mod.SplitText;
    },
    () => {
      splitLoad = undefined;
      return null;
    },
  );
  return splitLoad;
}

function riseHeadings(
  scope: ParentNode,
  context: gsap.Context,
  covered: boolean,
  onArrive: (fn: () => void) => void,
): () => void {
  const all = Array.from(scope.querySelectorAll<HTMLElement>("[data-split]"));
  const arriving = covered ? all.filter((h) => h.closest("[data-arrive]")) : [];
  const later = all.filter((h) => !arriving.includes(h) && belowFold(h));
  if (arriving.length + later.length === 0) return () => {};
  let live = true;

  void loadSplitText().then((Split) => {
    if (!live || !Split) return;
    context.add(() => {
      for (const heading of [...arriving, ...later]) {
        const isArrival = arriving.includes(heading);
        if (!isArrival && !belowFold(heading)) continue;
        Split.create(heading, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
          aria: /^H[1-6]$/.test(heading.tagName) ? "auto" : "none",
          autoSplit: true,
          onSplit: (self) => {
            const tween = gsap.fromTo(
              self.lines,
              { yPercent: LINE_DROP },
              {
                yPercent: 0,
                duration: 1.0,
                stagger: 0.09,
                ease: EASE_RISE,
                paused: true,
              },
            );
            if (isArrival) {
              onArrive(() => tween.play());
            } else {
              ScrollTrigger.create({ trigger: heading, start: "top bottom", once: true, onEnter: () => tween.play() });
            }
            return tween;
          },
        });
      }
    });
  });

  return () => {
    live = false;
  };
}

// ---- the hook -------------------------------------------------------------------

function start(): MotionHandle {
  return withMotion(
    (context) => {
      const covered = isCovered();
      const queue: (() => void)[] = [];
      const onArrive = (fn: () => void) => queue.push(fn);
      const arrive = () => {
        // Give the sweep a beat to clear the left edge before the room appears.
        window.setTimeout(() => {
          for (const fn of queue.splice(0)) fn();
        }, 160);
      };
      if (covered) window.addEventListener(ARRIVE_EVENT, arrive, { once: true });

      lightsUp(document, covered, onArrive);
      frames(document, covered, onArrive);
      const stopHeadings = riseHeadings(document, context, covered, onArrive);
      return () => {
        window.removeEventListener(ARRIVE_EVENT, arrive);
        stopHeadings();
        unlight(document);
      };
    },
    () => {
      unlight(document);
    },
    { conditions: { phone: "(max-width: 47.999rem)" } },
  );
}

function sameElements(a: readonly Element[], b: readonly Element[]): boolean {
  return a.length === b.length && a.every((el, i) => el === b[i]);
}

/** Mounted once in the root layout; rebuilds when the route renders new sections. */
export function useGalleryMotion(): void {
  useEffect(() => {
    let sections: HTMLElement[] = [];
    let handle: MotionHandle | null = null;

    const sync = () => {
      const next = Array.from(document.querySelectorAll<HTMLElement>("main [data-wall]"));
      if (sameElements(next, sections)) return;
      handle?.revert();
      sections = next;
      handle = next.length > 0 ? start() : null;
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.getElementById("main") ?? document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      handle?.revert();
      handle = null;
      sections = [];
    };
  }, []);
}
