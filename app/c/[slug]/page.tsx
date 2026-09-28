import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CarouselViewer } from "@/components/CarouselViewer";
import { Disclosure } from "@/components/Disclosure";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { getCarousel, getNeighbors, getVisibleCarousels } from "@/lib/carousels";
import { getProducts } from "@/lib/products";
import { formatDate, relatedProducts, tagHref, withUtm } from "@/lib/shared";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getVisibleCarousels().map((carousel) => ({ slug: carousel.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const carousel = getCarousel(slug);
  if (!carousel) {
    return { title: "없는 캐러셀", robots: { index: false, follow: false } };
  }
  const image = absoluteUrl(carousel.cover);
  const canonical = `/c/${carousel.slug}`;
  return {
    title: carousel.title,
    description: carousel.summary || carousel.title,
    alternates: { canonical },
    openGraph: {
      title: carousel.title,
      description: carousel.summary || carousel.title,
      type: "article",
      url: canonical,
      images: [{ url: image, width: 1080, height: 1350, alt: carousel.title }],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
}

export default async function CarouselPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const carousel = getCarousel(slug);
  if (!carousel) notFound();

  const { newer, older } = getNeighbors(carousel.slug);
  const products = relatedProducts(carousel.tags, getProducts(), 4);
  const pageUrl = absoluteUrl(`/c/${carousel.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: carousel.title,
    description: carousel.summary,
    datePublished: carousel.date,
    image: [absoluteUrl(carousel.cover)],
    inLanguage: "ko-KR",
    keywords: carousel.tags.join(", "),
    author: { "@type": "Organization", name: "나두Ai", url: absoluteUrl("/") },
    publisher: { "@type": "Organization", name: "나두Ai" },
    mainEntityOfPage: pageUrl,
    articleBody: carousel.slides.map((slide) => slide.text).join("\n\n"),
  };

  return (
    <article className="pt-4">
      <JsonLd data={jsonLd} />
      <CarouselViewer
        title={carousel.title}
        slides={carousel.slides.map((slide) => ({ src: slide.src, alt: slide.heading || carousel.title }))}
      />
      <header className="mt-6">
        <time dateTime={carousel.date} className="text-xs text-muted">
          {formatDate(carousel.date)}
        </time>
        <h1 className="mt-2 text-2xl font-bold leading-snug">{carousel.title}</h1>
        {carousel.summary ? <p className="mt-3 text-sm leading-6 text-muted">{carousel.summary}</p> : null}
        {carousel.tags.length > 0 ? (
          <p className="mt-3 flex flex-wrap gap-2">
            {carousel.tags.map((tag) => (
              <Link key={tag} href={tagHref(tag)} className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-moss">
                #{tag}
              </Link>
            ))}
          </p>
        ) : null}
      </header>
      <div className="mt-8 space-y-8">
        {carousel.slides.map((slide, index) => (
          <section key={slide.src}>
            <h2 className="text-lg font-bold leading-snug">{slide.heading || `슬라이드 ${index + 1}`}</h2>
            {slide.body ? <p className="mt-2 text-sm leading-7 whitespace-pre-line">{slide.body}</p> : null}
          </section>
        ))}
      </div>
      {carousel.tiktokUrl ? (
        <p className="mt-8">
          <a href={withUtm(carousel.tiktokUrl)} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-moss underline-offset-2 hover:underline">
            틱톡에서 이어서 보기
          </a>
        </p>
      ) : null}
      <nav aria-label="다른 캐러셀" className="mt-8 grid grid-cols-2 gap-3 border-t border-line pt-4">
        {newer ? (
          <Link href={`/c/${newer.slug}`} className="text-sm leading-5">
            <span className="block text-[11px] text-muted">최신 글</span>
            <span className="mt-1 line-clamp-2 font-semibold">{newer.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {older ? (
          <Link href={`/c/${older.slug}`} className="text-right text-sm leading-5">
            <span className="block text-[11px] text-muted">지난 글</span>
            <span className="mt-1 line-clamp-2 font-semibold">{older.title}</span>
          </Link>
        ) : null}
      </nav>
      {products.length > 0 ? (
        <section className="mt-10" aria-labelledby="related-desk">
          <h2 id="related-desk" className="text-lg font-bold">
            데스크에서 같이 두면 좋은 것
          </h2>
          <Disclosure className="mt-2" />
          <ul className="mt-3 grid grid-cols-2 gap-3">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} heading="h3" />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
