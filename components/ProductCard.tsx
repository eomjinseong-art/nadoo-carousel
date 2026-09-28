"use client";

import { useState } from "react";
import { formatPrice, withUtm, type Product } from "@/lib/shared";

function Placeholder({ category }: { category: string }) {
  return (
    <div className="flex aspect-square w-full flex-col items-center justify-center bg-[#e7f0ea] text-moss">
      <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden="true">
        <rect x="8" y="14" width="48" height="30" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 44v6M40 44v6M18 50h28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <p className="mt-2 px-3 text-center text-[11px] font-semibold">{category}</p>
    </div>
  );
}

export function ProductCard({ product, heading = "h2" }: { product: Product; heading?: "h2" | "h3" }) {
  const [failed, setFailed] = useState(!product.imageUrl);
  const Title = heading;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card">
      <div className="relative">
        {failed ? (
          <Placeholder category={product.category} />
        ) : (
          // Remote product photos come from arbitrary sheet URLs, so they stay as plain images.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.imageUrl}
            alt=""
            width={600}
            height={600}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="aspect-square w-full object-cover"
          />
        )}
        {product.badge ? (
          <span className="absolute top-2 left-2 rounded-full bg-paper/95 px-2 py-1 text-[10px] font-bold text-brass">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="text-[11px] font-medium text-muted">{product.category}</p>
        <Title className="mt-1 line-clamp-2 text-sm font-semibold leading-5">{product.name}</Title>
        {formatPrice(product.price) ? <p className="mt-2 text-sm font-semibold">{formatPrice(product.price)}</p> : null}
        <a
          href={withUtm(product.link)}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="mt-3 block rounded-xl bg-moss py-3 text-center text-sm font-bold text-paper"
        >
          쿠팡에서 보기
        </a>
      </div>
    </article>
  );
}
