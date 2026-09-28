import Link from "next/link";
import { Disclosure } from "@/components/Disclosure";
import { HomeExplorer } from "@/components/HomeExplorer";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { getTags, getVisibleCarousels } from "@/lib/carousels";
import { getProducts } from "@/lib/products";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/shared";
import { absoluteUrl, siteUrl } from "@/lib/site";

export default function HomePage() {
  const carousels = getVisibleCarousels();
  const tags = getTags();
  const products = getProducts().slice(0, 8);
  const cards = carousels.map((carousel) => ({
    slug: carousel.slug,
    title: carousel.title,
    date: carousel.date,
    tags: carousel.tags,
    cover: carousel.cover,
    search: [
      carousel.title,
      carousel.summary,
      carousel.caption,
      carousel.sources,
      carousel.tags.join(" "),
      carousel.slides.map((slide) => slide.text).join("\n"),
    ]
      .join("\n")
      .toLowerCase(),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: siteUrl(),
        description: SITE_DESCRIPTION,
        inLanguage: "ko-KR",
      },
      {
        "@type": "ItemList",
        name: "최신 캐러셀",
        itemListElement: carousels.map((carousel, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/c/${carousel.slug}`),
          name: carousel.title,
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="pt-6">
        <p className="text-xs font-semibold text-moss">틱톡 없이 읽는 AI 슬라이드</p>
        <h1 className="mt-2 text-[1.75rem] font-bold leading-tight tracking-tight">나두Ai 캐러셀</h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          매일 쌓이는 AI 캐러셀을 카드로 넘기고, 같은 내용을 글로 다시 읽을 수 있습니다. 계정 없이 보면 됩니다.
        </p>
      </section>
      <HomeExplorer cards={cards} tags={tags} />
      {products.length > 0 ? (
        <section className="mt-10" aria-labelledby="desk-strip-title">
          <div className="flex items-end justify-between gap-3">
            <h2 id="desk-strip-title" className="text-lg font-bold">
              데스크 추천
            </h2>
            <Link href="/desk" className="text-sm font-semibold text-moss">
              전체 보기
            </Link>
          </div>
          <Disclosure className="mt-2" />
          <ul className="mt-3 flex gap-3 overflow-x-auto pb-2">
            {products.map((product) => (
              <li key={product.id} className="w-44 shrink-0">
                <ProductCard product={product} heading="h3" />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}
