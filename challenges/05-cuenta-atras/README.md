# 🎅 Cuenta Atrás para el Despegue

## Dificultad
**FÁCIL**

## 📝 Descripción
Los elfos tienen un timestamp secreto: es la fecha y hora exacta en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo. Pero en el Polo Norte usan un formato rarísimo para guardar la hora: `YYYY*MM*DD@HH|mm|ss NP` (ejemplo: `2025*12*25@00|00|00 NP`).

## 🎯 Objetivo
Tu misión es escribir una función que reciba:

- `fromTime` → fecha de referencia en formato elfo (`YYYY*MM*DD@HH|mm|ss NP`)
- `takeOffTime` → la misma fecha de despegue, también en formato elfo

La función debe devolver:

- Los segundos completos que faltan para el despegue
- Si ya estamos en el despegue exacto → `0`
- Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces

## 📋 Reglas
1. Convierte el formato elfo a un timestamp primero. El sufijo `NP` indica la hora oficial del Polo Norte (sin husos horarios ni DST), así que puedes tratarlo como si fuera UTC.
2. Usa diferencias en segundos, no en milisegundos.
3. Redondea siempre hacia abajo (floor): solo segundos completos.

## 🧩 Ejemplos

```javascript
const takeoff = '2025*12*25@00|00|00 NP'

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)
// 30

// justo en el momento exacto
timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)
// 0

// 12 segundos después del despegue
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)
// -12
```