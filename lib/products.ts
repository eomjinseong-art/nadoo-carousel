import fs from "node:fs";
import path from "node:path";
import type { Product } from "@/lib/shared";

type ProductFile = Product[] | { products?: Product[] };

function isProduct(value: Product) {
  return Boolean(value && value.id && value.name && value.link);
}

export function getProducts(): Product[] {
  const file = path.join(process.cwd(), "data/products.json");
  try {
    const data = JSON.parse(fs.readFileSync(file, "utf8")) as ProductFile;
    const list = Array.isArray(data) ? data : (data.products ?? []);
    return list.filter(isProduct).sort((a, b) => a.id.localeCompare(b.id, "en", { numeric: true }));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}
