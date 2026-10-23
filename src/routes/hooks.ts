import { useEffect } from "react";
import { placeOfScene } from "../lib/places";
import { markVisited } from "../lib/visited";
import { useScene } from "../lib/wall-driver";

export function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

/** Tick a place on the floor plan once you've been in it. */
export function useMarkVisitedScenes(): void {
  const scene = useScene();
  useEffect(() => {
    const place = placeOfScene(scene);
    if (!place) return;
    // Visited means you stayed a moment, not that you scrolled past.
    const t = window.setTimeout(() => markVisited(place), 1200);
    return () => window.clearTimeout(t);
  }, [scene]);
}
