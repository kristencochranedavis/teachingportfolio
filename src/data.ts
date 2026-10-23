/**
 * The one place the site reads content from. Content lives in src/content/*
 * (read only here); this module re-exports it and adds site-side helpers.
 *
 * No source documents are linked or served; the site shows only the content modules.
 */
import { charts } from "./content/charts";
import { resources, jigsaw } from "./content/resources";
import { about } from "./content/about";
import type { Resource } from "./content/types";

export { charts, resources, jigsaw, about };
export type { Chart, Element, JigsawWeek, Resource, ExitTicket, MiniLesson, LessonStage } from "./content/types";

/**
 * French room titles written for the site. Used as the French subtitle in
 * English mode (and the French line in French mode) only while the French
 * chart is missing.
 */
export const ROOM_FRENCH: Record<number, string> = {
  1: "Les théories de l’apprentissage et l’enseignement différencié",
  2: "L’environnement d’apprentissage et l’organisation",
  3: "Le curriculum de l’Ontario, la recherche et les données",
  4: "Le développement de l’enfant et de l’adolescent",
  5: "Soutenir les élèves qui apprennent l’anglais ou le français",
  6: "Soutenir les élèves ayant des besoins particuliers",
  7: "Santé mentale, bien-être et appartenance",
  8: "Le droit de l’éducation et les normes d’exercice",
};

export const pad2 = (n: number) => String(n).padStart(2, "0");

/** Resources too long to open in place get their own page (`/reading-room/r4`). */
export const LONG_RESOURCES = new Set<Resource["code"]>(["R4", "R5"]);

/** Count words, for proportional column widths. */
export function words(s: string | undefined): number {
  const t = s?.trim();
  return t ? t.split(/\s+/).length : 0;
}

/** A body's leading heading, if it only repeats the summary, is dropped. */
export function bodyWithoutLede(r: Resource): string {
  const norm = (s: string) => s.replace(/[.\s]+$/, "").trim().toLowerCase();
  const lines = r.body.split("\n");
  const first = lines.findIndex((l) => l.trim() !== "");
  const line = lines[first] ?? "";
  const text = line.replace(/^#+\s*/, "");
  if (first >= 0 && norm(text) === norm(r.summary)) {
    return lines.slice(first + 1).join("\n").trim();
  }
  return r.body;
}
