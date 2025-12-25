export function drawTree(height: number, ornament: string, frequency: number): string {
  const result: string[] = [];
  let position = 1;

  // El ancho máximo es la última fila del árbol (2 * height - 1 caracteres)
  const maxWidth = 2 * height - 1;

  // Generar cada fila del árbol
  for (let row = 1; row <= height; row++) {
    const charsInRow = 2 * row - 1;
    const leadingSpaces = (maxWidth - charsInRow) / 2;
    let rowString = " ".repeat(leadingSpaces);

    for (let col = 0; col < charsInRow; col++) {
      // Si la posición es múltiplo de frequency, usar el adorno
      if (position % frequency === 0) {
        rowString += ornament;
      } else {
        rowString += "*";
      }
      position++;
    }

    result.push(rowString);
  }

  // Agregar el tronco centrado
  const trunkSpaces = (maxWidth - 1) / 2;

  result.push(" ".repeat(trunkSpaces) + "#");

  return result.join("\n");
}
