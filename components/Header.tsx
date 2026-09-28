"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VisitCounter } from "@/components/VisitCounter";
import { NAV_LINKS, SISTER_LINKS, withUtm } from "@/lib/shared";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/c/") || pathname.startsWith("/tags/");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <Link href="/" className="min-w-0">
          <span className="block text-[11px] font-semibold tracking-wide text-moss">나두Ai</span>
          <span className="block text-lg font-bold leading-none">캐러셀</span>
        </Link>
        <VisitCounter />
      </div>
      <nav aria-label="주요" className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-3">
        {NAV_LINKS.map((item) => {
          const current = isCurrent(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current ? "page" : undefined}
              className={`shrink-0 rounded-full px-3 py-2 text-sm font-semibold ${
                current ? "bg-ink text-paper" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <span className="mx-1 w-px shrink-0 self-stretch bg-line" aria-hidden="true" />
        {SISTER_LINKS.map((item) => (
          <a
            key={item.href}
            href={withUtm(item.href)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full px-3 py-2 text-sm text-muted"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
