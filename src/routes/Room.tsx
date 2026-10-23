import { useContent } from "../i18n/content";
import { useT } from "../i18n/lang";
import { blockLang } from "../i18n/bits";
import { roomWall } from "../lib/walls";
import { Doors, Labels, LessonWall, Ticket, TitleWall } from "../room/RoomParts";
import { NotFound } from "./NotFound";
import { useDocumentTitle, useMarkVisitedScenes } from "./hooks";

export function Room({ n }: { n: string }) {
  const t = useT();
  const { charts } = useContent();
  const num = Number.parseInt(n, 10);
  const local = charts.find((c) => c.item.number === num);
  const chart = local?.item;
  useDocumentTitle(chart ? t.pageTitle(t.roomNamed(chart.number, chart.title)) : t.pageTitle(t.notFoundTitle));
  useMarkVisitedScenes();
  if (!chart || !local) return <NotFound />;
  const wall = roomWall(chart.number);
  return (
    <article key={chart.slug} className="room" data-wall={wall} data-scene={wall} aria-labelledby="room-title">
      <TitleWall chart={chart} fallback={local.fallback} />
      <div lang={blockLang(local.fallback)}>
        <Labels chart={chart} />
        {chart.lesson.stages.length > 0 ? <LessonWall chart={chart} /> : null}
        {chart.exitTicket ? <Ticket ticket={chart.exitTicket} /> : null}
      </div>
      <Doors n={chart.number} />
    </article>
  );
}
