import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const sourceArg = process.argv[2];
if (!sourceArg) {
  console.error("Usage: node scripts/import-carousel.mjs <srcFolder>");
  process.exit(1);
}

const source = path.resolve(sourceArg);
const folder = path.basename(source);
const destination = path.join(process.cwd(), "content/carousels", folder);

if (!fs.existsSync(path.join(source, "post.json"))) {
  console.error(`No post.json in ${source}`);
  process.exit(1);
}
if (fs.existsSync(destination)) {
  console.error(`Already imported: ${destination}`);
  process.exit(1);
}

fs.cpSync(source, destination, { recursive: true });

const slides = fs.readdirSync(destination).filter((name) => /^slide-\d+\.png$/i.test(name));
for (const name of slides) {
  const png = path.join(destination, name);
  const webp = png.replace(/\.png$/i, ".webp");
  await sharp(png).rotate().resize({ width: 1080, withoutEnlargement: true }).webp({ quality: 80 }).toFile(webp);
}

const post = JSON.parse(fs.readFileSync(path.join(destination, "post.json"), "utf8"));
const count = Array.isArray(post.slides) ? post.slides.length : 0;
if (count !== 9) console.warn(`Expected 9 slides in post.json, found ${count}.`);
console.log(`Imported ${folder}. Kept post.json. Wrote ${slides.length} WebP slide${slides.length === 1 ? "" : "s"}.`);
