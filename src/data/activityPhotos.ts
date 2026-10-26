// Every image in src/assets/activities is picked up at build time — drop a
// photo in that folder and it appears in the homepage gallery and on /media.
const files = import.meta.glob<string>(
  "../assets/activities/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
);

const caption = (path: string) =>
  path
    .split("/")
    .pop()!
    .replace(/\.[^.]+$/, "")
    // A leading "01-" only sets the order; drop it from the caption.
    .replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

export const activityPhotos = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src, caption: caption(path) }));

export type ActivityPhoto = (typeof activityPhotos)[number];
