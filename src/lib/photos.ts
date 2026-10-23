/**
 * Kristen's photos, cropped by scripts/crop-photos.py into public/photos (two widths
 * each). Width/height are the intrinsic size of the large file, so the browser
 * reserves the right box before the image loads. `focal` is the object-position. Alt text lives in src/i18n/ui.ts (photo*Alt) so it follows the language.
 */
export type Photo = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  focal: string;
};

export const PHOTOS = {
  museum: {
    src: "/photos/museum-920.webp",
    srcSet: "/photos/museum-560.webp 560w, /photos/museum-920.webp 920w",
    width: 920,
    height: 1150,
    focal: "38% 38%",
  },
  // Portrait for the "Who is Kristen" section.
  overlook: {
    src: "/photos/overlook-800.webp",
    srcSet: "/photos/overlook-480.webp 480w, /photos/overlook-800.webp 800w",
    width: 800,
    height: 1000,
    focal: "62% 38%",
  },
  // Closing photo for the exit section (cropped tightly around Kristen).
  snow: {
    src: "/photos/snow-756.webp",
    srcSet: "/photos/snow-480.webp 480w, /photos/snow-756.webp 756w",
    width: 756,
    height: 1115,
    focal: "45% 58%",
  },
} as const satisfies Record<string, Photo>;
