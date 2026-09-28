import type { Metadata } from "next";
import { Disclosure } from "@/components/Disclosure";
import { JsonLd } from "@/components/JsonLd";
import { ShopBrowser } from "@/components/ShopBrowser";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "데스크 추천",
  description: "모니터 받침대, 키보드, 조명처럼 책상 위에 두는 사무용품과 데스크테리어.",
  alternates: { canonical: "/desk" },
  openGraph: { title: "데스크 추천", url: "/desk" },
};

export default function DeskPage() {
  const products = getProducts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "데스크 추천",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: product.link,
    })),
  };

  return (
    <section className="pt-6">
      <JsonLd data={jsonLd} />
      <p className="text-xs font-semibold text-moss">데스크테리어 · 사무용품</p>
      <h1 className="mt-2 text-[1.75rem] font-bold leading-tight">데스크 추천</h1>
      <p className="mt-2 text-sm leading-6 text-muted">
        책상 위에 두는 물건을 분류해 두었습니다. 순서는 이 브라우저 세션 안에서 섞입니다.
      </p>
      <Disclosure className="mt-3" />
      <div className="mt-4">
        <ShopBrowser products={products} />
      </div>
    </section>
  );
}
