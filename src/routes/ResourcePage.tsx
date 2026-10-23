import type { CSSProperties } from "react";
import { bodyWithoutLede, words } from "../data";
import { useContent } from "../i18n/content";
import { useLang, useT } from "../i18n/lang";
import { FallbackNote, Subtitle, blockLang, htmlLang } from "../i18n/bits";
import { other, UI_STRINGS } from "../i18n/ui";
import { InlineMarkdown, Markdown } from "../lib/markdown";
import { WallLink } from "../components/WallLink";
import { NotFound } from "./NotFound";
import { useDocumentTitle, useMarkVisitedScenes } from "./hooks";

const fr = (n: number) => `minmax(0, ${Math.min(150, Math.max(36, n))}fr)`;

/** R4 as a theory library: each week hung as a wall label (theory, practice, example). */
function Library() {
  const t = useT();
  const { jigsaw } = useContent();
  return (
    <div className="labels__list library">
      {jigsaw.map(({ item: w, fallback }) => {
        const parts = [
          { key: "theory", kicker: t.theory, part: w.theory },
          { key: "practice", kicker: t.practice, part: w.practice },
          { key: "see", kicker: t.example, part: w.example },
        ].filter((p) => p.part.body.trim() !== "");
        return (
          <article
            key={w.week}
            id={`week-${w.week}`}
            className="label lit"
            aria-labelledby={`week-${w.week}-title`}
            lang={blockLang(fallback)}
          >
            <p className="label__n lit-rise" aria-hidden="true">
              {w.week}
            </p>
            <div className="label__body">
              <p className="t-label library__week lit-rise">{t.week(w.week)}</p>
              <h2 id={`week-${w.week}-title`} className="label__statement" data-split>
                <span className="sr-only">{t.week(w.week)}: </span>
                {w.topic}
              </h2>
              <FallbackNote show={fallback} />
              <span className="label__rule" aria-hidden="true" />
              <div
                className="label__cols"
                style={{ "--cols": parts.map((p) => fr(words(p.part.body) + 8)).join(" ") } as CSSProperties}
              >
                {parts.map((p) => (
                  <section key={p.key} className={`label__part label__part--${p.key} lit-rise`}>
                    <p className="t-label label__part-title">{p.kicker}</p>
                    <h3 className="library__part-title">{p.part.title}</h3>
                    <p>{p.part.body}</p>
                  </section>
                ))}
              </div>
              {w.references.length > 0 ? (
                <footer className="label__credit t-credit lit-rise">
                  <ul className="label__cites">
                    {w.references.map((r) => (
                      <li key={r}>
                        <InlineMarkdown source={r} />
                      </li>
                    ))}
                  </ul>
                </footer>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ResourcePage({ code }: { code: string }) {
  const t = useT();
  const lang = useLang();
  const { resources } = useContent();
  const local = resources.find((r) => r.item.code === code.toUpperCase());
  const r = local?.item;
  const isLibrary = r?.code === "R4";
  const title = r ? (isLibrary ? t.hLibrary : r.title) : "";
  useDocumentTitle(r ? t.pageTitle(`${r.code}: ${title}`) : t.pageTitle(t.notFoundTitle));
  useMarkVisitedScenes();
  if (!r || !local) return <NotFound />;
  const o = UI_STRINGS[other(lang)];
  return (
    <article key={r.code} className="resource" data-wall="reading" data-scene="reading-room" aria-labelledby="res-title">
      <header className="title-wall lit" data-arrive>
        <div className="shell title-wall__grid">
          <div className="title-wall__main">
            <p className="t-label title-wall__room lit-rise">
              <WallLink to="/" hash="reading-room" wall="reading" className="draw-link">
                {t.hReading}
              </WallLink>{" "}
              <span className="title-wall__of">{r.code}</span>
            </p>
            <h1
              id="res-title"
              className="t-display title-wall__title title-wall__title--resource"
              lang={isLibrary ? undefined : blockLang(local.fallback)}
              data-split
            >
              {title}
            </h1>
            {isLibrary ? (
              <Subtitle k="hLibrary" className="title-wall__fr lit-rise" />
            ) : r.code === "R5" ? (
              <Subtitle k="hReflections" className="title-wall__fr lit-rise" />
            ) : (
              <p className="t-fr title-wall__fr lit-rise" lang={htmlLang(other(lang))}>
                {o.hReading}
              </p>
            )}
            <FallbackNote show={local.fallback} className="lit-rise" />
          </div>
          <div className="title-wall__side lit-rise" lang={blockLang(local.fallback)}>
            <p className="title-wall__summary">{r.summary}</p>
            {isLibrary ? <p className="t-credit title-wall__source">{t.fromWeeks(r.title)}</p> : null}
            <button type="button" className="text-button print-button" onClick={() => window.print()} lang={htmlLang(lang)}>
              <span>{t.printPage}</span>
            </button>
          </div>
        </div>
      </header>
      <section className="resource__body" aria-label={r.title}>
        <div className="shell">
          {isLibrary ? (
            <Library />
          ) : (
            <div lang={blockLang(local.fallback)}>
              <Markdown source={bodyWithoutLede(r)} shift={0} className="prose-wall resource__prose" />
            </div>
          )}
        </div>
      </section>
      <nav className="shell resource__back" aria-label={t.backToReading}>
        <WallLink to="/" hash="reading-room" wall="reading" className="rule-button">
          <span>{t.backToReading}</span>
        </WallLink>
      </nav>
    </article>
  );
}
