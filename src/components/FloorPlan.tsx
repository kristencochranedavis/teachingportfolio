import type { CSSProperties } from "react";
import { useT } from "../i18n/lang";
import { placeOfScene, places } from "../lib/places";
import { useVisited } from "../lib/visited";
import { useScene } from "../lib/wall-driver";
import { WALLS } from "../lib/walls";
import { WallLink } from "./WallLink";

function Tick() {
  return (
    <svg className="plan__visited" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 8.5l3.2 3.2L13 4.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

/**
 * The floor plan: Entrance, Who is Kristen, Rooms 1–8, Reading Room, each in its
 * wall colour, drawn like an architect's plan (the dark gaps are the walls).
 * Shows where you are and which rooms you've visited.
 */
export function FloorPlan({ onNavigate, label }: { onNavigate?: () => void; label?: string }) {
  const t = useT();
  const scene = useScene();
  const here = placeOfScene(scene);
  const visited = useVisited();

  return (
    <nav aria-label={label ?? t.floorPlan}>
      <ul className="plan">
        {places(t).map((p) => {
          const wall = WALLS[p.wall];
          const isHere = p.id === here;
          const seen = visited.has(p.id);
          const size = p.n ? "" : p.id === "reading-room" ? " plan__cell--full" : " plan__cell--wide";
          return (
            <li key={p.id} className={`plan__cell${size}`}>
              <WallLink
                to={p.to}
                hash={p.hash}
                wall={p.wall}
                className="plan__room"
                style={{ "--room-bg": wall.bg, "--room-ink": wall.ink } as CSSProperties}
                aria-current={isHere ? "location" : undefined}
                onClick={() => onNavigate?.()}
              >
                {p.n ? (
                  <>
                    <span className="plan__n" aria-hidden="true">
                      {p.n}
                    </span>
                    <span className="plan__name">
                      <span className="sr-only">{p.label}, </span>
                      {p.short}
                    </span>
                  </>
                ) : (
                  <span className="plan__name plan__name--place">{p.label}</span>
                )}
                {isHere || seen ? (
                  <span className="plan__marks">
                    {seen && !isHere ? <Tick /> : null}
                    {isHere ? <span className="plan__here" aria-hidden="true" /> : null}
                  </span>
                ) : null}
                {isHere ? <span className="sr-only">{t.srYouAreHere}</span> : seen ? <span className="sr-only">{t.srVisited}</span> : null}
              </WallLink>
            </li>
          );
        })}
      </ul>
      <p className="plan-legend" aria-hidden="true">
        <span>
          <span className="plan__here" /> {t.youAreHere}
        </span>
        <span>
          <Tick /> {t.visited}
        </span>
      </p>
    </nav>
  );
}
