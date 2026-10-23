import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { isModifiedClick, useGo } from "../lib/scroll";
import type { WallId } from "../lib/walls";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  hash?: string;
  wall?: WallId;
  children: ReactNode;
};

/**
 * A link to a place in the gallery. Plain `<a href>` (works without JS, opens in a
 * new tab on modified clicks); a normal click walks there with the colour sweep.
 */
export function WallLink({ to, hash, wall, children, onClick, ...rest }: Props) {
  const go = useGo();
  const href = hash ? `${to === "/" ? "/" : to}#${hash}` : to;
  return (
    <a
      {...rest}
      href={href}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(e);
        if (e.defaultPrevented || isModifiedClick(e)) return;
        e.preventDefault();
        void go({ to, hash, wall });
      }}
    >
      {children}
    </a>
  );
}
