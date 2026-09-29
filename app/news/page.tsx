import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { dayKey, getNews, sourceLabel } from "@/lib/news";

export const metadata: Metadata = {
  title: "AI 소식",
  description: "나두Ai가 매일 골라 한 줄로 정리한 AI 소식과 팁. 원문 링크를 함께 모았습니다.",
  alternates: { canonical: "/news" },
  openGraph: { title: "AI 소식", url: "/news" },
};

function fmtDay(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  const w = "일월화수목금토"[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return `${m}월 ${d}일 (${w})`;
}

export default function NewsPage() {
  const items = getNews();
  const days: { key: string; items: typeof items }[] = [];
  for (const item of items) {
    const key = dayKey(item.date);
    const last = days[days.length - 1];
    if (last && last.key === key) last.items.push(item);
    else days.push({ key, items: [item] });
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "나두Ai AI 소식",
    itemListElement: items.slice(0, 30).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.topic,
      url: item.sources[0],
    })),
  };

  return (
    <section className="max-w-2xl pt-6">
      <JsonLd data={jsonLd} />
      <p className="text-xs font-semibold text-moss">매일 업데이트</p>
      <h1 className="mt-2 text-[1.75rem] font-bold leading-tight">AI 소식</h1>
      <p className="mt-2 text-sm leading-6 text-muted">
        나두Ai가 하루 동안 눈여겨본 AI 소식과 쓸 만한 팁을 한 줄로 정리합니다. 자세한 내용은 원문 링크에서 확인하세요.
      </p>
      <p className="mt-1 text-xs text-muted">지금까지 {items.length}개</p>

      {days.map((day) => (
        <div key={day.key} className="mt-8">
          <h2 className="border-b border-line pb-2 text-sm font-bold text-ink">{fmtDay(day.key)}</h2>
          <ul className="mt-3 space-y-4">
            {day.items.map((item, i) => (
              <li key={day.key + i} className="rounded-lg border border-line bg-white/60 p-4">
                <p className="text-[15px] font-semibold leading-6 text-ink">{item.topic}</p>
                {item.text && <p className="mt-2 whitespace-pre-line text-sm leading-7 text-ink">{item.text}</p>}
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  {item.sources.map((u) => (
                    <a key={u} href={u} target="_blank" rel="noopener noreferrer" className="text-moss underline-offset-2 hover:underline">
                      원문 {sourceLabel(u)}
                    </a>
                  ))}
                  {item.tags.map((t) => (
                    <span key={t} className="text-muted">#{t}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
