import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = process.cwd();
const configPath = path.join(root, "config/sheets.json");

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  const src = String(text).replace(/^\uFEFF/, "");

  for (let i = 0; i < src.length; i += 1) {
    const char = src[i];
    if (inQuotes) {
      if (char === '"') {
        if (src[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        cell += char;
      }
      continue;
    }
    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && src[i + 1] === "\n") i += 1;
      row.push(cell);
      cell = "";
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
    } else {
      cell += char;
    }
  }

  if (cell.length || row.length) {
    row.push(cell);
    if (row.some((value) => value.trim() !== "")) rows.push(row);
  }
  return rows;
}

export function rowsToObjects(csv, required) {
  const table = parseCsv(csv);
  if (!table.length) throw new Error("empty csv");
  const header = table[0].map((value) => value.trim().toLowerCase());
  for (const key of required) {
    if (!header.includes(key)) throw new Error(`missing column ${key}`);
  }
  return table.slice(1).map((row) => {
    const object = {};
    header.forEach((key, index) => {
      object[key] = (row[index] ?? "").trim();
    });
    return object;
  });
}

function splitTags(value) {
  return String(value || "")
    .split(/[|,]/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export function parsePrice(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return null;
  const digits = trimmed.replace(/[^\d.]/g, "");
  if (!digits) return null;
  const price = Number(digits);
  if (!Number.isFinite(price)) return null;
  return Math.round(price);
}

function isVisible(value) {
  return String(value || "").trim().toUpperCase() === "Y";
}

function skippedProductName(name) {
  const trimmed = String(name || "").trim();
  if (!trimmed) return true;
  return trimmed.toLowerCase().startsWith("nothing");
}

export function buildVisibility(csv) {
  const rows = rowsToObjects(csv, ["slug", "date", "title", "tags", "visible", "tiktok_url", "memo"]);
  const state = new Map();
  for (const row of rows) {
    const slug = row.slug.trim();
    if (!slug) continue;
    state.set(slug, {
      visible: isVisible(row.visible),
      date: row.date,
      title: row.title,
      tags: splitTags(row.tags),
      tiktok_url: row.tiktok_url,
      memo: row.memo,
    });
  }

  const hidden = [];
  const listed = {};
  for (const [slug, row] of state) {
    if (row.visible) {
      listed[slug] = {
        date: row.date,
        title: row.title,
        tags: row.tags,
        tiktok_url: row.tiktok_url,
        memo: row.memo,
      };
    } else {
      hidden.push(slug);
    }
  }
  hidden.sort((a, b) => a.localeCompare(b));
  const listedSorted = Object.fromEntries(Object.entries(listed).sort(([a], [b]) => a.localeCompare(b)));
  return { hidden, listed: listedSorted };
}

export function buildProducts(csv) {
  const rows = rowsToObjects(csv, ["id", "visible", "category", "name", "price", "image_url", "link", "badge", "memo"]);
  const byId = new Map();
  for (const row of rows) {
    const id = row.id.trim();
    const name = row.name.trim();
    const link = row.link.trim();
    if (!id || !isVisible(row.visible) || skippedProductName(name) || !link) continue;
    byId.set(id, {
      id,
      category: row.category.trim() || "기타",
      name,
      price: parsePrice(row.price),
      imageUrl: row.image_url.trim(),
      link,
      badge: row.badge.trim(),
      memo: row.memo.trim(),
    });
  }
  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id, "en", { numeric: true }));
}

function contentSignature(value) {
  if (Array.isArray(value)) return JSON.stringify(value.map(contentSignature));
  if (value && typeof value === "object") {
    const entries = Object.entries(value)
      .filter(([key]) => key !== "updatedAt")
      .sort(([a], [b]) => a.localeCompare(b));
    return JSON.stringify(entries.map(([key, item]) => [key, JSON.parse(contentSignature(item))]));
  }
  return JSON.stringify(value);
}

function readJson(file) {
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function writeIfChanged(file, data) {
  const previous = readJson(file);
  if (previous && contentSignature(previous) === contentSignature(data)) return false;
  const next = { updatedAt: new Date().toISOString(), ...data };
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(next, null, 2)}\n`);
  return true;
}

export function csvUrl(id) {
  return `https://docs.google.com/spreadsheets/d/${id}/export?format=csv`;
}

