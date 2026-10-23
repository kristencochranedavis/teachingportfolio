/**
 * Content in the reader's language, with an English fallback.
 *
 * English comes from src/content. French comes from
 * src/content/fr through import.meta.glob, so the build works
 * whether or not those files exist yet. Item by item: a chart, resource or jigsaw
 * week that has no French version is shown in English and flagged `fallback`, and the
 * page labels that block "Contenu présenté en anglais" (with lang="en" on it).
 */
import { useMemo } from "react";
import { charts as enCharts } from "../content/charts";
import { resources as enResources, jigsaw as enJigsaw } from "../content/resources";
import { about as enAbout } from "../content/about";
import type { About, Chart, JigsawWeek, Resource } from "../content/types";
import { useLang } from "./lang";
import { ROOM_FRENCH } from "../data";
import type { Lang } from "./ui";
import { philosophyOf, type Philosophy } from "./philosophy";

type FrModule = Partial<{ charts: Chart[]; resources: Resource[]; jigsaw: JigsawWeek[]; about: About }>;

const frModules = import.meta.glob<FrModule>("../content/fr/*.ts", { eager: true });

/**
 * Canadian (OQLF) French typography, applied to the French text as it is shown:
 * a non-breaking space before ":" and inside « », no space before ; ! ?. Only spaces
 * change, never words. (The source files stay as written. Citations and references are skipped.)
 */
export function typoFr(s: string): string {
  return s
    .replace(/[ \u00a0\u202f]*:(?=[\s*_]|$)/g, "\u00a0:")
    .replace(/«[ \u00a0\u202f]*/g, "«\u00a0")
    .replace(/[ \u00a0\u202f]*»/g, "\u00a0»")
    .replace(/[ \u00a0\u202f]+([;!?])/g, "$1");
}

// Citations and reference lists are shown exactly as stored: no spacing changes.
const VERBATIM_KEYS = new Set(["slug", "code", "citations", "references"]);

function deepTypo<T>(value: T): T {
  if (typeof value === "string") return typoFr(value) as T;
  if (Array.isArray(value)) return value.map(deepTypo) as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = VERBATIM_KEYS.has(k) ? v : deepTypo(v);
    return out as T;
  }
  return value;
}

function frExport<K extends keyof FrModule>(file: string, key: K): FrModule[K] | undefined {
  const mod = frModules[`../content/fr/${file}.ts`];
  const value = mod?.[key];
  return value === undefined ? undefined : deepTypo(value);
}

const frCharts = frExport("charts", "charts");
const frResources = frExport("resources", "resources");
const frJigsaw = frExport("resources", "jigsaw");
const frAbout = frExport("about", "about");

export type Localized<T> = { item: T; fallback: boolean };

function pick<T>(lang: Lang, en: T, fr: T | undefined): Localized<T> {
  if (lang === "en") return { item: en, fallback: false };
  return fr ? { item: fr, fallback: false } : { item: en, fallback: true };
}

export function localCharts(lang: Lang): Localized<Chart>[] {
  return enCharts.map((c) => pick(lang, c, frCharts?.find((f) => f.slug === c.slug || f.number === c.number)));
}

export function localResources(lang: Lang): Localized<Resource>[] {
  return enResources.map((r) => pick(lang, r, frResources?.find((f) => f.code === r.code)));
}

export function localJigsaw(lang: Lang): Localized<JigsawWeek>[] {
  return enJigsaw.map((w) => pick(lang, w, frJigsaw?.find((f) => f.week === w.week)));
}

export function localAbout(lang: Lang): Localized<About> {
  return pick(lang, enAbout, frAbout);
}

/**
 * The small line under a room title. English mode: the French title (from the French chart,
 * else the site's own). French mode: the English title; but when the room itself is
 * shown in English (fallback), the site's French title instead of repeating it.
 */
export function roomSubtitle(lang: Lang, number: number, fallback: boolean): { text?: string; lang: "en" | "fr-CA" } {
  if (lang === "en" || fallback) {
    return { text: frCharts?.find((c) => c.number === number)?.title ?? ROOM_FRENCH[number], lang: "fr-CA" };
  }
  return { text: enCharts.find((c) => c.number === number)?.title, lang: "en" };
}

function complete(p: Philosophy): boolean {
  return p.dewey.length > 0 && p.bagley.length > 0 && Boolean(p.meet);
}

export type LocalPhilosophy = { philosophy: Philosophy; fallback: boolean };

/** Her philosophy in the reader's language; English (flagged) if the French can't be read. */
export function localPhilosophy(lang: Lang): LocalPhilosophy {
  const english = philosophyOf(enAbout);
  if (lang === "en") return { philosophy: english, fallback: false };
  if (frAbout) {
    const french = philosophyOf(frAbout);
    if (complete(french)) {
      return { philosophy: { ...french, belonging: french.belonging ?? english.belonging }, fallback: false };
    }
  }
  return { philosophy: english, fallback: true };
}

/** All localized content for the current language, memoised per language. */
export function useContent() {
  const lang = useLang();
  return useMemo(
    () => ({
      lang,
      charts: localCharts(lang),
      resources: localResources(lang),
      jigsaw: localJigsaw(lang),
      about: localAbout(lang),
      philosophy: localPhilosophy(lang),
    }),
    [lang],
  );
}
