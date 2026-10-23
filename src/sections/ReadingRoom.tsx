import { useId, useState } from "react";
import { bodyWithoutLede, LONG_RESOURCES, type Resource } from "../data";
import { useContent, type Localized } from "../i18n/content";
import { useT } from "../i18n/lang";
import { FallbackNote, Subtitle, blockLang } from "../i18n/bits";
import { Markdown } from "../lib/markdown";
import { WallLink } from "../components/WallLink";

function Entry({ r: { item: r, fallback } }: { r: Localized<Resource> }) {
  const t = useT();
  const { jigsaw } = useContent();
  const [open, setOpen] = useState(false);
  const id = useId();
  const long = LONG_RESOURCES.has(r.code);
  const page = `/reading-room/${r.code.toLowerCase()}`;

  return (
    <li className={`shelf__entry lit lit--noglow${open ? " is-open" : ""}`}>
      <div className="shelf__row">
        <span className="shelf__code lit-rise" aria-hidden="true">
          {r.code}
        </span>
        <div className="shelf__main lit-rise" lang={blockLang(fallback)}>
          <h3 className="shelf__title">
            <span className="sr-only">{r.code}: </span>
            {r.title}
          </h3>
          <p className="shelf__summary">{r.summary}</p>
          <FallbackNote show={fallback} />
          {r.code === "R4" ? (
            <ol className="shelf__library" aria-label={t.libraryByWeek}>
              {jigsaw.map(({ item: w, fallback: wf }) => (
                <li key={w.week} lang={blockLang(wf)}>
                  <WallLink to="/reading-room/r4" hash={`week-${w.week}`} wall="reading" className="draw-link">
                    <span className="shelf__week">{t.week(w.week)}</span> {w.theory.title}
                  </WallLink>
                </li>
              ))}
            </ol>
          ) : null}
        </div>
        <div className="shelf__action lit-rise">
          {long ? (
            <WallLink to={page} wall="reading" className="text-button">
              <span>{r.code === "R4" ? t.openLibrary : t.readReflections}</span>
            </WallLink>
          ) : (
            <button
              type="button"
              className="text-button"
              aria-expanded={open}
              aria-controls={id}
              onClick={() => setOpen((v) => !v)}
            >
              <span>{open ? t.close : t.readHere}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="shelf__chev">
                <path d="M2 5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          )}
        </div>
      </div>
      {!long ? (
        <div id={id} className="shelf__body" hidden={!open}>
          <div className="shelf__body-inner">
            <div lang={blockLang(fallback)}>
              <Markdown source={bodyWithoutLede(r)} shift={2} />
            </div>
            <p className="shelf__permalink">
              <WallLink to={page} wall="reading" className="draw-link t-credit">
                {t.openOwnPage(r.code)}
              </WallLink>
            </p>
          </div>
        </div>
      ) : null}
    </li>
  );
}

/**
 * The Reading Room: all eight resources, R1–R8 (D3). Short ones open in place;
 * R4 (the jigsaw posts, which double as a theory library) and R5 (the
 * reflections) are long, so they open on their own pages.
 */
export function ReadingRoom() {
  const t = useT();
  const { resources } = useContent();
  return (
    <section
      id="reading-room"
      data-wall="reading"
      data-scene="reading-room"
      className="scene reading"
      aria-labelledby="reading-title"
    >
      <div className="shell">
        <header className="section-head reading__head">
          <h2 id="reading-title" className="t-h2" data-split>
            {t.hReading}
          </h2>
          <Subtitle k="hReading" />
          <p className="reading__intro measure">{t.readingIntro}</p>
        </header>
        <ul className="shelf">
          {resources.map((r) => (
            <Entry key={r.item.code} r={r} />
          ))}
        </ul>
      </div>
    </section>
  );
}
