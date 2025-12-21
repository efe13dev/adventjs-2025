export function decodeSantaPin(code: string): string | null {
  function aplicarOperacion(valor: number, operacion: string): number | null {
    if (operacion === "+") return (valor + 1) % 10;
    if (operacion === "-") return (valor - 1 + 10) % 10;

    return null;
  }

  const digits: string[] = [];
  const blockRegex = /\[([^\]]*)\]/g;
  let match: RegExpExecArray | null;

  while ((match = blockRegex.exec(code)) !== null) {
    const block = match[1];

    if (block === "<") {
      const prev = digits[digits.length - 1];

      if (prev == null) return null;
      digits.push(prev);
      continue;
    }

    const first = block?.[0];

    if (!first || first < "0" || first > "9") return null;

    let value = Number(first);
    const ops = block.slice(1);

    for (const op of ops) {
      const resultado = aplicarOperacion(value, op);

      if (resultado === null) return null;
      value = resultado;
    }

    digits.push(String(value));
  }

  return digits.length >= 4 ? digits.slice(0, 4).join("") : null;
}
