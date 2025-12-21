# 🧤 Emparejando Guantes

## Dificultad
**FÁCIL**

## 📝 Descripción
En el taller de Santa, los elfos han encontrado una montaña de guantes mágicos totalmente desordenados. Cada guante viene descrito por dos valores:

- `hand`: indica si es un guante izquierdo (`L`) o derecho (`R`)
- `color`: el color del guante (string)

Tu tarea es ayudarles a emparejar guantes: **Un par válido es un guante izquierdo y uno derecho del mismo color.**

## 🎯 Objetivo
Debes devolver una lista con los colores de todos los pares encontrados. Ten en cuenta que puede haber varios pares del mismo color. El orden se determina por el que se pueda hacer primero el par.

## 📋 Reglas
1. Un par válido consiste en un guante izquierdo (`L`) y uno derecho (`R`) del mismo color
2. Debes devolver una lista con los colores de todos los pares encontrados
3. Puede haber varios pares del mismo color
4. El orden de los resultados se determina por el orden en que se puedan formar los pares

## 🧩 Ejemplos

### Ejemplo 1
```javascript
const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

matchGloves(gloves)
// ["red", "green"]
```

### Ejemplo 2
```javascript
const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

matchGloves(gloves2)
// ["gold", "gold"]
```

### Ejemplo 3
```javascript
const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

matchGloves(gloves3)
// []
```

### Ejemplo 4
```javascript
const gloves4 = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

matchGloves(gloves4)
// ['red', 'green']
```