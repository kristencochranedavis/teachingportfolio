import { useEffect, type CSSProperties } from "react";
import { useT } from "../i18n/lang";
import { Subtitle } from "../i18n/bits";
import { PHOTOS } from "../lib/photos";
import { FloorPlan } from "../components/FloorPlan";

/**
 * The entrance: her museum photo in the site's one gilt frame, hung beside her
 * name, with the floor plan as the way in. On the first visit of a session the
 * frame draws in, a curtain in the wall colour lifts off the (already painted)
 * photo, and the name rises; all CSS (motion.css "intro"), so it never waits on JS.
 */
export function Entrance() {
  const t = useT();
  const p = PHOTOS.museum;
  // The intro plays once: drop its class after it has run, so coming back doesn't replay it.
  useEffect(() => {
    const id = window.setTimeout(() => document.documentElement.classList.remove("intro"), 2600);
    return () => window.clearTimeout(id);
  }, []);
  return (
    <section id="entrance" data-wall="entrance" data-scene="entrance" className="entrance" aria-labelledby="entrance-title">
      <div className="shell entrance__grid">
        <div className="entrance__photo">
          <div className="gilt intro-frame" style={{ "--ratio": `${p.width} / ${p.height}`, "--focal": p.focal } as CSSProperties}>
            <div className="gilt__window">
              <img
                className="gilt__img"
                src={p.src}
                srcSet={p.srcSet}
                sizes="(min-width: 64rem) 30vw, (min-width: 48rem) 40vw, 88vw"
                width={p.width}
                height={p.height}
                alt={t.photoMuseumAlt}
                fetchPriority="high"
                decoding="async"
              />
              <span className="gilt__curtain intro-curtain" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="entrance__text">
          <h1 id="entrance-title" className="t-display entrance__name">
            <span className="intro-line">
              <span>Kristen</span>
            </span>{" "}
            <span className="intro-line">
              <span>Davis</span>
            </span>
          </h1>
          <div className="entrance__meta intro-rise">
            <p className="entrance__role">{t.teachingPortfolio}</p>
            <Subtitle k="hPortfolio" />
            <p className="entrance__course">{t.course}</p>
          </div>
          <div className="entrance__plan intro-rise intro-rise--late">
            <h2 className="t-label entrance__plan-title">{t.floorPlan}</h2>
            <FloorPlan label={t.planAtEntrance} />
          </div>
        </div>
      </div>
    </section>
  );
}
