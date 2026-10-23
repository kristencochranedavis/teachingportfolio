import { useEffect, useRef, type CSSProperties } from "react";
import { useContent } from "../i18n/content";
import { useT } from "../i18n/lang";
import { FallbackNote, Subtitle, blockLang } from "../i18n/bits";
import { gsap, withMotion } from "../lib/motion";
import { WALLS } from "../lib/walls";

/**
 * The peak: Dewey and Bagley on facing walls, meeting in her line.
 * All sentences are Kristen's own, verbatim from about.ts (English, or the
 * French text with an English fallback).
 *
 * Motion on: the two walls start turned in, like the side walls of a long room
 * seen from its doorway, with her line small at the far end. As the section
 * rises into view (scrubbed), the walls swing round to face you and her line
 * comes forward between them. Phones: the walls slide in from either side.
 * Motion off: the final, flat state.
 */
export function Philosophy() {
  const t = useT();
  const { philosophy: local } = useContent();
  const p = local.philosophy;
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const handle = withMotion(
      (context) => {
        const phone = Boolean(context.conditions?.["phone"]);
        const left = el.querySelector(".facing__wall--dewey");
        const right = el.querySelector(".facing__wall--bagley");
        const meet = el.querySelector(".facing__meet");
        const room = el.querySelector(".facing");
        if (!left || !right || !meet || !room) return;
        // Only arm while the section is still below the fold (no jump on reload mid-page).
        if (room.getBoundingClientRect().top < window.innerHeight * 0.6) return;
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: room, start: "top 92%", end: phone ? "top 30%" : "center 52%", scrub: 0.6 },
        });
        if (phone) {
          tl.fromTo(left, { xPercent: -34, rotateY: 24 }, { xPercent: 0, rotateY: 0 }, 0)
            .fromTo(right, { xPercent: 34, rotateY: -24 }, { xPercent: 0, rotateY: 0 }, 0)
            .fromTo(meet, { scale: 0.86, yPercent: 18 }, { scale: 1, yPercent: 0 }, 0.2);
        } else {
          tl.fromTo(left, { rotateY: 62, xPercent: 4 }, { rotateY: 0, xPercent: 0 }, 0)
            .fromTo(right, { rotateY: -62, xPercent: -4 }, { rotateY: 0, xPercent: 0 }, 0)
            .fromTo(meet, { scale: 0.62, z: -240 }, { scale: 1, z: 0 }, 0)
            .fromTo(".facing__glow", { opacity: 0.25, scale: 0.5 }, { opacity: 1, scale: 1 }, 0.15);
        }
      },
      undefined,
      { scope: el, conditions: { phone: "(max-width: 47.999rem)" } },
    );
    return () => handle.revert();
  }, []);

  const dewey = WALLS.entrance;
  const bagley = WALLS.about;

  return (
    <section
      ref={root}
      id="philosophy"
      data-wall="philosophy"
      data-scene="philosophy"
      className="scene philosophy"
      aria-labelledby="philosophy-title"
    >
      <div className="shell">
        <header className="section-head philosophy__head">
          <h2 id="philosophy-title" className="t-h2" data-split>
            {t.hPhilosophy}
          </h2>
          <Subtitle k="hPhilosophy" />
          <FallbackNote show={local.fallback} />
        </header>

        <div className="facing" lang={blockLang(local.fallback)}>
          <span className="facing__glow" aria-hidden="true" />
          <article
            className="facing__wall facing__wall--dewey"
            style={{ "--wall": dewey.bg, "--ink": dewey.ink, "--muted": dewey.muted } as CSSProperties}
            aria-labelledby="wall-dewey"
          >
            <p className="t-label facing__tag">{t.theWhy}</p>
            <h3 id="wall-dewey" className="t-h3">
              John Dewey
            </h3>
            {p.dewey.map((s) => (
              <p key={s}>{s}</p>
            ))}
          </article>

          {p.meet ? (
            <figure className="facing__meet">
              <blockquote>{p.meet}</blockquote>
              <figcaption className="t-credit">Kristen</figcaption>
            </figure>
          ) : null}

          <article
            className="facing__wall facing__wall--bagley"
            style={{ "--wall": bagley.bg, "--ink": bagley.ink, "--muted": bagley.muted } as CSSProperties}
            aria-labelledby="wall-bagley"
          >
            <p className="t-label facing__tag">{t.theHow}</p>
            <h3 id="wall-bagley" className="t-h3">
              William Chandler Bagley
            </h3>
            {p.bagley.map((s) => (
              <p key={s}>{s}</p>
            ))}
            {p.null2003.length > 0 ? <p className="facing__note">{p.null2003.join(" ")}</p> : null}
          </article>
        </div>
      </div>
    </section>
  );
}
