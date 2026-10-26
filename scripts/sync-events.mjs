// Pulls the public Brooklyn College campus events feed (Campus Groups RSS)
// into src/data/campus-events.json. The feed sends no CORS headers, so the
// browser can't read it directly — we snapshot it at build time instead.
//
// Runs before every build. If the feed is unreachable, the existing snapshot
// is kept so a flaky network never breaks a deploy.
import { readFile, writeFile } from "node:fs/promises";

const FEED = "https://www.clubs.brooklyn.cuny.edu/rss_events";
const OUT = new URL("../src/data/campus-events.json", import.meta.url);

const decode = (text) =>
  text
    .replace(/^<!\[CDATA\[|\]\]>$/g, "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");

const field = (item, tag) => {
  const match = item.match(new RegExp(String.raw`<${tag}(?:\s[^>]*)?>([\s\S]*?)</${tag}>`));
  return match ? decode(match[1]).trim() : "";
};

async function main() {
  let xml;
  try {
    const res = await fetch(FEED);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    xml = await res.text();
  } catch (error) {
    const existing = await readFile(OUT, "utf8").catch(() => "[]");
    console.warn(
      `sync-events: feed unavailable (${error.message}); keeping ${JSON.parse(existing).length} cached events`
    );
    return;
  }

  const events = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
    .map(([, item]) => {
      const location = field(item, "eventLocation");
      return {
        id: field(item, "eventId"),
        title: field(item, "title"),
        group: field(item, "group"),
        groupType: field(item, "groupType") || "Other",
        category: field(item, "category"),
        start: field(item, "eventStartDateTime"),
        end: field(item, "eventEndDateTime"),
        allDay: field(item, "allDayEvent") === "1",
        // Most venues are hidden from signed-out visitors; drop the placeholder.
        location: location.startsWith("Private Location") ? "" : location.split(",")[0],
        photo: field(item, "eventPhotoFullUrl"),
        link: field(item, "eventLink"),
      };
    })
    .filter((event) => event.id && event.title && event.start)
    .sort((a, b) => a.start.localeCompare(b.start));

  await writeFile(OUT, JSON.stringify(events, null, 2) + "\n");
  console.log(`sync-events: wrote ${events.length} events`);
}

main();
