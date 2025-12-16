import { describe, expect, test } from "bun:test";

import { filterGifts } from "./filtrar-regalos";

describe("Reto 01: Filtrar regalos", () => {
  test("return type", () => {
    const result = filterGifts(["car", "doll#arm", "ball", "#train"]);
    expect(Array.isArray(result)).toBe(true);
  });

  test("filterGifts(['car', 'doll#arm', 'ball', '#train'])", () => {
    expect(filterGifts(["car", "doll#arm", "ball", "#train"])).toEqual([
      "car",
      "ball",
    ]);
  });

  test("filterGifts(['#broken', '#rusty'])", () => {
    expect(filterGifts(["#broken", "#rusty"])).toEqual([]);
  });

  test("filterGifts([])", () => {
    expect(filterGifts([])).toEqual([]);
  });

  test("filterGifts(['game', 'poster', 'sticker#bad', 'console'])", () => {
    expect(filterGifts(["game", "poster", "sticker#bad", "console"])).toEqual([
      "game",
      "poster",
      "console",
    ]);
  });

  test("filterGifts(['#bad', 'car', '#oops', 'ball'])", () => {
    expect(filterGifts(["#bad", "car", "#oops", "ball"])).toEqual([
      "car",
      "ball",
    ]);
  });
});
