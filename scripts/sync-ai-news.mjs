// 엑스봇 게시 기록(/workspace/shared/nadoo-x/posts.jsonl)을 data/ai-news.json으로 옮긴다.
// 비공개 계정 링크(tweet_url)는 싣지 않는다.
// 새 항목에는 OpenAI(gpt-4o-mini)로 한국어 제목·요약·핵심 포인트(title_ko, summary_ko, points_ko)를 만든다.
// 이미 요약이 있는 항목은 기존 값을 그대로 유지한다(재생성하려면 --refresh).
// 키: 환경변수 OPENAI_API_KEY(sk-로 시작할 때) → 없으면 박스 비밀 파일(card.OPENAI_API_KEY_FIXED).
import fs from "node:fs";

const args = process.argv.slice(2);
const refresh = args.includes("--refresh");
const noAi = args.includes("--no-ai");
const src = args.find((a) => !a.startsWith("--")) || "/workspace/shared/nadoo-x/posts.jsonl";
const out = new URL("../data/ai-news.json", import.meta.url);
const MODEL = process.env.AI_NEWS_MODEL || "gpt-4o-mini";

function loadKey() {
  // 박스 셸에는 형식이 틀린 OPENAI_API_KEY가 잡혀 있을 수 있어 sk- 로 시작할 때만 환경변수를 쓴다.
  const env = process.env.OPENAI_API_KEY;
  if (env && env.startsWith("sk-")) return env;
  const file = process.env.BOX_SECRETS || "/home/box/agent-data/box-secrets.json";
  try {
    const s = JSON.parse(fs.readFileSync(file, "utf8"));
    return s?.card?.OPENAI_API_KEY_FIXED || null;
  } catch {
    return null;
  }
}

const keyOf = (r) => `${r.date}|${String(r.topic).trim()}`;

let prev = new Map();
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
    if (old?.summary_ko && !refresh) {
      return { ...base, title_ko: old.title_ko, summary_ko: old.summary_ko, points_ko: old.points_ko || [] };
    }
    return base;
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

async function fetchArticle(url) {
  try {
    const ctl = AbortSignal.timeout(15000);
    const res = await fetch(url, { signal: ctl, headers: { "user-agent": "Mozilla/5.0 (compatible; NadooAiBot/1.0)" } });
    if (!res.ok) return "";
    const html = await res.text();
    return html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<(nav|footer|header|svg)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 9000);
  } catch {
    return "";
  }
}

async function summarize(item, key) {
  const article = item.sources[0] ? await fetchArticle(item.sources[0]) : "";
  const prompt = [
    `주제(메모): ${item.topic}`,
    item.text ? `나두Ai 게시글: ${item.text}` : "",
    item.sources[0] ? `원문 URL: ${item.sources[0]}` : "",
    article ? `원문 본문(발췌):\n${article}` : "(원문 본문을 가져오지 못함. 주제 메모와 게시글만 근거로 쓰고 추측은 피할 것)",
  ].filter(Boolean).join("\n\n");
  const body = {
    model: MODEL,
    temperature: 0.3,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "너는 한국 독자를 위한 AI 뉴스 에디터야. 영어 원문을 읽지 않아도 이해되도록 쉬운 한국어로 정리해. " +
          "JSON으로만 답해: {\"title_ko\": 한국어 제목(35자 이내, 회사·제품명은 원어 병기 가능), " +
          "\"summary_ko\": 3~5문장의 한국어 요약(무엇이 나왔는지, 무엇을 할 수 있는지, 누가 쓸 만한지; 해요체), " +
          "\"points_ko\": 핵심 포인트 3~4개 배열(각 40자 이내 짧은 문장)}. 원문에 없는 수치·날짜는 지어내지 마.",
      },
      { role: "user", content: prompt },
    ],
  };
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const data = await res.json();
  const j = JSON.parse(data.choices[0].message.content);
  const points = Array.isArray(j.points_ko) ? j.points_ko.map((p) => String(p).trim()).filter(Boolean).slice(0, 5) : [];
  if (!j.title_ko || !j.summary_ko) throw new Error("빈 응답");
  return { title_ko: String(j.title_ko).trim(), summary_ko: String(j.summary_ko).trim(), points_ko: points };
}

const todo = items.filter((it) => !it.summary_ko);
if (todo.length && !noAi) {
  const key = loadKey();
  if (!key) {
    console.warn(`ai-news: OpenAI 키가 없어 ${todo.length}개 항목은 요약 없이 저장합니다.`);
  } else {
    let ok = 0;
    for (const it of todo) {
      try {
        Object.assign(it, await summarize(it, key));
        ok++;
      } catch (e) {
        console.warn(`ai-news: 요약 실패 (${it.topic}): ${e.message}`);
      }
    }
    console.log(`ai-news: 한국어 요약 ${ok}/${todo.length}개 생성`);
  }
}

fs.writeFileSync(out, JSON.stringify(items, null, 2) + "\n");
console.log(`ai-news: ${items.length}개 (요약 있음 ${items.filter((i) => i.summary_ko).length}개)`);
