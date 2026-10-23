import { useEffect, useRef, type CSSProperties } from "react";
import { pad2, words, type Chart, type Element, type ExitTicket } from "../data";
import { roomSubtitle } from "../i18n/content";
import { useLang, useT } from "../i18n/lang";
import { FallbackNote, Subtitle } from "../i18n/bits";
import { balanceTrack } from "../lib/balance";
import { gsap, ScrollTrigger, withMotion } from "../lib/motion";
import { navHeight as navH } from "../lib/scroll";
import { roomWall, WALLS } from "../lib/walls";
import { WallLink } from "../components/WallLink";

const URL_RE = /(https?:\/\/[^\s)]+[^\s).,;])/g;

/** Citations are verbatim text; only their URLs become links. */
function Linkified({ text }: { text: string }) {
  const parts = text.split(URL_RE);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <a key={i} href={part} rel="noopener" className="cite-link">
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Paragraphs from a cell: blank lines split paragraphs, single newlines become line breaks. */
function Paras({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i} className={className}>
            {p.split("\n").map((line, j, all) => (
              <span key={j}>
                <Linkified text={line} />
                {j < all.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        ))}
    </>
  );
}

/** Column widths in proportion to their text (balance.ts refines them after layout). */
function fr(n: number): string {
  return `minmax(0, ${Math.min(150, Math.max(36, n))}fr)`;
}

function PrinterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path d="M4.5 6.5V1.5h9v5M4.5 13.5h-3v-7h15v7h-3M4.5 10.5h9v6h-9z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/** Lesson- and ticket-level references, in the same credit-line type as element citations. */
function References({ items, label }: { items?: string[]; label: string }) {
  if (!items || items.length === 0) return null;
  return (
    <footer className="label__credit t-credit wall-refs" aria-label={label}>
      <ul className="label__cites">
        {items.map((c) => (
          <li key={c}>
            <Linkified text={c} />
          </li>
        ))}
      </ul>
    </footer>
  );
}

export function PrintButton({ label }: { label: string }) {
  return (
    <button type="button" className="text-button print-button" onClick={() => window.print()}>
      <span>{label}</span>
      <PrinterIcon />
    </button>
  );
}

// ---- 1. the title wall --------------------------------------------------------------

export function TitleWall({ chart, fallback }: { chart: Chart; fallback: boolean }) {
  const t = useT();
  const lang = useLang();
  const lessonHasStages = chart.lesson.stages.length > 0;
  const sub = roomSubtitle(lang, chart.number, fallback);
  return (
    <header className="title-wall lit" data-arrive>
      <div className="shell title-wall__grid">
        <div className="title-wall__main">
          <p className="t-label title-wall__room lit-rise">
            {t.room(chart.number)} <span className="title-wall__of">{t.roomOf}</span>
          </p>
          <h1
            id="room-title"
            className={`t-display title-wall__title${chart.title.length > 70 ? " title-wall__title--xlong" : chart.title.length > 48 ? " title-wall__title--long" : ""}`}
            data-split
          >
            {chart.title}
          </h1>
          {sub.text ? (
            <p className="t-fr title-wall__fr lit-rise" lang={sub.lang}>
              {sub.text}
            </p>
          ) : null}
          <FallbackNote show={fallback} className="lit-rise" />
        </div>
        <div className="title-wall__side lit-rise">
          <Paras text={chart.summary} className="title-wall__summary" />
          {chart.source ? (
            <p className="t-credit title-wall__source">
              {t.source}
              {chart.source}
            </p>
          ) : null}
        </div>
        <div className="title-wall__actions lit-rise">
          <nav aria-label={t.inThisRoom} className="title-wall__toc">
            <a href="#labels" className="draw-link">
              {t.wallLabels(chart.elements.length)}
            </a>
            {lessonHasStages ? (
              <a href="#lesson" className="draw-link">
                {chart.partTwoTitle ?? t.hLesson}
              </a>
            ) : null}
            {chart.exitTicket ? (
              <a href="#ticket" className="draw-link">
                {t.hTicket}
              </a>
            ) : null}
          </nav>
          <PrintButton label={t.printRoom} />
        </div>
      </div>
    </header>
  );
}

// ---- 2. wall labels ----------------------------------------------------------------

const LONG_STATEMENT = 30;

type PartLabels = Chart["labels"];

export function WallLabel({ el, labels }: { el: Element; labels?: PartLabels }) {
  const t = useT();
  const parts = [
    { key: "theory", title: labels?.theory ?? t.theory, text: el.theory },
    { key: "practice", title: labels?.practice ?? t.practice, text: el.practice },
    { key: "see", title: labels?.example ?? t.wouldSee, text: el.example },
  ].filter((p) => p.text.trim() !== "");
  const cols = parts.map((p) => fr(words(p.text))).join(" ");

  return (
    <article className="label lit" id={`element-${el.n}`} aria-labelledby={`element-${el.n}-title`}>
      <p className="label__n lit-rise" aria-hidden="true">
        {el.n}
      </p>
      <div className="label__body">
        <h3
          id={`element-${el.n}-title`}
          className={`label__statement${words(el.statement) > LONG_STATEMENT ? " label__statement--long" : ""}`}
          data-split
        >
          <span className="sr-only">{t.element(el.n)}</span>
          {el.statement}
        </h3>
        <span className="label__rule" aria-hidden="true" />
        <div className="label__cols" style={{ "--cols": cols } as CSSProperties}>
          {parts.map((p) => (
            <section key={p.key} className={`label__part label__part--${p.key} lit-rise`}>
              <h4 className="t-label label__part-title">{p.title}</h4>
              <Paras text={p.text} />
            </section>
          ))}
        </div>
        {el.citations.length > 0 || el.credit ? (
          <footer className="label__credit t-credit lit-rise">
            {el.citations.length > 0 ? (
              <ul className="label__cites">
                {el.citations.map((c) => (
                  <li key={c}>
                    <Linkified text={c} />
                  </li>
                ))}
              </ul>
            ) : null}
            {el.credit ? <p className="label__ht">{el.credit}</p> : null}
          </footer>
        ) : null}
      </div>
    </article>
  );
}

export function Labels({ chart }: { chart: Chart }) {
  const t = useT();
  return (
    <section id="labels" className="labels" aria-labelledby="labels-title">
      <div className="shell">
        <header className="labels__head">
          <h2 id="labels-title" className="t-h3">
            {t.hElements}
          </h2>
          <Subtitle k="hElements" />
        </header>
        <div className="labels__list">
          {chart.elements.map((el) => (
            <WallLabel key={el.n} el={el} labels={chart.labels} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- 3. the mini-lesson wall --------------------------------------------------------

export function LessonWall({ chart }: { chart: Chart }) {
  const t = useT();
  const root = useRef<HTMLElement>(null);
  const { lesson } = chart;

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const track = el.querySelector<HTMLElement>(".lesson__track");
    // Panels are sized to their text: widths adjust so the panels come out the same
    // height without empty space inside (src/lib/balance.ts).
    const rebalance = () => {
      if (!track) return;
      // Pinned, the panels share the screen with the heading: aim for panels tall enough
      // that the bare wall above and below them stays under about a tenth of the screen.
      let minTarget = 0;
      if (el.dataset["pin"] === "on") {
        const head = el.querySelector<HTMLElement>(".lesson__head")?.offsetHeight ?? 0;
        const avail = window.innerHeight - navH() - head - 48 - 28;
        minTarget = Math.max(0, avail - window.innerHeight * 0.2);
      }
      balanceTrack(track, minTarget);
    };
    rebalance();
    void document.fonts?.ready.then(() => {
      rebalance();
      ScrollTrigger.refresh();
    });

    const handle = withMotion(
      (context) => {
        if (!context.conditions?.["wide"]) return;
        const viewport = el.querySelector<HTMLElement>(".lesson__viewport");
        const rail = el.querySelector<HTMLElement>(".lesson__rail-fill");
        if (!viewport || !track) return;
        el.dataset["pin"] = "on";
        rebalance();
        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
        if (distance() <= 8) {
          delete el.dataset["pin"];
          return;
        }
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: () => {
              const room = window.innerHeight - navH();
              const gap = Math.max(0, (room - el.offsetHeight) / 2);
              return `top ${Math.round(navH() + gap)}px`;
            },
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onRefreshInit: rebalance,
            onUpdate: (self) => {
              if (rail) rail.style.transform = `scaleX(${self.progress.toFixed(4)})`;
            },
          },
        });
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          gsap.set(track, { clearProps: "transform" });
          if (rail) rail.style.removeProperty("transform");
          delete el.dataset["pin"];
          ScrollTrigger.refresh();
        };
      },
      undefined,
      // Landscape screens walk the wall pinned; phones and portrait tablets swipe it,
      // since a tall screen would leave bare wall above and below a pinned row.
      { scope: el, conditions: { wide: "(min-width: 48rem) and (min-aspect-ratio: 1/1)" } },
    );
    return () => handle.revert();
  }, []);

  const meta = [lesson.grade ? t.grade(lesson.grade) : "", lesson.subject].filter(Boolean).join(", ");
  const titleWords = words(lesson.subtopic) + words(lesson.objective) + words(lesson.curriculumLink) + 12;
  // A lesson with nothing but a title gets no title panel: its title sits under the heading instead.
  const hasFacts = Boolean(meta || lesson.subtopic || lesson.objective || lesson.curriculumLink);
  const heading = chart.partTwoTitle ?? t.hLesson;

  return (
    <section ref={root} id="lesson" className="lesson" aria-labelledby="lesson-title">
      <div className="shell lesson__head">
        <h2 id="lesson-title" className="t-h3">
          {heading}
        </h2>
        <Subtitle k={chart.partTwoTitle ? "hPartTwo" : "hLesson"} />
        {!hasFacts && lesson.title ? <p className="lesson__subtitle">{lesson.title}</p> : null}
        <p className="t-credit lesson__hint">
          <span className="lesson__hint--pin">{t.hintPin}</span>
          <span className="lesson__hint--swipe">{t.hintSwipe}</span>
        </p>
      </div>
      <div className="lesson__viewport" tabIndex={0} role="region" aria-label={t.stageByStage(heading)}>
        <div className="lesson__hang">
          <ol className="lesson__track">
            {hasFacts ? (
              <li className="lesson__card lesson__card--title" style={{ "--w": titleWords } as CSSProperties}>
                <h3 className="lesson__title">{lesson.title}</h3>
                {meta ? <p className="t-label lesson__meta">{meta}</p> : null}
                <dl className="lesson__facts">
                  {lesson.subtopic ? (
                    <div>
                      <dt className="t-label">{t.subtopic}</dt>
                      <dd>{lesson.subtopic}</dd>
                    </div>
                  ) : null}
                  {lesson.objective ? (
                    <div>
                      <dt className="t-label">{t.objective}</dt>
                      <dd>{lesson.objective}</dd>
                    </div>
                  ) : null}
                  {lesson.curriculumLink ? (
                    <div>
                      <dt className="t-label">{t.curriculum}</dt>
                      <dd>{lesson.curriculumLink}</dd>
                    </div>
                  ) : null}
                </dl>
              </li>
            ) : null}
            {lesson.stages.map((s, i) => (
              <li key={s.name} className="lesson__card" style={{ "--w": words(s.body) } as CSSProperties}>
                <p className="lesson__step" aria-hidden="true">
                  {i + 1}
                </p>
                <h3 className="lesson__stage">
                  <span className="sr-only">{t.stage(i + 1)}</span>
                  {s.name}
                </h3>
                <Paras text={s.body} />
              </li>
            ))}
          </ol>
          <span className="lesson__rail" aria-hidden="true">
            <span className="lesson__rail-fill" />
          </span>
        </div>
      </div>
      {lesson.references && lesson.references.length > 0 ? (
        <div className="shell">
          <References items={lesson.references} label={t.lessonRefs} />
        </div>
      ) : null}
    </section>
  );
}

