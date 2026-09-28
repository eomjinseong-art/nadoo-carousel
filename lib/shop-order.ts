export const PAGE_SIZE = 40;
export const ORDER_KEY = "nadoo-carousel-product-order";

export function shuffleIds(ids: string[], random: () => number = Math.random) {
  const items = ids.slice();
  for (let index = items.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [items[index], items[swap]] = [items[swap], items[index]];
  }
  return items;
}

export function nextSessionOrder(currentIds: string[], saved: string[], random: () => number = Math.random) {
  const known = new Set(currentIds);
  const kept = saved.filter((id) => known.has(id));
  const keptSet = new Set(kept);
  const newcomers = shuffleIds(
    currentIds.filter((id) => !keptSet.has(id)),
    random,
  );
  return kept.length ? kept.concat(newcomers) : shuffleIds(currentIds, random);
}

export function sortByOrder<T extends { id: string }>(products: T[], ids: string[]) {
  const rank = new Map(ids.map((id, index) => [id, index]));
  return products.slice().sort((a, b) => (rank.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (rank.get(b.id) ?? Number.MAX_SAFE_INTEGER));
}

export function pageCount(total: number, pageSize = PAGE_SIZE) {
  return Math.max(1, Math.ceil(total / pageSize));
}
