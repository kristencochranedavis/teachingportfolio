import { useState, type CSSProperties } from "react";
import { pad2 } from "../data";
import { roomSubtitle, useContent } from "../i18n/content";
import { useLang, useT } from "../i18n/lang";
import { FallbackNote, Subtitle, blockLang } from "../i18n/bits";
import { roomWall, WALLS } from "../lib/walls";
import { WallLink } from "../components/WallLink";

function excerpt(s: string, max = 34): string {
  const w = s.trim().split(/\s+/);
  return w.length <= max ? s.trim() : `${w.slice(0, max).join(" ")}…`;
}

/**
 * The room index: the eight charts, each in its wall colour. Hovering or focusing
 * a room repaints the preview wall beside the list with that room's colour and
 * hangs its first label there. On phones each room is a painted band.
 */
export function RoomIndex() {
  const t = useT();
  const lang = useLang();
  const { charts } = useContent();
  const [active, setActive] = useState(1);
  const current = charts.find((c) => c.item.number === active) ?? charts[0];
  const chart = current?.item;
  const wall = WALLS[roomWall(active)];
  const first = chart?.elements[0];
  const anyFallback = charts.some((c) => c.fallback);
  const subtitle = chart ? roomSubtitle(lang, chart.number, Boolean(current?.fallback)) : undefined;

  return (
    <section id="rooms" data-wall="index" data-scene="rooms" className="scene rooms" aria-labelledby="rooms-title">
      <div className="shell">
        <header className="section-head rooms__head">
          <h2 id="rooms-title" className="t-h2" data-split>
            {t.hRooms}
          </h2>
          <Subtitle k="hRooms" />
          <p className="rooms__intro measure">{t.roomsIntro}</p>
          <FallbackNote show={anyFallback} />
        </header>

        <div className="rooms__grid">
          <ol className="rooms__list">
            {charts.map(({ item: c, fallback }) => {
              const w = WALLS[roomWall(c.number)];
              return (
                <li key={c.slug}>
                  <WallLink
                    to={`/rooms/${pad2(c.number)}`}
                    wall={roomWall(c.number)}
                    className={`rooms__row${c.number === active ? " is-active" : ""}`}
                    style={{ "--room-bg": w.bg, "--room-ink": w.ink, "--room-muted": w.muted } as CSSProperties}
                    onPointerEnter={() => setActive(c.number)}
                    onFocus={() => setActive(c.number)}
                  >
                    <span className="rooms__door" aria-hidden="true">
                      {c.number}
                    </span>
                    <span className="rooms__title" lang={blockLang(fallback)}>
                      <span className="sr-only">{t.room(c.number)}, </span>
                      {c.title}
                    </span>
                    <span className="rooms__count">{t.elementsCount(c.elements.length)}</span>
                  </WallLink>
                </li>
              );
            })}
          </ol>

          {chart && first ? (
            <div
              className="rooms__preview"
              style={{ "--room-bg": wall.bg, "--room-ink": wall.ink, "--room-muted": wall.muted } as CSSProperties}
              aria-hidden="true"
            >
              <div className="rooms__preview-inner" key={`${lang}-${chart.number}`}>
                <p className="t-label rooms__preview-room">{t.room(chart.number)}</p>
                <p className="rooms__preview-title" lang={blockLang(Boolean(current?.fallback))}>
                  {chart.title}
                </p>
                {subtitle?.text ? (
                  <p className="t-fr rooms__preview-fr" lang={subtitle.lang}>
                    {subtitle.text}
                  </p>
                ) : null}
                <div className="rooms__preview-label" lang={blockLang(Boolean(current?.fallback))}>
                  <p className="t-label">{t.firstLabel}</p>
                  <p className="rooms__preview-statement">{excerpt(first.statement, 30)}</p>
                  {first.theory ? <p className="rooms__preview-theory">{excerpt(first.theory)}</p> : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
