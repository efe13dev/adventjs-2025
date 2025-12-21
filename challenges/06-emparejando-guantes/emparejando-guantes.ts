type Glove = { hand: "L" | "R"; color: string };

export function matchGloves(gloves: Glove[]): string[] {
  const result: string[] = [];
  const colorCounts = new Map<string, { left: number; right: number }>();
  const colorPairsAdded = new Map<string, number>();

  // Iteramos sobre el array original para mantener el orden
  for (const glove of gloves) {
    const color = glove.color;

    // Inicializamos los contadores del color si no existen
    if (!colorCounts.has(color)) {
      colorCounts.set(color, { left: 0, right: 0 });
      colorPairsAdded.set(color, 0);
    }

    const counts = colorCounts.get(color)!;

    // Incrementamos el contador según la mano
    if (glove.hand === "L") {
      counts.left++;
    } else {
      counts.right++;
    }

    // Calculamos cuántos pares podemos hacer y cuántos ya hemos agregado
    const pairsPossible = Math.min(counts.left, counts.right);
    const pairsAdded = colorPairsAdded.get(color)!;

    // Si podemos hacer más pares, los agregamos
    if (pairsAdded < pairsPossible) {
      result.push(color);
      colorPairsAdded.set(color, pairsAdded + 1);
    }
  }

  return result;
}
