import { useContent } from "../i18n/content";
import { useT } from "../i18n/lang";
import { Subtitle, blockLang } from "../i18n/bits";
import { InlineMarkdown } from "../lib/markdown";
import { PHOTOS } from "../lib/photos";
import { Frame } from "../components/Frame";
import { FloorPlan } from "../components/FloorPlan";

/**
 * Exit: back through the entrance hall. Kristen on a snowy day (cropped tightly
 * around her), the floor plan again (with the rooms you've seen
 * ticked), and the references for the bio and philosophy.
 *
 * GAPS: no contact email is known, so there is no contact block. No downloads:
 * the source documents are not published; each room page offers
 * "Print this room / Save as PDF" instead.
 */
export function Exit() {
  const t = useT();
  const { about } = useContent();
  return (
    <section id="exit" data-wall="exit" data-scene="exit" className="scene exit" aria-labelledby="exit-title">
      <div className="shell exit__grid">
        <Frame photo={PHOTOS.snow} alt={t.photoSnowAlt} sizes="(min-width: 64rem) 26vw, (min-width: 48rem) 34vw, 70vw" className="exit__photo" />
        <div className="exit__text">
          <header className="section-head exit__head">
            <h2 id="exit-title" className="t-h2" data-split>
              {t.hExit}
            </h2>
            <Subtitle k="hExit" />
          </header>
          <div className="exit__plan lit">
            <p className="exit__lede lit-rise">{t.exitLede}</p>
            <div className="lit-rise">
              <FloorPlan label={t.planAtExit} />
            </div>
            <p className="t-credit exit__print lit-rise">{t.exitPrint}</p>
          </div>
        </div>
        <footer className="exit__refs">
          <h3 className="t-label">{t.references}</h3>
          <ul className="refs" lang={blockLang(about.fallback)}>
            {about.item.references.map((ref) => (
              <li key={ref}>
                <InlineMarkdown source={ref} />
              </li>
            ))}
          </ul>
          <p className="t-credit exit__colophon">{t.colophon}</p>
        </footer>
      </div>
    </section>
  );
}
