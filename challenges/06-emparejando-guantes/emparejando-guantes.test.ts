import { describe, expect, test } from "bun:test";

import { matchGloves } from "./emparejando-guantes";

type Glove = { hand: "L" | "R"; color: string };

describe("matchGloves", () => {
  test("debería emparejar guantes de diferentes colores", () => {
    const gloves: Glove[] = [
      { hand: "L", color: "red" },
      { hand: "R", color: "red" },
      { hand: "R", color: "green" },
      { hand: "L", color: "blue" },
      { hand: "L", color: "green" },
    ];

    const result = matchGloves(gloves);

    expect(result).toEqual(["red", "green"]);
  });

  test("debería emparejar múltiples pares del mismo color", () => {
    const gloves2: Glove[] = [
      { hand: "L", color: "gold" },
      { hand: "R", color: "gold" },
      { hand: "L", color: "gold" },
      { hand: "L", color: "gold" },
      { hand: "R", color: "gold" },
    ];

    const result = matchGloves(gloves2);

    expect(result).toEqual(["gold", "gold"]);
  });

  test("debería devolver array vacío si no hay pares", () => {
    const gloves3: Glove[] = [
      { hand: "L", color: "red" },
      { hand: "R", color: "green" },
      { hand: "L", color: "blue" },
    ];

    const result = matchGloves(gloves3);

    expect(result).toEqual([]);
  });

  test("debería mantener el orden de formación de pares", () => {
    const gloves4: Glove[] = [
      { hand: "L", color: "green" },
      { hand: "L", color: "red" },
      { hand: "R", color: "red" },
      { hand: "R", color: "green" },
    ];

    const result = matchGloves(gloves4);

    expect(result).toEqual(["red", "green"]);
  });

  test("debería devolver array vacío si el array está vacío", () => {
    const result = matchGloves([]);

    expect(result).toEqual([]);
  });

  test("debería devolver array vacío si solo hay guantes de una mano", () => {
    const gloves: Glove[] = [
      { hand: "L", color: "red" },
      { hand: "L", color: "blue" },
      { hand: "L", color: "green" },
    ];

    const result = matchGloves(gloves);

    expect(result).toEqual([]);
  });

  test("debería manejar múltiples pares de varios colores", () => {
    const gloves: Glove[] = [
      { hand: "L", color: "red" },
      { hand: "R", color: "red" },
      { hand: "L", color: "blue" },
      { hand: "R", color: "blue" },
      { hand: "L", color: "green" },
      { hand: "R", color: "green" },
    ];

    const result = matchGloves(gloves);

    expect(result).toEqual(["red", "blue", "green"]);
  });

  test("debería formar pares solo cuando hay ambas manos disponibles", () => {
    const gloves: Glove[] = [
      { hand: "L", color: "purple" },
      { hand: "L", color: "purple" },
      { hand: "R", color: "purple" },
    ];

    const result = matchGloves(gloves);

    // Solo 1 par: Math.min(2L, 1R) = 1
    expect(result).toEqual(["purple"]);
  });

  test("debería mantener el orden cuando se completan pares no consecutivos", () => {
    const gloves: Glove[] = [
      { hand: "L", color: "yellow" },
      { hand: "L", color: "pink" },
      { hand: "R", color: "yellow" },
      { hand: "R", color: "pink" },
    ];

    const result = matchGloves(gloves);

    expect(result).toEqual(["yellow", "pink"]);
  });

  test("debería manejar muchos pares del mismo color", () => {
    const gloves: Glove[] = [
      { hand: "L", color: "black" },
      { hand: "L", color: "black" },
      { hand: "L", color: "black" },
      { hand: "R", color: "black" },
      { hand: "R", color: "black" },
      { hand: "R", color: "black" },
    ];

    const result = matchGloves(gloves);

    // 3 pares
    expect(result).toEqual(["black", "black", "black"]);
  });
});
