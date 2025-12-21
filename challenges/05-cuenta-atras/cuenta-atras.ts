type ElfDateTime = `${number}*${number}*${number}@${number}|${number}|${number} NP`;

export function timeUntilTakeOff(fromTime: ElfDateTime, takeOffTime: ElfDateTime): number {
  // Función interna para parsear el formato de fecha elfo
  const parseElfDateTime = (elfTime: ElfDateTime): Date => {
    // Extraer componentes de la fecha y hora del formato elfo
    // Formato: YYYY*MM*DD@HH|mm|ss NP
    const cleanTime = elfTime.replace(" NP", "");
    const parts = cleanTime.split("@");

    if (parts.length !== 2) {
      throw new Error("Formato de fecha elfo inválido");
    }

    const datePart = parts[0];
    const timePart = parts[1];

    if (!datePart || !timePart) {
      throw new Error("Formato de fecha elfo inválido");
    }

    const dateComponents = datePart.split("*");
    const timeComponents = timePart.split("|");

    if (dateComponents.length !== 3 || timeComponents.length !== 3) {
      throw new Error("Formato de fecha elfo inválido");
    }

    const [yearStr, monthStr, dayStr] = dateComponents;
    const [hoursStr, minutesStr, secondsStr] = timeComponents;

    const year = Number(yearStr);
    const month = Number(monthStr);
    const day = Number(dayStr);
    const hours = Number(hoursStr);
    const minutes = Number(minutesStr);
    const seconds = Number(secondsStr);

    // Crear objeto Date (los meses en JavaScript son 0-11, por eso restamos 1)
    return new Date(year, month - 1, day, hours, minutes, seconds);
  };

  // Convertir ambas fechas del formato elfo a objetos Date
  const fromDate = parseElfDateTime(fromTime);
  const takeOffDate = parseElfDateTime(takeOffTime);

  // Calcular la diferencia en segundos
  // Math.floor para redondear hacia abajo como se indica en los requisitos
  const diffInSeconds = Math.floor((takeOffDate.getTime() - fromDate.getTime()) / 1000);

  return diffInSeconds;
}
