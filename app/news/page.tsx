import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { dayKey, getNews, newsId, sourceLabel } from "@/lib/news";

export const metadata: Metadata = {
  title: "AI 소식",
  description: "나두Ai가 매일 골라 한국어로 요약한 AI 소식과 팁. 핵심 포인트와 원문 링크를 함께 모았습니다.",
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
      name: item.title_ko || item.topic,
      url: item.sources[0],
    })),
  };

  return (
    <section className="max-w-2xl pt-6">
      <JsonLd data={jsonLd} />
      <p className="text-xs font-semibold text-moss">매일 업데이트</p>
      <h1 className="mt-2 text-[1.75rem] font-bold leading-tight">AI 소식</h1>
      <p className="mt-2 text-sm leading-6 text-muted">
        나두Ai가 하루 동안 눈여겨본 AI 소식과 쓸 만한 팁을 한국어로 요약합니다. 영어 원문을 읽지 않아도 핵심을 알 수 있어요.
      </p>
      <p className="mt-1 text-xs text-muted">지금까지 {items.length}개</p>

      {days.map((day) => (
        <div key={day.key} className="mt-8">
          <h2 className="border-b border-line pb-2 text-sm font-bold text-ink">{fmtDay(day.key)}</h2>
          <ul className="mt-3 space-y-4">
            {day.items.map((item, i) => (
              <li key={day.key + i} id={newsId(item)} className="scroll-mt-20 rounded-lg border border-line bg-white/60 p-4">
                <p className="text-[15px] font-semibold leading-6 text-ink">{item.title_ko || item.topic}</p>
                {item.summary_ko ? (
                  <>
                    <p className="mt-2 text-sm leading-7 text-ink">{item.summary_ko}</p>
                    {item.points_ko && item.points_ko.length > 0 && (
                      <div className="mt-3 rounded-md bg-moss/5 px-3 py-2">
                        <p className="text-xs font-bold text-moss">핵심 포인트</p>
                        <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[13px] leading-6 text-ink">
                          {item.points_ko.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  item.text && <p className="mt-2 whitespace-pre-line text-sm leading-7 text-ink">{item.text}</p>
                )}
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  {item.sources.map((u) => (
                    <a key={u} href={u} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-2 hover:text-moss hover:underline">
                      원문 보기 · {sourceLabel(u)} ↗
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
