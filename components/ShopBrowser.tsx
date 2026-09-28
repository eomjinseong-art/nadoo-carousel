"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { ProductCard } from "@/components/ProductCard";
import { DESK_CATEGORIES, type Product } from "@/lib/shared";
import { ORDER_KEY, PAGE_SIZE, nextSessionOrder, pageCount, sortByOrder } from "@/lib/shop-order";

const ORDER_EVENT = "nadoo-carousel-order";

function readSavedOrder() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(ORDER_KEY) || "null") as unknown;
    return Array.isArray(saved) ? saved.map(String) : [];
  } catch {
    return [];
  }
}

function publishOrder(ids: string[]) {
  try {
    sessionStorage.setItem(ORDER_KEY, JSON.stringify(ids));
  } catch {
    /* private mode */
  }
  window.dispatchEvent(new Event(ORDER_EVENT));
}

function subscribeOrder(onStoreChange: () => void) {
  window.addEventListener(ORDER_EVENT, onStoreChange);
  return () => window.removeEventListener(ORDER_EVENT, onStoreChange);
}

function readOrderSnapshot() {
  try {
    return sessionStorage.getItem(ORDER_KEY) || "";
  } catch {
    return "";
  }
}

export function ShopBrowser({ products }: { products: Product[] }) {
  const savedRaw = useSyncExternalStore(subscribeOrder, readOrderSnapshot, () => "");
  const [category, setCategory] = useState("전체");
  const [page, setPage] = useState(1);
  const ordered = useMemo(() => {
    if (!savedRaw) return products;
    try {
      const parsed = JSON.parse(savedRaw) as unknown;
      const saved = Array.isArray(parsed) ? parsed.map(String) : [];
      return saved.length ? sortByOrder(products, saved) : products;
    } catch {
      return products;
    }
  }, [products, savedRaw]);

  useEffect(() => {
    const ids = products.map((product) => product.id);
    const saved = readSavedOrder();
    const known = new Set(ids);
    const kept = saved.filter((id) => known.has(id));
    if (kept.length === ids.length) return;
    publishOrder(nextSessionOrder(ids, saved));
  }, [products]);

  const extras = useMemo(() => {
    const known = new Set<string>(DESK_CATEGORIES);
    return [...new Set(products.map((product) => product.category).filter((item) => item && !known.has(item)))];
  }, [products]);
  const tabs = ["전체", ...DESK_CATEGORIES, ...extras];

  const visible = category === "전체" ? ordered : ordered.filter((product) => product.category === category);
  const totalPages = pageCount(visible.length);
  const current = Math.min(page, totalPages);
  const start = (current - 1) * PAGE_SIZE;
  const pageItems = visible.slice(start, start + PAGE_SIZE);

  const selectCategory = (next: string) => {
    const returningToAll = next === "전체" && category !== "전체";
    setCategory(next);
    setPage(1);
    if (returningToAll) {
      publishOrder(nextSessionOrder(ordered.map((product) => product.id), []));
    }
  };

  return (
    <div>
      <div className="sticky top-[6.4rem] z-20 -mx-4 border-b border-line bg-paper/95 px-4 py-2 backdrop-blur">
        <div className="flex gap-2 overflow-x-auto" role="tablist" aria-label="상품 분류">
          {tabs.map((item) => {
            const selected = category === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => selectCategory(item)}
                className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold ${
                  selected ? "bg-ink text-paper" : "bg-card text-muted"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      {pageItems.length === 0 ? (
        <p className="mt-6 rounded-2xl bg-card px-4 py-8 text-center text-sm text-muted">
          {category === "전체" ? "표시할 상품이 없습니다." : `${category} 상품이 없습니다.`}
        </p>
      ) : (
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {pageItems.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
      {visible.length > PAGE_SIZE ? (
        <nav className="mt-6" aria-label="상품 페이지">
          <p className="mb-3 text-center text-[11px] leading-5 text-muted">
            {start + 1}–{Math.min(current * PAGE_SIZE, visible.length)} / {visible.length}개 · {current} / {totalPages}페이지
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1">
            <button
              type="button"
              disabled={current <= 1}
              onClick={() => setPage(current - 1)}
              className="min-h-11 min-w-11 px-3 text-xs font-semibold text-muted disabled:text-line"
            >
              이전
            </button>
            {Array.from({ length: totalPages }, (_, item) => item + 1).map((item) => (
              <button
                key={item}
                type="button"
                aria-current={item === current ? "page" : undefined}
                onClick={() => setPage(item)}
                className={`min-h-11 min-w-11 rounded-full px-3 text-xs font-semibold ${
                  item === current ? "bg-ink text-paper" : "text-muted"
                }`}
              >
                {item}
              </button>
            ))}
            <button
              type="button"
              disabled={current >= totalPages}
              onClick={() => setPage(current + 1)}
              className="min-h-11 min-w-11 px-3 text-xs font-semibold text-muted disabled:text-line"
            >
              다음
            </button>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