// ---- 4. the exit ticket (3-2-1) ------------------------------------------------------

export function Ticket({ ticket }: { ticket: ExitTicket }) {
  const t = useT();
  const rows = [
    { n: 3, label: t.learned, items: ticket.learned },
    { n: 2, label: t.interesting, items: ticket.interesting },
    { n: 1, label: t.wonder, items: ticket.wonder },
  ].filter((r) => r.items.length > 0);

  return (
    <section id="ticket" className="ticket" aria-labelledby="ticket-title">
      <div className="shell">
        <header className="ticket__head">
          <h2 id="ticket-title" className="t-h3">
            {t.hTicket}
          </h2>
          <Subtitle k="hTicket" />
        </header>
        <div className="ticket__rows">
          {rows.map((r) => (
            <div key={r.n} className="ticket__row lit">
              <p className="ticket__n lit-rise">
                <span className="ticket__num">{r.n}</span>
                <span className="t-label">{r.label}</span>
              </p>
              <ol
                className="ticket__items"
                style={{ "--cols": r.items.map((it) => fr(words(it))).join(" ") } as CSSProperties}
              >
                {r.items.map((it, i) => (
                  <li key={i} className="lit-rise">
                    {it}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <References items={ticket.references} label={t.ticketRefs} />
      </div>
    </section>
  );
}

// ---- 6. doors to the previous and next rooms ------------------------------------------

export function Doors({ n }: { n: number }) {
  const t = useT();
  const prev =
    n > 1
      ? { to: `/rooms/${pad2(n - 1)}`, wall: roomWall(n - 1), kicker: t.room(n - 1), name: t.shortNames[n - 1] ?? "", hash: undefined }
      : { to: "/", wall: "index" as const, kicker: t.backTo, name: t.roomsScene, hash: "rooms" };
  const next =
    n < 8
      ? { to: `/rooms/${pad2(n + 1)}`, wall: roomWall(n + 1), kicker: t.room(n + 1), name: t.shortNames[n + 1] ?? "", hash: undefined }
      : { to: "/", wall: "reading" as const, kicker: t.onTo, name: t.readingScene, hash: "reading-room" };

  return (
    <nav className="doors" aria-label={t.otherRooms}>
      {[
        { ...prev, dir: "prev", rel: t.previous },
        { ...next, dir: "next", rel: t.next },
      ].map((d) => {
        const w = WALLS[d.wall];
        return (
          <WallLink
            key={d.dir}
            to={d.to}
            hash={d.hash}
            wall={d.wall}
            className={`door door--${d.dir}`}
            style={{ "--room-bg": w.bg, "--room-ink": w.ink, "--room-muted": w.muted } as CSSProperties}
          >
            <span className="t-label door__rel">{d.rel}</span>
            <span className="door__kicker">{d.kicker}</span>
            <span className="door__name">{d.name}</span>
          </WallLink>
        );
      })}
    </nav>
  );
}
