export const SITE_NAME = "나두Ai 캐러셀";

export const SITE_DESCRIPTION =
  "틱톡을 쓰지 않아도 읽을 수 있는 AI 캐러셀 아카이브. 슬라이드와 전문, 그리고 데스크테리어 추천.";

export const DISCLOSURE =
  "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";

export const UTM_SOURCE = "nadoo-carousel";

/** 데스크 메뉴는 화면 대신 이 쿠팡 링크로 바로 이동합니다. /desk 도 next.config.ts 에서 같은 곳으로 보냅니다. */
export const DESK_URL = "https://link.coupang.com/a/hsdzLh1vB6";

export const DESK_CATEGORIES = [
  "모니터 받침대",
  "키보드·마우스",
  "조명",
  "정리함·수납",
  "의자·쿠션",
  "데스크 매트",
  "케이블 정리",
  "식물·소품",
  "기타",
] as const;

export const NAV_LINKS: ReadonlyArray<{ href: string; label: string; external?: boolean }> = [
  { href: "/", label: "캐러셀" },
  { href: "/news", label: "AI 소식" },
  { href: DESK_URL, label: "데스크", external: true },
  { href: "/about", label: "소개" },
];

export const SISTER_LINKS = [
  { href: "https://ai-tools-site-liart-one.vercel.app", label: "나두Ai 홈" },
  { href: "https://tinalinkeom.vercel.app", label: "Tina 링크 허브" },
  { href: "https://tinalinkeom.vercel.app/ebook", label: "전자책" },
  { href: "https://nadoo-ai-lab.vercel.app", label: "나두Ai 랩" },
  { href: "https://nadoo-ai-autom.vercel.app", label: "나두Ai 도구 지도" },
  { href: "https://nadoo-automation.vercel.app", label: "나두Ai 자동화" },
] as const;

const TAG_CATEGORIES: Record<string, string[]> = {
  ChatGPT: ["키보드·마우스", "조명", "모니터 받침대"],
  업무자동화: ["케이블 정리", "키보드·마우스", "모니터 받침대"],
  생산성: ["모니터 받침대", "의자·쿠션", "조명"],
  디자인: ["모니터 받침대", "데스크 매트", "조명"],
  글쓰기: ["조명", "의자·쿠션", "데스크 매트"],
  영상: ["조명", "모니터 받침대", "케이블 정리"],
};

export type Product = {
  id: string;
  category: string;
  name: string;
  price: number | null;
  imageUrl: string;
  link: string;
  badge: string;
  memo: string;
};

export function withUtm(href: string) {
  try {
    const url = new URL(href);
    if (url.protocol !== "http:" && url.protocol !== "https:") return href;
    url.searchParams.set("utm_source", UTM_SOURCE);
    return url.toString();
  } catch {
    return href;
  }
}

export function formatPrice(price: number | null) {
  if (price == null || Number.isNaN(price)) return "";
  return `${price.toLocaleString("ko-KR")}원`;
}

export function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(date)
      .map((part) => [part.type, part.value]),
  );
  const day = `${parts.year}.${parts.month}.${parts.day}`;
  return /T\d{2}:\d{2}/.test(iso) ? `${day} ${parts.hour}:${parts.minute}` : day;
}

export function kstStamp(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    const digits = iso.replace(/\D/g, "");
    return { day: digits.slice(0, 8) || "date", time: digits.slice(8, 12) || "0000" };
  }
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(date)
      .map((part) => [part.type, part.value]),
  );
  return { day: `${parts.year}${parts.month}${parts.day}`, time: `${parts.hour}${parts.minute}` };
}

export function routeSlugFor(postSlug: string, date: string, used: Set<string>) {
  const base = postSlug.trim() || "carousel";
  if (!used.has(base)) {
    used.add(base);
    return base;
  }
  const stamp = kstStamp(date);
  const candidates = [`${base}-${stamp.day}`, `${base}-${stamp.day}-${stamp.time}`];
  for (const candidate of candidates) {
    if (!used.has(candidate)) {
      used.add(candidate);
      return candidate;
    }
  }
  let extra = 2;
  let candidate = `${base}-${stamp.day}-${stamp.time}-${extra}`;
  while (used.has(candidate)) {
    extra += 1;
    candidate = `${base}-${stamp.day}-${stamp.time}-${extra}`;
  }
  used.add(candidate);
  return candidate;
}

export function tagHref(tag: string) {
  return `/tags/${encodeURIComponent(tag)}`;
}

export function slideSrc(slug: string, image: string) {
  const file = image.split("/").pop() || image;
  return `/carousels/${slug}/${file.replace(/\.(png|jpe?g|webp)$/i, ".webp")}`;
}

export function relatedProducts(tags: string[], products: Product[], limit = 4) {
  const preferred = new Set(tags.flatMap((tag) => TAG_CATEGORIES[tag] ?? []));
  const preferredItems = products.filter((product) => preferred.has(product.category));
  const others = products.filter((product) => !preferred.has(product.category));
  return preferredItems.concat(others).slice(0, limit);
}
