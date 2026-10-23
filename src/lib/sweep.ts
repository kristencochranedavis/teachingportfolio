/**
 * The colour sweep: how you walk between rooms (PLAN §2 "Walking between rooms").
 * Replaces Dante's fade through dark. A band of the next room's wall colour
 * sweeps across the screen, the page changes beneath it, and it sweeps off the
 * far side, leaving you in the new room.
 *
 * Built on the Web Animations API (transform only, compositor-friendly). With
 * motion off or reduced, `sweep()` just runs the change: an instant cut.
 */
import { isMotionEnabled } from "./motion";

let layer: HTMLDivElement | null = null;
let busy: Promise<void> | null = null;
let arriving = false;

/** Fired when a sweep starts to reveal the new page. */
export const ARRIVE_EVENT = "gallery:arrive";

/**
 * True while the screen is covered by a sweep: the new page renders unseen, so
 * gallery motion may hide its title wall and play it in on ARRIVE_EVENT.
 */
export function isCovered(): boolean {
  return arriving;
}

const EASE_IN = "cubic-bezier(.7, 0, .25, 1)";
const EASE_OUT = "cubic-bezier(.22, 1, .36, 1)";
const COVER_MS = 560;
const REVEAL_MS = 760;

function ensureLayer(): HTMLDivElement {
  if (!layer) {
    layer = document.createElement("div");
    layer.className = "sweep";
    layer.setAttribute("aria-hidden", "true");
    layer.innerHTML = '<span class="sweep-edge sweep-edge--lead"></span><span class="sweep-edge sweep-edge--trail"></span>';
  }
  if (!layer.isConnected) document.body.append(layer);
  return layer;
}

const frame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));

/**
 * Sweep `color` across, run `change` while the screen is covered, sweep off.
 * Resolves once the new page is fully revealed.
 */
export function sweep(color: string, change: () => void | Promise<void>): Promise<void> {
  if (!isMotionEnabled()) {
    return Promise.resolve(change());
  }
  const run = async () => {
    arriving = true;
    const el = ensureLayer();
    el.style.setProperty("--sweep", color);
    el.dataset["phase"] = "cover";
    const cover = el.animate(
      [{ transform: "translate3d(-100%,0,0)" }, { transform: "translate3d(0,0,0)" }],
      { duration: COVER_MS, easing: EASE_IN, fill: "forwards" },
    );
    await cover.finished.catch(() => undefined);
    try {
      await change();
    } finally {
      await frame();
      await frame();
      el.dataset["phase"] = "reveal";
      const reveal = el.animate(
        [{ transform: "translate3d(0,0,0)" }, { transform: "translate3d(100%,0,0)" }],
        { duration: REVEAL_MS, easing: EASE_OUT, fill: "forwards" },
      );
      cover.cancel();
      arriving = false;
      window.dispatchEvent(new CustomEvent(ARRIVE_EVENT));
      await reveal.finished.catch(() => undefined);
      reveal.cancel();
      delete el.dataset["phase"];
    }
  };
  // A second click mid-sweep waits for the first to finish, then runs.
  const next = (busy ?? Promise.resolve()).then(run, run);
  busy = next;
  void next.finally(() => {
    if (busy === next) busy = null;
  });
  return next;
}
