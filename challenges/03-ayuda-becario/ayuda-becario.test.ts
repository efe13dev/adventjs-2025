import { describe, expect, test } from "bun:test";

import { drawGift } from "./ayuda-becario";

describe("Reto 03: Ayuda al becario", () => {
  test("return type", () => {
    const result = drawGift(2, "#");

    expect(typeof result).toBe("string");
  });

  test('drawGift(1, "+")', () => {
    expect(drawGift(1, "+")).toBe("");
  });

  test('drawGift(2, "#")', () => {
    expect(drawGift(2, "#")).toBe("##\n##");
  });

  test('drawGift(3, "#")', () => {
    expect(drawGift(3, "#")).toBe("###\n# #\n###");
  });

  test('drawGift(4, "*")', () => {
    expect(drawGift(4, "*")).toBe("****\n*  *\n*  *\n****");
  });

  test('drawGift(5, "@")', () => {
    expect(drawGift(5, "@")).toBe("@@@@@\n@   @\n@   @\n@   @\n@@@@@");
  });
});
