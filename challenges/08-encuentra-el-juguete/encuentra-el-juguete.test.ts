import { describe, expect, test } from "bun:test";

import { findUniqueToy } from "./encuentra-el-juguete";

describe("findUniqueToy", () => {
  test("return type", () => {
    expect(typeof findUniqueToy("Gift")).toBe("string");
  });

  test("findUniqueToy('Gift')", () => {
    expect(findUniqueToy("Gift")).toBe("G");
  });

  test("findUniqueToy('sS')", () => {
    expect(findUniqueToy("sS")).toBe("");
  });

  test("findUniqueToy('reindeeR')", () => {
    expect(findUniqueToy("reindeeR")).toBe("i");
  });

  test("findUniqueToy('sTreSS')", () => {
    expect(findUniqueToy("sTreSS")).toBe("T");
  });

  test("findUniqueToy('aA')", () => {
    expect(findUniqueToy("aA")).toBe("");
  });

  test("findUniqueToy('z')", () => {
    expect(findUniqueToy("z")).toBe("z");
  });

  test("findUniqueToy('')", () => {
    expect(findUniqueToy("")).toBe("");
  });

  test("findUniqueToy('abcDEF')", () => {
    expect(findUniqueToy("abcDEF")).toBe("a");
  });

  test("findUniqueToy('aabbc')", () => {
    expect(findUniqueToy("aabbc")).toBe("c");
  });

  test("findUniqueToy('AaBbCc')", () => {
    expect(findUniqueToy("AaBbCc")).toBe("");
  });
});
