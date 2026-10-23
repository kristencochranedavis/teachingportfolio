/** Small shared pieces for the two languages. */
import { useLang, useT } from "./lang";
import { other, UI_STRINGS, type Lang, type UI } from "./ui";

export const htmlLang = (lang: Lang) => (lang === "fr" ? "fr-CA" : "en");

type StringKey = { [K in keyof UI]: UI[K] extends string ? K : never }[keyof UI];

/** The small subtitle under a heading: the same heading in the other language. */
export function Subtitle({ k, text, className }: { k?: StringKey; text?: string; className?: string }) {
  const lang = useLang();
  const o = other(lang);
  const value = text ?? (k ? UI_STRINGS[o][k] : "");
  if (!value) return null;
  return (
    <p className={`t-fr ${className ?? ""}`} lang={htmlLang(o)}>
      {value}
    </p>
  );
}

/** In French mode, a block shown in English says so (and is marked lang="en"). */
export function FallbackNote({ show, className }: { show: boolean; className?: string }) {
  const lang = useLang();
  const t = useT();
  if (lang !== "fr" || !show) return null;
  return (
    <p className={`fallback-note ${className ?? ""}`} lang="fr-CA">
      {t.inEnglish}
    </p>
  );
}

/** lang attribute for a block that may be an English fallback inside a French page. */
export const blockLang = (fallback: boolean) => (fallback ? "en" : undefined);
