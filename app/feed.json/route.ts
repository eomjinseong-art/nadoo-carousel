import { getVisibleCarousels } from "@/lib/carousels";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Public JSON feed consumed by the 나두Ai hub (ai-tools-site) to show latest carousels.
export function GET() {
  const base = siteUrl();
  const items = getVisibleCarousels()
    .slice(0, 60)
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      summary: c.summary,
      date: c.date,
      tags: c.tags,
      url: `${base}/c/${c.slug}`,
      cover: `${base}${c.cover}`,
      slideCount: c.slides.length,
    }));
  return Response.json(
    { site: "나두Ai 캐러셀", updated: items[0]?.date ?? null, items },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=300, s-maxage=600",
      },
    },
  );
}
