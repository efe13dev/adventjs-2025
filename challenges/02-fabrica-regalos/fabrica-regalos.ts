export function manufactureGifts(
  giftsToProduce: Array<{ toy: string, quantity: number }>
): string[] {
  const result: string[] = []

  for (const gift of giftsToProduce) {
    const { toy, quantity } = gift

    if (!Number.isFinite(quantity) || quantity <= 0 || !Number.isInteger(quantity)) {
      continue
    }

    for (let i = 0; i < quantity; i++) {
      result.push(toy)
    }
  }

  return result
}