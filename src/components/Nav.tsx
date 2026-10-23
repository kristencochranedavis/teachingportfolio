import { useEffect, useRef, useState, type CSSProperties } from "react";
import { setLang, useLang, useT } from "../i18n/lang";
import { setMotion, useMotionEnabled } from "../lib/motion";
import { sceneLabel } from "../lib/places";
import { lockScroll } from "../lib/scroll";
import { useScene } from "../lib/wall-driver";
import { WALLS } from "../lib/walls";
import { FloorPlan } from "./FloorPlan";
import { WallLink } from "./WallLink";

/**
 * Motion on/off (WCAG 2.2.2). Both words are rendered; CSS shows the one matching
 * html[data-motion]. On phones the words give way to a pause/play mark (same button,
 * same accessible name), so the header fits beside the language switch.
 */
function MotionToggle() {
  const t = useT();
  const on = useMotionEnabled();
  return (
    <button
      type="button"
      className="text-button motion-toggle"
      aria-pressed={on}
      aria-label={t.motion}
      onClick={() => setMotion(!on)}
    >
      <span className="nav-long">
        {t.motion}{" "}
        <span className="motion-state" aria-hidden="true">
          <span className="motion-on">{t.motionOn}</span>
          <span className="motion-off">{t.motionOff}</span>
        </span>
      </span>
      <svg className="nav-short motion-icon" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
        <g className="motion-on">
          <path d="M6 3.5v11M12 3.5v11" stroke="currentColor" strokeWidth="2" fill="none" />
        </g>
        <g className="motion-off">
          <path d="M5 3.5l9 5.5-9 5.5z" fill="currentColor" />
        </g>
      </svg>
    </button>
  );
}

/** EN | FR. Two buttons with aria-pressed, one named group. Same label style as Motion. */
function LangToggle() {
  const t = useT();
  const lang = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label={t.language}>
      <button
        type="button"
        className="lang-toggle__opt"
        lang="en"
        aria-pressed={lang === "en"}
        aria-label="EN, English"
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <span className="lang-toggle__bar" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        className="lang-toggle__opt"
        lang="fr-CA"
        aria-pressed={lang === "fr"}
        aria-label="FR, Français"
        onClick={() => setLang("fr")}
      >
        FR
      </button>
    </div>
  );
}

function PlanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path d="M1.5 1.5h15v15h-15zM1.5 6.5h15M9 6.5v10M1.5 11.5h7.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Nav() {
  const t = useT();
  const scene = useScene();
  const where = sceneLabel(scene, t);
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => (open ? lockScroll() : undefined), [open]);

  const close = () => dialog.current?.close();

  return (
    <header className="site-nav">
      <div className="shell site-nav__inner">
        <WallLink to="/" wall="entrance" className="site-nav__home">
          Kristen Davis
        </WallLink>
        <p className="site-nav__where" aria-live="polite">
          {where.text ? (
            <>
              <span
                className="site-nav__where-swatch"
                style={{ "--swatch": where.wall ? WALLS[where.wall].bg : "transparent" } as CSSProperties}
                aria-hidden="true"
              />
              <span className="sr-only">{t.youAreIn}</span>
              {where.text}
            </>
          ) : null}
        </p>
        <div className="site-nav__actions">
          <MotionToggle />
          <LangToggle />
          <button
            type="button"
            className="text-button plan-button"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="floor-plan"
            onClick={() => {
              const d = dialog.current;
              if (!d) return;
              if (d.open) d.close();
              else {
                d.showModal();
                setOpen(true);
              }
            }}
          >
            <span className="nav-long">{t.floorPlan}</span>
            <span className="sr-only nav-short-label">{t.floorPlan}</span>
            <PlanIcon />
          </button>
        </div>
      </div>
      <dialog
        id="floor-plan"
        ref={dialog}
        className="plan-dialog"
        aria-labelledby="floor-plan-title"
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="plan-dialog__panel">
          <div className="plan-dialog__head">
            <h2 id="floor-plan-title" className="t-label">
              {t.floorPlan}
            </h2>
            <button type="button" className="text-button" onClick={close}>
              <span>{t.close}</span>
            </button>
          </div>
          <FloorPlan onNavigate={close} label={t.planInMenu} />
        </div>
      </dialog>
    </header>
  );
}
