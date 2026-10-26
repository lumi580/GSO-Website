import snapshot from "./campus-events.json";

/** One event from the Brooklyn College Campus Groups feed. */
export type CampusEvent = {
  id: string;
  title: string;
  group: string;
  groupType: string;
  category: string;
  start: string;
  end: string;
  allDay: boolean;
  location: string;
  photo: string;
  link: string;
};

/** Every event in the latest snapshot (refreshed by `npm run sync-events`). */
export const campusEvents = snapshot as CampusEvent[];

/** Events that haven't ended yet — the snapshot ages, so filter at render time. */
export const upcomingEvents = (now = Date.now()) =>
  campusEvents.filter((event) => new Date(event.end || event.start).getTime() >= now);

const zone = { timeZone: "America/New_York" } as const;

export const formatDay = (iso: string) => ({
  month: new Date(iso).toLocaleString("en-US", { ...zone, month: "short" }),
  day: new Date(iso).toLocaleString("en-US", { ...zone, day: "numeric" }),
  weekday: new Date(iso).toLocaleString("en-US", { ...zone, weekday: "short" }),
});

export const formatTime = (event: CampusEvent) => {
  if (event.allDay) return "All day";
  const time = (iso: string) =>
    new Date(iso)
      .toLocaleString("en-US", { ...zone, hour: "numeric", minute: "2-digit" })
      .replace(":00", "");
  return event.end ? `${time(event.start)} – ${time(event.end)}` : time(event.start);
};

export const monthKey = (iso: string) =>
  new Date(iso).toLocaleString("en-US", { ...zone, month: "long", year: "numeric" });
