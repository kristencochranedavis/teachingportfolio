import { useT } from "../i18n/lang";
import { Entrance } from "../sections/Entrance";
import { Who } from "../sections/Who";
import { Philosophy } from "../sections/Philosophy";
import { RoomIndex } from "../sections/RoomIndex";
import { ReadingRoom } from "../sections/ReadingRoom";
import { Exit } from "../sections/Exit";
import { useDocumentTitle, useMarkVisitedScenes } from "./hooks";

export function Home() {
  const t = useT();
  useDocumentTitle(t.siteTitle);
  useMarkVisitedScenes();
  return (
    <>
      <Entrance />
      <Who />
      <Philosophy />
      <RoomIndex />
      <ReadingRoom />
      <Exit />
    </>
  );
}
