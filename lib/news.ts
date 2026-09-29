import news from "@/data/ai-news.json";

export type NewsItem = { date: string; topic: string; text: string | null; sources: string[]; tags: string[] };

export function getNews(): NewsItem[] {
  return news as NewsItem[];
}

export function sourceLabel(url: string) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "x.com" || host === "twitter.com") return `@${u.pathname.split("/")[1]} (X)`;
    return host;
  } catch {
    return url;
  }
}

export function dayKey(iso: string) {
  return iso.slice(0, 10);
}
