import type { CSSProperties } from "react";
import type { Photo } from "../lib/photos";

/**
 * A photo hung with a mat. Its size comes from the layout around it (the text
 * beside it sets the row height), never from the viewport; the image covers the
 * window at its focal point. gallery-motion.ts draws the edge, fills the mat,
 * then fades the image up.
 */
export function Frame({
  photo,
  alt,
  sizes,
  className,
  style,
  loading = "lazy",
}: {
  photo: Photo;
  alt: string;
  sizes: string;
  className?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
}) {
  return (
    <figure className={`frame ${className ?? ""}`} style={{ "--focal": photo.focal, ...style } as CSSProperties}>
      <div className="frame-mat">
        <div className="frame-window">
          <div className="frame-drift">
            <img
              className="frame-img"
              src={photo.src}
              srcSet={photo.srcSet}
              sizes={sizes}
              width={photo.width}
              height={photo.height}
              alt={alt}
              loading={loading}
              decoding="async"
            />
          </div>
        </div>
      </div>
      <span className="frame-edge frame-edge--t" aria-hidden="true" />
      <span className="frame-edge frame-edge--r" aria-hidden="true" />
      <span className="frame-edge frame-edge--b" aria-hidden="true" />
      <span className="frame-edge frame-edge--l" aria-hidden="true" />
    </figure>
  );
}
