/**
 * Which parts of the gallery this visitor has seen (the floor plan's "visited"
 * marks). Kept in localStorage; every read and write is wrapped, so a private
 * window or blocked storage just means nothing is remembered.
 */
import { useSyncExternalStore } from "react";

const KEY = "kd-visited";
const listeners = new Set<() => void>();
let cache: ReadonlySet<string> | null = null;

function read(): ReadonlySet<string> {
  if (cache) return cache;
  let ids: string[] = [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) ids = parsed.filter((x): x is string => typeof x === "string");
  } catch {
    ids = [];
  }
  cache = new Set(ids);
  return cache;
}

export function markVisited(id: string): void {
  const now = read();
  if (!id || now.has(id)) return;
  const next = new Set(now);
  next.add(id);
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify([...next]));
  } catch {
    // Storage blocked: remembered for this page view only.
  }
  for (const l of listeners) l();
}

export function useVisited(): ReadonlySet<string> {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    read,
  );
}
