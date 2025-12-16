import { describe, expect, test } from "bun:test";

import { manufactureGifts } from "./fabrica-regalos";

describe("Reto 02: Fábrica de regalos", () => {
  test("return type", () => {
    const result = manufactureGifts([{ toy: "car", quantity: 1 }]);
    expect(Array.isArray(result)).toBe(true);
  });

  test("manufactureGifts([{ toy: 'car', quantity: 3 }, { toy: 'doll', quantity: 1 }, { toy: 'ball', quantity: 2 }])", () => {
    expect(
      manufactureGifts([
        { toy: "car", quantity: 3 },
        { toy: "doll", quantity: 1 },
        { toy: "ball", quantity: 2 },
      ])
    ).toEqual(["car", "car", "car", "doll", "ball", "ball"]);
  });

  test("manufactureGifts([{ toy: 'train', quantity: 0 }, { toy: 'bear', quantity: -2 }, { toy: 'puzzle', quantity: 1 }])", () => {
    expect(
      manufactureGifts([
        { toy: "train", quantity: 0 },
        { toy: "bear", quantity: -2 },
        { toy: "puzzle", quantity: 1 },
      ])
    ).toEqual(["puzzle"]);
  });

  test("manufactureGifts([])", () => {
    expect(manufactureGifts([])).toEqual([]);
  });

  test("manufactureGifts([{ toy: 'car', quantity: 1 }, { toy: 'doll', quantity: 2 }, { toy: 'ball', quantity: 0 }, { toy: 'car', quantity: 3 }])", () => {
    expect(
      manufactureGifts([
        { toy: "car", quantity: 1 },
        { toy: "doll", quantity: 2 },
        { toy: "ball", quantity: 0 },
        { toy: "car", quantity: 3 },
      ])
    ).toEqual(["car", "doll", "doll", "car", "car", "car"]);
  });

  test("manufactureGifts([{ toy: 'robot', quantity: 2 }, { toy: 'drone', quantity: -3 }, { toy: 'ball', quantity: 1 }])", () => {
    expect(
      manufactureGifts([
        { toy: "robot", quantity: 2 },
        { toy: "drone", quantity: -3 },
        { toy: "ball", quantity: 1 },
      ])
    ).toEqual(["robot", "robot", "ball"]);
  });
});
