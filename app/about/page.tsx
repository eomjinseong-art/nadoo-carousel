import type { Metadata } from "next";
import { Disclosure } from "@/components/Disclosure";
import { SISTER_LINKS, withUtm } from "@/lib/shared";

export const metadata: Metadata = {
  title: "소개",
  description: "나두Ai 캐러셀은 AI 이야기를 슬라이드와 글로 모아 두는 아카이브입니다.",
  alternates: { canonical: "/about" },
  openGraph: { title: "소개", url: "/about" },
};

export default function AboutPage() {
  return (
    <article className="max-w-xl pt-6">
      <h1 className="text-[1.75rem] font-bold leading-tight">나두Ai 캐러셀</h1>
      <div className="mt-4 space-y-4 text-sm leading-7 text-ink">
        <p>
          틱톡이나 인스타그램 계정이 없어도, AI와 일에 관한 짧은 슬라이드를 읽고 남겨 둘 수 있는 아카이브입니다.
          카드로 넘긴 뒤 같은 내용이 글로도 남아 검색과 다시 읽기에 쓰입니다.
        </p>
        <p>
          새 캐러셀은 날짜가 적힌 폴더로 쌓이고, 사이트를 빌드할 때 그 폴더가 페이지가 됩니다. 공개하기 어려운 글은
          목록에서 빼면 주소도 함께 내려갑니다.
        </p>
        <p>데스크 코너는 책상 위 사무용품과 데스크테리어를 쿠팡 파트너스 링크로 소개합니다.</p>
      </div>
      <Disclosure className="mt-4" />
      <h2 className="mt-8 text-base font-bold">함께 보면 좋은 사이트</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {SISTER_LINKS.map((item) => (
          <li key={item.href}>
            <a href={withUtm(item.href)} target="_blank" rel="noopener noreferrer" className="text-moss underline-offset-2 hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
