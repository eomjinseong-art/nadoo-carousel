// 엑스봇 게시 기록(/workspace/shared/nadoo-x/posts.jsonl)을 data/ai-news.json으로 옮긴다.
// 비공개 계정 링크(tweet_url)는 싣지 않는다.
import fs from "node:fs";
const src = process.argv[2] || "/workspace/shared/nadoo-x/posts.jsonl";
const out = new URL("../data/ai-news.json", import.meta.url);
const rows = fs.readFileSync(src, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l));
const seen = new Set();
const items = rows
  .filter((r) => r.topic && !seen.has(r.topic + r.date) && seen.add(r.topic + r.date))
  .map((r) => ({
    date: r.date,
    topic: String(r.topic).trim(),
    text: r.text ? String(r.text).trim() : null,
    sources: (r.sources || []).filter((u) => /^https?:\/\//.test(u)),
    tags: r.tags || [],
  }))
  .sort((a, b) => (a.date < b.date ? 1 : -1));
fs.writeFileSync(out, JSON.stringify(items, null, 2) + "\n");
console.log(`ai-news: ${items.length}개`);
