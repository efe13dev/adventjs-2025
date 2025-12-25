import { describe, expect, test } from "bun:test";

import { drawTree } from "./montando-el-arbol";

describe("Reto 07: Montando el árbol", () => {
  test("return type", () => {
    const result = drawTree(5, "o", 2);

    expect(typeof result).toBe("string");
  });

  test("drawTree(5, 'o', 2)", () => {
    const result = drawTree(5, "o", 2);

    expect(result).toEqual("    *\n   o*o\n  *o*o*\n o*o*o*o\n*o*o*o*o*\n    #");
  });

  test("drawTree(3, '@', 3)", () => {
    const result = drawTree(3, "@", 3);

    expect(result).toEqual("  *\n *@*\n*@**@\n  #");
  });

  test("drawTree(4, '+', 1)", () => {
    const result = drawTree(4, "+", 1);

    expect(result).toEqual("   +\n  +++\n +++++\n+++++++\n   #");
  });
});
