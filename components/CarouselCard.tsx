import Image from "next/image";
import Link from "next/link";
import { formatDate, tagHref } from "@/lib/shared";

export type CarouselCardData = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  cover: string;
  priority?: boolean;
};

export function CarouselCard({ item }: { item: CarouselCardData }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-card">
      <Link href={`/c/${item.slug}`} className="block">
        <Image
          src={item.cover}
          alt=""
          width={1080}
          height={1350}
          priority={item.priority}
          sizes="(max-width: 640px) 50vw, 320px"
          className="aspect-[4/5] w-full object-cover"
        />
        <div className="px-3 pt-3">
          <time dateTime={item.date} className="text-[11px] text-muted">
            {formatDate(item.date)}
          </time>
          <h2 className="mt-1 line-clamp-3 text-sm font-semibold leading-5">{item.title}</h2>
        </div>
      </Link>
      {item.tags.length > 0 ? (
        <p className="flex flex-wrap gap-x-2 px-3 pt-2 pb-3">
          {item.tags.map((tag) => (
            <Link key={tag} href={tagHref(tag)} className="text-[11px] font-semibold text-moss">
              #{tag}
            </Link>
          ))}
        </p>
      ) : (
        <div className="h-3" />
      )}
    </article>
  );
}
