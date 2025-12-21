import { describe, expect, test } from "bun:test";

import { timeUntilTakeOff } from "./cuenta-atras";

describe("timeUntilTakeOff", () => {
  test("debería devolver 30 segundos antes del despegue", () => {
    const fromTime = "2025*12*24@23|59|30 NP";
    const takeOffTime = "2025*12*25@00|00|00 NP";

    const result = timeUntilTakeOff(fromTime, takeOffTime);

    expect(result).toBe(30);
  });

  test("debería devolver 0 si es el momento exacto del despegue", () => {
    const fromTime = "2025*12*25@00|00|00 NP";
    const takeOffTime = "2025*12*25@00|00|00 NP";

    const result = timeUntilTakeOff(fromTime, takeOffTime);

    expect(result).toBe(0);
  });

  test("debería devolver -12 si son 12 segundos después del despegue", () => {
    const fromTime = "2025*12*25@00|00|12 NP";
    const takeOffTime = "2025*12*25@00|00|00 NP";

    const result = timeUntilTakeOff(fromTime, takeOffTime);

    expect(result).toBe(-12);
  });

  test("debería calcular correctamente diferencias mayores", () => {
    const fromTime = "2025*12*20@12|00|00 NP";
    const takeOffTime = "2025*12*25@00|00|00 NP";

    const result = timeUntilTakeOff(fromTime, takeOffTime);

    // 4 días y 12 horas = 4 * 24 * 3600 + 12 * 3600 = 345600 + 43200 = 388800 segundos
    expect(result).toBe(388800);
  });
});
