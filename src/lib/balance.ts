/**
 * Balanced columns: a wall label's Theory / Practice / What you'd see columns (and
 * an exit-ticket row's items) get widths in proportion to how much text each holds,
 * so the columns of a row end close together instead of leaving one long tail.
 *
 * Measures each column's text block (height × width = its area), sets the grid's
 * `--cols` in proportion, and repeats twice to settle. Skips containers whose
 * children are stacked (phones). Re-runs on route renders, font load and resize.
 */
import { useEffect } from "react";

const SELECTOR = ".label__cols, .ticket__items";
const MIN_SHARE = 0.2;

function textHeight(el: HTMLElement): number {
  const first = el.firstElementChild as HTMLElement | null;
  const last = el.lastElementChild as HTMLElement | null;
  if (!first || !last) return el.getBoundingClientRect().height;
  return last.getBoundingClientRect().bottom - first.getBoundingClientRect().top;
}

function balance(container: HTMLElement): void {
  const kids = Array.from(container.children) as HTMLElement[];
  if (kids.length < 2) return;
  for (let pass = 0; pass < 3; pass++) {
    const rects = kids.map((k) => k.getBoundingClientRect());
    const tops = rects.map((r) => Math.round(r.top));
    if (Math.max(...tops) - Math.min(...tops) > 2) {
      container.style.removeProperty("--cols");
      return;
    }
    const areas = kids.map((k, i) => textHeight(k) * (rects[i]?.width ?? 1));
    const total = areas.reduce((a, b) => a + b, 0) || 1;
    let shares = areas.map((a) => Math.max(MIN_SHARE, a / total));
    const sum = shares.reduce((a, b) => a + b, 0);
    shares = shares.map((s) => s / sum);
    container.style.setProperty("--cols", shares.map((s) => `minmax(0, ${(s * 100).toFixed(2)}fr)`).join(" "));
  }
}

export function balanceAll(): void {
  for (const el of document.querySelectorAll<HTMLElement>(SELECTOR)) balance(el);
}

export function useBalancedColumns(): void {
  useEffect(() => {
    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(balanceAll);
    };
    schedule();
    void document.fonts?.ready.then(schedule);
    let width = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === width) return;
      width = window.innerWidth;
      for (const el of document.querySelectorAll<HTMLElement>(SELECTOR)) el.style.removeProperty("--cols");
      schedule();
    };
    window.addEventListener("resize", onResize);
    let count = 0;
    const observer = new MutationObserver(() => {
      const n = document.querySelectorAll(SELECTOR).length;
      if (n !== count) {
        count = n;
        schedule();
      }
    });
    observer.observe(document.getElementById("main") ?? document.body, { childList: true, subtree: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);
}

/**
 * The mini-lesson wall: each panel's width is set so its text fills it to the same
 * height as the others (the median), so the panels hang level with no empty space
 * inside. Text height × text width stays about constant as a panel narrows or widens,
 * so a few passes converge. Phones keep the CSS widths (one panel per swipe).
 * `minTarget` (the pinned wall) asks for taller, narrower panels so that little bare
 * wall shows above and below them; panels too short to get there just hang shorter.
 */
export function balanceTrack(track: HTMLElement, minTarget = 0): void {
  const cards = Array.from(track.children) as HTMLElement[];
  for (const c of cards) c.style.removeProperty("width");
  if (cards.length < 2 || !window.matchMedia("(min-width: 48rem)").matches) return;
  const first = cards[0];
  if (!first) return;
  const style = getComputedStyle(first);
  const em = Number.parseFloat(style.fontSize) || 16;
  const padX = Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight);
  const minW = 12 * em;
  const maxW = Math.min(36 * em, window.innerWidth * 0.8);
  track.style.alignItems = "flex-start";
  for (let pass = 0; pass < 4; pass++) {
    const rects = cards.map((c) => c.getBoundingClientRect());
    const heights = rects.map((r) => r.height);
    const sorted = [...heights].sort((a, b) => a - b);
    const target = Math.max(sorted[Math.floor(sorted.length / 2)] ?? 0, minTarget);
    if (!target) break;
    cards.forEach((card, i) => {
      const rect = rects[i];
      if (!rect) return;
      const text = Array.from(card.querySelectorAll<HTMLElement>("p:not(.lesson__step), dd")).reduce(
        (sum, el) => sum + el.getBoundingClientRect().height,
        0,
      );
      const fixed = rect.height - text;
      const wantText = Math.max(em * 3, target - fixed);
      const textW = Math.max(1, rect.width - padX);
      const next = padX + (textW * text) / wantText;
      card.style.width = `${Math.round(Math.min(maxW, Math.max(minW, next)))}px`;
    });
  }
  track.style.removeProperty("align-items");
}
