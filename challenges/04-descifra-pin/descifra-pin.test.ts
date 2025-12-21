import { describe, expect, test } from "bun:test";

import { decodeSantaPin } from "./descifra-pin";

describe("decodeSantaPin", () => {
  test("debería decodificar un pin simple", () => {
    expect(decodeSantaPin("[0][1][2][3]")).toBe("0123");
  });

  test("debería manejar operaciones de suma", () => {
    expect(decodeSantaPin("[0+][1][2][3]")).toBe("1123");
  });

  test("debería manejar operaciones de resta", () => {
    expect(decodeSantaPin("[0-][1][2][3]")).toBe("9123");
  });

  test("debería manejar múltiples operaciones", () => {
    expect(decodeSantaPin("[0+-+][1][2][3]")).toBe("1123");
  });

  test("debería manejar el operador de repetición", () => {
    expect(decodeSantaPin("[1][<][2][3]")).toBe("1123");
  });

  test("debería retornar null para código inválido", () => {
    expect(decodeSantaPin("invalid")).toBeNull();
    expect(decodeSantaPin("[a][1][2][3]")).toBeNull();
    expect(decodeSantaPin("[0][1][2]")).toBeNull(); // menos de 4 dígitos
  });

  test("debería manejar bloques vacíos", () => {
    expect(decodeSantaPin("[]")).toBeNull();
  });

  test("debería manejar operadores inválidos", () => {
    expect(decodeSantaPin("[0*][1][2][3]")).toBeNull();
  });

  test("debería manejar el operador < sin dígito previo", () => {
    expect(decodeSantaPin("[<][1][2][3]")).toBeNull();
  });
});
