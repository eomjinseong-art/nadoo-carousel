import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const folder = "sample-chatgpt-prompt-5-20260928-1300";
const postPath = path.join(root, "content/carousels", folder, "post.json");
const outDir = path.dirname(postPath);

function kstLabel(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso.slice(0, 10);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(date)
    .replaceAll("-", ".");
}

function ensureFonts() {
  const dir = path.join(os.homedir(), ".local/share/fonts/pretendard");
  const regular = path.join(dir, "Pretendard-Regular.otf");
  if (fs.existsSync(regular)) return;
  fs.mkdirSync(dir, { recursive: true });
  const zip = path.join(root, "scripts/.cache/Pretendard-1.3.9.zip");
  fs.mkdirSync(path.dirname(zip), { recursive: true });
  if (!fs.existsSync(zip)) {
    execFileSync(
      "curl",
      ["-fsSL", "-o", zip, "https://github.com/orioncactus/pretendard/releases/download/v1.3.9/Pretendard-1.3.9.zip"],
      { stdio: "inherit" },
    );
  }
  execFileSync(
    "unzip",
    [
      "-o",
      "-j",
      zip,
      "public/static/Pretendard-Regular.otf",
      "public/static/Pretendard-SemiBold.otf",
      "public/static/Pretendard-Bold.otf",
      "-d",
      dir,
    ],
    { stdio: "inherit" },
  );
  execFileSync("fc-cache", ["-f", dir], { stdio: "inherit" });
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function charWidth(char, size) {
  if (char === " ") return size * 0.33;
  if (/[0-9]/.test(char)) return size * 0.62;
  if (/[A-Za-z]/.test(char)) return size * 0.62;
  if (/[.,·:()[\]]/.test(char)) return size * 0.4;
  return size * 1.02;
}

function wrap(text, maxWidth, size) {
  const lines = [];
  for (const paragraph of String(text).split("\n")) {
    if (!paragraph) {
      lines.push("");
      continue;
    }
    let line = "";
    let width = 0;
    for (const char of paragraph) {
      const next = charWidth(char, size);
      if (width + next > maxWidth && line.trim()) {
        lines.push(line.trimEnd());
        line = char === " " ? "" : char;
        width = char === " " ? 0 : next;
      } else {
        line += char;
        width += next;
      }
    }
    lines.push(line.trimEnd());
  }
  return lines;
}

function textBlock(x, y, lines, { size, fill, weight = 400, lineHeight, anchor = "start" }) {
  const tspans = lines
    .map((line, index) => {
      const dy = index === 0 ? 0 : lineHeight;
      return `<tspan x="${x}" dy="${dy}">${esc(line) || " "}</tspan>`;
    })
    .join("");
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Pretendard" font-weight="${weight}" font-size="${size}" fill="${fill}">${tspans}</text>`;
}

function coverSvg(post) {
  const lines = post.title.includes("프롬프트 5가지")
    ? ["업무가 빨라지는", "ChatGPT 프롬프트", "5가지"]
    : wrap(post.title, 880, 76);
  const summary = wrap("역할 · 회의록 · 메일 · 비교 · 사실 확인", 860, 36);
  const caption = wrap("대괄호만 바꿔 오늘 업무에 쓰세요.", 860, 32);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
  <rect width="1080" height="1350" fill="#16382c"/>
  <rect x="0" y="0" width="18" height="1350" fill="#c6a15b"/>
  <text x="88" y="128" font-family="Pretendard" font-weight="600" font-size="28" fill="#d7e6dc">나두Ai 캐러셀</text>
  <text x="992" y="128" text-anchor="end" font-family="Pretendard" font-weight="400" font-size="26" fill="#b7c9bf">${esc(kstLabel(post.date))}</text>
  <text x="88" y="430" font-family="Pretendard" font-weight="600" font-size="26" fill="#e4c98a" letter-spacing="2">오늘의 카드</text>
  ${textBlock(88, 540, lines, { size: 78, fill: "#f7f3ea", weight: 700, lineHeight: 104 })}
  <rect x="88" y="860" width="120" height="6" fill="#e4c98a"/>
  ${textBlock(88, 940, summary, { size: 36, fill: "#efe4d2", weight: 500, lineHeight: 54 })}
  ${textBlock(88, 1060, caption, { size: 32, fill: "#d5e0d8", weight: 400, lineHeight: 48 })}
  <text x="88" y="1248" font-family="Pretendard" font-weight="500" font-size="26" fill="#d7e6dc">1 / ${post.slides.length}</text>
  <text x="992" y="1248" text-anchor="end" font-family="Pretendard" font-weight="400" font-size="26" fill="#b7c9bf">저장해 두고 반복</text>
</svg>`;
}

function contentSvg(post, slide, index) {
  const [headingLine, ...rest] = slide.text.replaceAll("\r\n", "\n").split("\n");
  const body = rest.join("\n").trim();
  const heading = wrap(headingLine.trim(), 760, 52);
  const fitted = fitBody(body, 820, 15);
  const cardTop = 250 + heading.length * 72;
  const cardHeight = Math.min(980, 80 + fitted.lines.length * fitted.lineHeight);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
  <rect width="1080" height="1350" fill="#f3efe6"/>
  <rect width="1080" height="16" fill="#1e4d3a"/>
  <rect x="72" y="88" width="92" height="92" rx="18" fill="#1e4d3a"/>
  <text x="118" y="148" text-anchor="middle" font-family="Pretendard" font-weight="700" font-size="34" fill="#f7f3ea">${String(index + 1).padStart(2, "0")}</text>
  ${textBlock(188, 128, heading, { size: 52, fill: "#1c1915", weight: 700, lineHeight: 68 })}
  <rect x="72" y="${cardTop}" width="936" height="${cardHeight}" rx="28" fill="#fffcf7"/>
  ${textBlock(112, cardTop + 64, fitted.lines, { size: fitted.size, fill: "#243028", weight: 400, lineHeight: fitted.lineHeight })}
  <text x="72" y="1288" font-family="Pretendard" font-weight="600" font-size="24" fill="#1e4d3a">나두Ai 캐러셀</text>
  <text x="1008" y="1288" text-anchor="end" font-family="Pretendard" font-weight="500" font-size="24" fill="#5c564e">${index + 1} / ${post.slides.length}</text>
</svg>`;
}

function fitBody(text, maxWidth, maxLines) {
  for (let size = 34; size >= 26; size -= 2) {
    const lines = wrap(text, maxWidth, size);
    if (lines.length <= maxLines) return { lines, size, lineHeight: Math.round(size * 1.45) };
  }
  const lines = wrap(text, maxWidth, 26);
  if (lines.length > maxLines + 2) {
    throw new Error(`Slide body overflows (${lines.length} lines)`);
  }
  return { lines, size: 26, lineHeight: 38 };
}

function ogSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#16382c"/>
  <rect width="16" height="630" fill="#c6a15b"/>
  <text x="80" y="150" font-family="Pretendard" font-weight="600" font-size="28" fill="#e4c98a">나두Ai 캐러셀</text>
  <text x="80" y="280" font-family="Pretendard" font-weight="700" font-size="68" fill="#f7f3ea">틱톡 없이 읽는</text>
  <text x="80" y="370" font-family="Pretendard" font-weight="700" font-size="68" fill="#f7f3ea">AI 캐러셀 아카이브</text>
  <text x="80" y="470" font-family="Pretendard" font-weight="400" font-size="30" fill="#d7e6dc">슬라이드와 전문, 그리고 데스크테리어 추천</text>
</svg>`;
}

async function raster(svg, file) {
  await sharp(Buffer.from(svg), { density: 144 })
    .resize(1080, 1350, { fit: "fill" })
    .png()
    .toFile(file);
}

ensureFonts();
const post = JSON.parse(fs.readFileSync(postPath, "utf8"));
fs.mkdirSync(outDir, { recursive: true });

for (let index = 0; index < post.slides.length; index += 1) {
  const svg = index === 0 ? coverSvg(post) : contentSvg(post, post.slides[index], index);
  await raster(svg, path.join(outDir, path.basename(post.slides[index].image)));
}
await sharp(Buffer.from(ogSvg()), { density: 144 })
  .resize(1200, 630, { fit: "fill" })
  .png()
  .toFile(path.join(root, "public/og.png"));

console.log(`Wrote ${post.slides.length} PNG slides in ${folder} and public/og.png`);
