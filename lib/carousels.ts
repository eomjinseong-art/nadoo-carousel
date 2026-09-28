import fs from "node:fs";
import path from "node:path";
import { slideSrc } from "@/lib/shared";

export type Slide = {
  image: string;
  text: string;
  src: string;
  heading: string;
  body: string;
};

export type Carousel = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  tags: string[];
  tiktokUrl: string;
  slides: Slide[];
  cover: string;
};

type VisibilityFile = {
  hidden?: string[];
};

let cache: Carousel[] | null = null;

function readVisibility(): VisibilityFile {
  const file = path.join(process.cwd(), "data/carousel-visibility.json");
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as VisibilityFile;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return { hidden: [] };
    throw error;
  }
}

function hiddenSlugs() {
  return new Set((readVisibility().hidden ?? []).map((slug) => slug.trim()).filter(Boolean));
}

function splitSlide(text: string) {
  const normalized = text.replace(/\r\n/g, "\n").trim();
  const [first, ...rest] = normalized.split("\n");
  return {
    heading: (first || "").trim(),
    body: rest.join("\n").trim(),
  };
}

function loadAll() {
  if (cache) return cache;
  const root = path.join(process.cwd(), "content/carousels");
  if (!fs.existsSync(root)) {
    cache = [];
    return cache;
  }

  const hidden = hiddenSlugs();
  const items: Carousel[] = [];

  for (const slug of fs.readdirSync(root)) {
    const dir = path.join(root, slug);
    const postPath = path.join(dir, "post.json");
    if (!fs.existsSync(postPath) || !fs.statSync(dir).isDirectory()) continue;
    if (hidden.has(slug)) continue;

    let raw: {
      slug?: string;
      date?: string;
      title?: string;
      summary?: string;
      tags?: unknown;
      tiktok_url?: string;
      tiktokUrl?: string;
      slides?: { image?: string; text?: string }[];
    };
    try {
      raw = JSON.parse(fs.readFileSync(postPath, "utf8"));
    } catch {
      console.warn(`Skipping unreadable post.json: ${slug}`);
      continue;
    }

    const title = String(raw.title || "").trim();
    const slides = (raw.slides ?? [])
      .map((slide) => {
        const image = String(slide.image || "").trim();
        const text = String(slide.text || "").trim();
        return { image, text, src: slideSrc(slug, image), ...splitSlide(text) };
      })
      .filter((slide) => slide.image && slide.text);

    if (!title || slides.length === 0) continue;

    const tags = Array.isArray(raw.tags) ? raw.tags.map((tag) => String(tag).trim()).filter(Boolean) : [];
    items.push({
      slug,
      date: String(raw.date || "").trim(),
      title,
      summary: String(raw.summary || "").trim(),
      tags,
      tiktokUrl: String(raw.tiktok_url || raw.tiktokUrl || "").trim(),
      slides,
      cover: slides[0].src,
    });
  }

  items.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  cache = items;
  return items;
}

export function getVisibleCarousels() {
  return loadAll();
}

export function getCarousel(slug: string) {
  return loadAll().find((item) => item.slug === slug) ?? null;
}

export function getNeighbors(slug: string) {
  const all = loadAll();
  const index = all.findIndex((item) => item.slug === slug);
  return {
    newer: index > 0 ? all[index - 1] : null,
    older: index >= 0 && index < all.length - 1 ? all[index + 1] : null,
  };
}

export function getTags() {
  const counts = new Map<string, number>();
  for (const carousel of loadAll()) {
    for (const tag of carousel.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ko"))
    .map(([tag]) => tag);
}

export function getByTag(tag: string) {
  return loadAll().filter((item) => item.tags.includes(tag));
}
