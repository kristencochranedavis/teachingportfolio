/**
 * Markdown bodies (resources) rendered with `marked`. Content is Kristen's own,
 * from src/content (no user input), so the HTML is trusted. Headings are shifted
 * down to sit under the page's own outline.
 */
import { Marked, type Tokens } from "marked";

function make(shift: number) {
  const md = new Marked({ gfm: true, breaks: false });
  md.use({
    renderer: {
      heading(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, token: Tokens.Heading) {
        const level = Math.min(6, token.depth + shift);
        return `<h${level} class="md-h md-h${level}">${this.parser.parseInline(token.tokens)}</h${level}>\n`;
      },
      link(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, token: Tokens.Link) {
        const text = this.parser.parseInline(token.tokens);
        const href = token.href.replace(/"/g, "&quot;");
        const external = /^https?:/i.test(token.href);
        return `<a href="${href}"${external ? ' rel="noopener"' : ""}>${text}</a>`;
      },
    },
  });
  return md;
}

const cache = new Map<number, Marked>();

function instance(shift: number): Marked {
  let md = cache.get(shift);
  if (!md) {
    md = make(shift);
    cache.set(shift, md);
  }
  return md;
}

export function renderMarkdown(src: string, shift = 0): string {
  return instance(shift).parse(src, { async: false });
}

/** Inline markdown (e.g. `*italic*` titles in references). */
export function renderInline(src: string): string {
  return instance(0).parseInline(src, { async: false });
}

export function Markdown({ source, shift = 0, className }: { source: string; shift?: number; className?: string }) {
  return <div className={className ?? "prose-wall"} dangerouslySetInnerHTML={{ __html: renderMarkdown(source, shift) }} />;
}

export function InlineMarkdown({ source }: { source: string }) {
  return <span dangerouslySetInnerHTML={{ __html: renderInline(source) }} />;
}
