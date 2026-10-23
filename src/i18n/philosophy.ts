import type { About } from "../content/types";

/** Her philosophy, sentence by sentence, from about.ts (either language). Pure, so it can be tested in Node. */

/** Split a paragraph into sentences without breaking "(1902)" or "e.g.". */
function sentences(p: string): string[] {
  return p
    .split(/(?<=[.!?»”"])\s+(?=[A-ZÀ-ÖØ-Þ«“"])/u)
    .map((s) => s.trim())
    .filter(Boolean);
}

function paragraphs(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export type Philosophy = {
  dewey: string[];
  bagley: string[];
  meet?: string;
  null2003: string[];
  belonging?: string;
};

/**
 * Finds her sentences by the names they start with, so it works in English and in
 * the French text alike:
 * - the paragraph with "Dewey (1902)": Dewey's and Bagley's sentences, and from
 *   "Null (2003)" to the end of the paragraph
 * - the next paragraph that names Dewey again: its Dewey and Bagley sentences, and
 *   its last sentence is her line where the two meet
 * - the paragraph under the philosophy heading: its last sentence is her
 *   belonging/rigour line
 */
export function philosophyOf(about: About): Philosophy {
  const paras = paragraphs(about.body);
  const out: Philosophy = { dewey: [], bagley: [], null2003: [] };
  const i = paras.findIndex((p) => p.includes("Dewey (1902)"));
  if (i >= 0) {
    const s = sentences(paras[i] ?? "");
    for (const x of s) {
      if (x.startsWith("Dewey")) out.dewey.push(x);
      if (x.startsWith("Bagley")) out.bagley.push(x);
    }
    const n = s.findIndex((x) => x.startsWith("Null"));
    if (n >= 0) out.null2003 = s.slice(n);
    const j = paras.findIndex((p, k) => k > i && /(^|\s)Dewey\b/.test(p));
    if (j >= 0) {
      const t = sentences(paras[j] ?? "");
      for (const x of t) {
        if (x.startsWith("Dewey")) out.dewey.push(x);
        if (x.startsWith("Bagley")) out.bagley.push(x);
      }
      out.meet = t[t.length - 1];
    }
  }
  const h = paras.findIndex((p) => /^#{1,6}\s.*philosoph/i.test(p));
  const after = h >= 0 ? paras[h + 1] : undefined;
  if (after) {
    const s = sentences(after);
    out.belonging = s[s.length - 1];
  }
  return out;
}

