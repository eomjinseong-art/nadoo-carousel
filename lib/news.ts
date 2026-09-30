import news from "@/data/ai-news.json";

export type NewsItem = {
  date: string;
  topic: string;
  text: string | null;
  sources: string[];
  tags: string[];
  title_ko?: string;
  summary_ko?: string;
  points_ko?: string[];
};

// 메인(나두Ai) 사이트 모달에서 "전체 보기"로 넘어올 때 쓰는 앵커 id.
export function newsId(item: Pick<NewsItem, "date">, index = 0) {
  return `n-${item.date.slice(0, 16).replace(/[^0-9]/g, "")}${index ? `-${index}` : ""}`;
}

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
