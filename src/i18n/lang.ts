/**
 * The site language (EN / FR).
 *
 * Chosen in this order: `?lang=fr|en` in the URL (so a link can be shared in either
 * language), the saved choice (localStorage, wrapped), the browser's language
 * (`navigator.language` starting with "fr"), otherwise English. index.html runs the
 * same rules before first paint and sets `<html lang>`; this module keeps it in sync.
 *
 * Switching keeps the reader where they were: the text cross-fades (about 250ms,
 * instant with motion off), the page re-renders in the new language, and the scroll
 * position is re-anchored on whatever was at the top of the screen.
 */
import { useSyncExternalStore } from "react";
import { isMotionEnabled } from "../lib/motion";
import { jumpToY } from "../lib/scroll";
import { UI_STRINGS, type Lang, type UI } from "./ui";

export const LANG_STORAGE_KEY = "kd-lang";

function fromUrl(): Lang | null {
  try {
    const v = new URLSearchParams(window.location.search).get("lang");
    return v === "fr" || v === "en" ? v : null;
  } catch {
    return null;
  }
}

function fromStorage(): Lang | null {
  try {
    const v = window.localStorage.getItem(LANG_STORAGE_KEY);
    return v === "fr" || v === "en" ? v : null;
  } catch {
    return null;
  }
}

function save(lang: Lang): void {
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // Storage blocked: the choice lasts for this page view.
  }
}

function detect(): Lang {
  const url = fromUrl();
  if (url) {
    save(url);
    return url;
  }
  const stored = fromStorage();
  if (stored) return stored;
  try {
    if (navigator.language?.toLowerCase().startsWith("fr")) return "fr";
  } catch {
    // no navigator.language
  }
  return "en";
}

let current: Lang = detect();
document.documentElement.lang = current === "fr" ? "fr-CA" : "en";
const listeners = new Set<() => void>();

export function getLang(): Lang {
  return current;
}

export function useLang(): Lang {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => current,
  );
}

export function useT(): UI {
  return UI_STRINGS[useLang()];
}

/** The element at the top of the screen and where it sits, to re-anchor after a re-render. */
function anchor(): { key: string; top: number } | null {
  const navH = document.querySelector<HTMLElement>(".site-nav")?.offsetHeight ?? 56;
  const candidates = document.querySelectorAll<HTMLElement>("main [id], main h1, main h2, main h3");
  let best: { key: string; top: number } | null = null;
  for (const el of candidates) {
    const top = el.getBoundingClientRect().top;
    if (top < navH - 4) continue;
    const key = el.id ? `#${el.id}` : "";
    if (!key) continue;
    if (!best || top < best.top) best = { key, top };
  }
  return best;
}

function restore(a: { key: string; top: number } | null): void {
  if (!a) return;
  const el = document.getElementById(a.key.slice(1));
  if (!el) return;
  const delta = el.getBoundingClientRect().top - a.top;
  if (Math.abs(delta) > 1) jumpToY(window.scrollY + delta);
}

const FADE_MS = 120;

export function setLang(next: Lang): void {
  if (next === current) return;
  save(next);
  // Keep a shared link honest: if the URL carries ?lang, it follows the choice.
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.set("lang", next);
      window.history.replaceState(window.history.state, "", url);
    }
  } catch {
    // leave the URL alone
  }
  const root = document.documentElement;
  const where = anchor();
  const apply = () => {
    current = next;
    root.lang = next === "fr" ? "fr-CA" : "en";
    for (const l of listeners) l();
    // React commits synchronously for external-store updates; re-anchor after layout.
    requestAnimationFrame(() => {
      restore(where);
      requestAnimationFrame(() => {
        restore(where);
        root.classList.remove("lang-out");
      });
    });
  };
  if (!isMotionEnabled()) {
    apply();
    return;
  }
  root.classList.add("lang-out");
  window.setTimeout(apply, FADE_MS);
}
