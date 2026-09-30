const COUPANG_PARTNERS_URL = "https://link.coupang.com/a/hsdzLh1vB6";

/** 하단 쿠팡 파트너스 배너 (광고). 링크는 수익 추적용이므로 수정하지 마세요. */
export function CoupangBanner({ className = "" }: { className?: string }) {
  return (
    <aside aria-label="광고" className={` ${className}`}>
      <a
        href={COUPANG_PARTNERS_URL}
        target="_blank"
        rel="sponsored noopener noreferrer nofollow"
        className="flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink transition-colors hover:border-moss hover:text-moss"
      >
        <span className="shrink-0 rounded border border-line px-1.5 py-0.5 text-[10px] text-muted">
          광고
        </span>
        <span className="min-w-0 flex-1">슬라이드는 여기서 넘기고, 필요한 건 쿠팡에서 담아 보세요</span>
        <span aria-hidden="true" className="shrink-0 text-moss">
          →
        </span>
      </a>
    </aside>
  );
}
