export function findUniqueToy(toy: string): string {
  const counts = new Map<string, number>();

  for (const ch of toy) {
    const key = ch.toLowerCase();

    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  for (const ch of toy) {
    const key = ch.toLowerCase();

    if ((counts.get(key) ?? 0) === 1) {
      return ch;
    }
  }

  return "";
}