async function downloadCsv(id) {
  const response = await fetch(csvUrl(id), {
    redirect: "follow",
    signal: AbortSignal.timeout(25000),
    headers: { "user-agent": "nadoo-carousel-sync" },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${id}`);
  const text = await response.text();
  if (/<!doctype html|<html|accounts\.google\.com/i.test(text.slice(0, 800))) {
    throw new Error(`sheet ${id} is not public csv`);
  }
  return text;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

export function runSelfTest() {
  const products = buildProducts(`id,visible,category,name,price,image_url,link,badge,memo
1,Y,모니터 받침대,샘플) 원목,"29,900원",,https://example.com/a,추천,메모
2,N,조명,숨김,1000,,https://example.com/b,,
3,Y,조명,   ,1000,,https://example.com/c,,
4,Y,조명,빈링크,1000,,,추천,
5,Y,조명,nothing special,1000,,https://example.com/d,,
6,Y,조명,보이는 조명,39900,https://img.example/a.jpg,https://example.com/e,,메모
7,Y,조명,가격,"29,900원",,https://example.com/p,추천,메모
1,Y,조명,나중 행,1000,,https://example.com/z,,`);
  assert(products.length === 3, `expected 3 products, got ${products.length}`);
  assert(products[0].id === "1" && products[0].price === 1000 && products[0].name === "나중 행", "last product row should win");
  assert(products.find((item) => item.id === "7")?.price === 29900, "price should parse commas");
  assert(products[1].imageUrl === "https://img.example/a.jpg" && products[1].price === 39900, "product fields");

  const visibility = buildVisibility(`slug,date,title,tags,visible,tiktok_url,memo
sample,2026-09-28,제목,ChatGPT|업무자동화,Y,,메모
bad,2026-09-28,나쁜,태그,N,https://tiktok.com/x,숨김
,2026-09-28,빈,,Y,,
sample,2026-09-29,수정,ChatGPT, N ,,
kept,2026-09-28,유지,A,Y,,`);
  assert(visibility.hidden.includes("bad") && visibility.hidden.includes("sample"), "hidden slugs");
  assert(!visibility.listed.sample && visibility.listed.kept.tags[0] === "A", "listed rows");
  console.log("sync-sheets self-test ok");
}

function loadConfig() {
  return JSON.parse(fs.readFileSync(configPath, "utf8"));
}

async function main() {
  if (process.argv.includes("--self-test")) {
    runSelfTest();
    return;
  }

  const fromFiles = process.argv.indexOf("--from-files");
  let carouselCsv;
  let productCsv;
  try {
    if (fromFiles !== -1) {
      carouselCsv = fs.readFileSync(process.argv[fromFiles + 1], "utf8");
      productCsv = fs.readFileSync(process.argv[fromFiles + 2], "utf8");
    } else {
      const config = loadConfig();
      [carouselCsv, productCsv] = await Promise.all([
        downloadCsv(config.carousels.id),
        downloadCsv(config.products.id),
      ]);
    }
    const visibility = buildVisibility(carouselCsv);
    const products = buildProducts(productCsv);
    const visibilityFile = path.join(root, "data/carousel-visibility.json");
    const productsFile = path.join(root, "data/products.json");
    const visibilityChanged = writeIfChanged(visibilityFile, visibility);
    const previousProducts = readJson(productsFile);
    const productsChanged = !previousProducts || contentSignature(previousProducts.products ?? previousProducts) !== contentSignature(products);
    if (productsChanged) {
      fs.mkdirSync(path.dirname(productsFile), { recursive: true });
      fs.writeFileSync(
        productsFile,
        `${JSON.stringify({ updatedAt: new Date().toISOString(), products }, null, 2)}\n`,
      );
    }
    console.log(
      `sheets synced: visibility ${visibilityChanged ? "updated" : "unchanged"}, products ${productsChanged ? "updated" : "unchanged"} (${products.length} visible)`,
    );
  } catch (error) {
    console.warn(`Sheet sync skipped (${error instanceof Error ? error.message : error}). Kept the last committed JSON.`);
    process.exitCode = 0;
  }
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (invokedDirectly) {
  await main();
}
