import { useT } from "../i18n/lang";
import { FloorPlan } from "../components/FloorPlan";
import { useDocumentTitle } from "./hooks";

export function NotFound() {
  const t = useT();
  useDocumentTitle(t.pageTitle(t.notFoundTitle));
  return (
    <section className="scene notfound" data-wall="entrance" data-scene="" aria-labelledby="nf-title">
      <div className="shell notfound__grid">
        <div>
          <h1 id="nf-title" className="t-h2">
            {t.notFound}
          </h1>
          <p className="t-lede notfound__lede">{t.notFoundLede}</p>
        </div>
        <FloorPlan />
      </div>
    </section>
  );
}
