# Montando el árbol

## Dificultad
**MEDIO**

## 📝 Descripción
¡Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:

- `height` → la altura del árbol (número de filas).
- `ornament` → el carácter del adorno (por ejemplo, "o" o "@").
- `frequency` → cada cuántas posiciones de asterisco aparece el adorno.

El árbol se dibuja con asteriscos `*`, pero cada `frequency` posiciones, el asterisco se reemplaza por el adorno.

El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si `frequency` es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

El árbol debe estar centrado y tener un tronco `#` de una línea al final. Cuidado con los espacios en blanco, nunca hay al final de cada línea.

## 🎯 Objetivo
Implementar la función `drawTree` que reciba la altura, el carácter del adorno y la frecuencia, y devuelva un array de strings que represente el árbol decorado.

## 📋 Reglas
1. El árbol se dibuja con asteriscos `*` por defecto
2. Cada `frequency` posiciones, el asterisco se reemplaza por el adorno
3. El conteo de posiciones empieza en 1 y es continuo desde la copa hasta la base
4. Cada fila del árbol debe estar centrada
5. El tronco `#` debe estar centrado en la última línea
6. No debe haber espacios en blanco al final de ninguna línea
7. La función debe devolver un array de strings

## 🧩 Ejemplos

### Ejemplo 1
```javascript
drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #
```

### Ejemplo 2
```javascript
drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #
```

### Ejemplo 3
```javascript
drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #
```
