import { useContent } from "../i18n/content";
import { useLang, useT } from "../i18n/lang";
import { FallbackNote, Subtitle, blockLang } from "../i18n/bits";
import { PHOTOS } from "../lib/photos";
import { Frame } from "../components/Frame";

/**
 * Who is Kristen: the English copy and the site's own French version of it,
 * both pending Kristen's approval. Her belonging/rigour line is her own sentence,
 * taken from about.ts in the reader's language.
 */
export function Who() {
  const t = useT();
  const lang = useLang();
  const { philosophy } = useContent();
  const b = t.bioProgressive;
  const quote = philosophy.philosophy.belonging;
  const q = lang === "fr" ? ["« ", " »"] : ["“", "”"];
  return (
    <section id="who" data-wall="about" data-scene="who" className="scene who" aria-labelledby="who-title">
      <div className="shell who__grid">
        <header className="who__head">
          <h2 id="who-title" className="t-h2" data-split>
            {t.hWho}
          </h2>
          <Subtitle k="hWho" />
        </header>
        <p className="t-lede who__lede">{t.bioLede}</p>
        <Frame photo={PHOTOS.overlook} alt={t.photoOverlookAlt} sizes="(min-width: 64rem) 26rem, (min-width: 48rem) 38vw, 88vw" className="who__photo" />
        <div className="who__body lit">
          {t.bio.map((p) => (
            <p key={p.runin} className="lit-rise">
              <strong className="runin">{p.runin}</strong> {p.text}
            </p>
          ))}
          <p className="lit-rise">
            <strong className="runin">{b.runin}</strong> {b.before}
            <em>{b.why}</em>
            {b.middle}
            <em>{b.how}</em>
            {b.after1}
            {b.open}
            <span lang="en">{b.sunshine}</span>
            {b.closeQ}
            {b.and}
            {b.open}
            <span lang="en">{b.glow}</span>
            {b.closeQ}
            {b.after2}
          </p>
        </div>
        {quote ? (
          <figure className="who__quote" lang={blockLang(philosophy.fallback)}>
            <blockquote data-split>
              {q[0]}
              {quote}
              {q[1]}
            </blockquote>
            <figcaption className="t-credit">{t.quoteCaption}</figcaption>
            <FallbackNote show={philosophy.fallback} />
          </figure>
        ) : null}
      </div>
    </section>
  );
}
