export function drawGift(size: number, symbol: string): string {
  if (size < 2) return "";

  const topBottom = symbol.repeat(size);
  const middle = `${symbol}${" ".repeat(size - 2)}${symbol}`;

  const lines: string[] = [topBottom];

  for (let i = 0; i < size - 2; i++) {
    lines.push(middle);
  }

  lines.push(topBottom);

  return lines.join("\n");
}
