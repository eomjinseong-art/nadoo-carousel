// 엑스봇 게시 기록(/workspace/shared/nadoo-x/posts.jsonl)을 data/ai-news.json으로 옮긴다.
// 비공개 계정 링크(tweet_url)는 싣지 않는다. 유료 API 호출은 하지 않는다.
//
// 2단계 흐름 (한국어 제목·요약·포인트는 루틴을 실행하는 어시스턴트가 직접 작성):
//   1) node scripts/sync-ai-news.mjs --prepare [posts.jsonl] [--out=파일] [--refresh]
//      → 요약이 필요한 새 항목을 대기 파일에 쓴다 (기본 /workspace/shared/nadoo-x/ai-news-pending.json).
//        요약이 필요 없는 항목은 바로 data/ai-news.json에 반영한다.
//   2) 대기 파일의 각 item에서 title_ko / summary_ko / points_ko 를 채운다.
//   3) node scripts/sync-ai-news.mjs --apply <대기파일> [posts.jsonl]
//      → 검증 후 data/ai-news.json에 병합한다 (빈 항목은 요약 없이 남김).
import fs from "node:fs";

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const opt = (n) => args.find((a) => a.startsWith(`--${n}=`))?.split("=").slice(1).join("=");
const refresh = flag("refresh");
const applyIdx = args.indexOf("--apply");
const applyFile = opt("apply") || (applyIdx >= 0 && args[applyIdx + 1] && !args[applyIdx + 1].startsWith("--") ? args[applyIdx + 1] : null);
const mode = flag("prepare") ? "prepare" : applyFile ? "apply" : null;
const positional = args.filter((a, i) => !a.startsWith("--") && !(applyIdx >= 0 && i === applyIdx + 1));
const src = positional[0] || "/workspace/shared/nadoo-x/posts.jsonl";
const PENDING = opt("out") || "/workspace/shared/nadoo-x/ai-news-pending.json";
const out = new URL("../data/ai-news.json", import.meta.url);

if (!mode) {
  console.error("사용법: --prepare [posts.jsonl] [--out=파일] | --apply <대기파일> [posts.jsonl]");
  process.exit(2);
}

const keyOf = (r) => `${r.date}|${String(r.topic).trim()}`;
const prev = new Map();
try {
  for (const it of JSON.parse(fs.readFileSync(out, "utf8"))) prev.set(keyOf(it), it);
} catch {}

const rows = fs.readFileSync(src, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l));
const seen = new Set();
const items = rows
  .filter((r) => r.topic && !seen.has(r.topic + r.date) && seen.add(r.topic + r.date))
  .map((r) => {
    const base = {
      date: r.date,
      topic: String(r.topic).trim(),
      text: r.text ? String(r.text).trim() : null,
      sources: (r.sources || []).filter((u) => /^https?:\/\//.test(u)),
      tags: r.tags || [],
    };
    const old = prev.get(keyOf(base));
    if (old?.summary_ko && !(refresh && mode === "prepare")) {
      return { ...base, title_ko: old.title_ko, summary_ko: old.summary_ko, points_ko: old.points_ko || [] };
    }
    return base;
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

function save() {
  fs.writeFileSync(out, JSON.stringify(items, null, 2) + "\n");
  console.log(`ai-news: ${items.length}개 (요약 있음 ${items.filter((i) => i.summary_ko).length}개)`);
}

const INSTRUCTIONS =
  "한국 독자를 위한 AI 뉴스 에디터로서 각 item의 title_ko, summary_ko, points_ko를 채우세요. " +
  "title_ko: 한국어 제목(35자 이내, 회사·제품명 원어 병기 가능). " +
  "summary_ko: 3~5문장 한국어 요약(무엇이 나왔는지, 무엇을 할 수 있는지, 누가 쓸 만한지; 해요체). " +
  "points_ko: 핵심 포인트 3~4개 배열(각 40자 이내). 원문(sources)에 없는 수치·날짜는 지어내지 마세요. " +
  "다른 필드는 바꾸지 마세요. 채우지 못한 항목은 비워 두면 요약 없이 저장됩니다.";

if (mode === "prepare") {
  const todo = items.filter((it) => !it.summary_ko);
  save();
  const pending = {
    created_at: new Date().toISOString(),
    instructions: INSTRUCTIONS,
    items: todo.map((it) => ({ date: it.date, topic: it.topic, text: it.text, sources: it.sources, title_ko: "", summary_ko: "", points_ko: [] })),
  };
  fs.writeFileSync(PENDING, JSON.stringify(pending, null, 2) + "\n");
  console.log(`ai-news: 요약 필요 ${todo.length}개 → ${PENDING}`);
  process.exit(0);
}

// apply
const pending = JSON.parse(fs.readFileSync(applyFile, "utf8"));
const list = Array.isArray(pending) ? pending : pending.items || [];
const byKey = new Map(items.map((it) => [keyOf(it), it]));
let ok = 0, bad = 0;
for (const p of list) {
  const it = byKey.get(keyOf(p));
  const title = String(p.title_ko || "").trim();
  const summary = String(p.summary_ko || "").trim();
  const points = Array.isArray(p.points_ko) ? p.points_ko.map((x) => String(x).trim()).filter(Boolean).slice(0, 5) : [];
  if (!it) { console.warn(`ai-news: 원본에 없는 항목 건너뜀 (${p.topic})`); bad++; continue; }
  if (!title && !summary) continue;
  const errs = [];
  if (!title) errs.push("title_ko 없음");
  if (!summary) errs.push("summary_ko 없음");
  if (!/[가-힣]/.test(title + summary)) errs.push("한국어 아님");
  if (title.length > 60) errs.push("title_ko 너무 김");
  if (errs.length) { console.warn(`ai-news: 검증 실패 (${p.topic}): ${errs.join(", ")}`); bad++; continue; }
  Object.assign(it, { title_ko: title, summary_ko: summary, points_ko: points });
  ok++;
}
save();
console.log(`ai-news: 적용 ${ok}개, 실패 ${bad}개`);
if (bad) process.exitCode = 1;
