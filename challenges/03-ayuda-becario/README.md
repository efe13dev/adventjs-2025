# Reto 03: Ayuda al becario

**Dificultad**: Fácil

En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos.

Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

## Entrada

Recibes dos parámetros:

- `size`: el tamaño del regalo cuadrado
- `symbol`: el carácter que el elfo usa para hacer el borde

## Reglas

- Debe ser un cuadrado de `size x size`.
- El interior siempre está vacío (lleno de espacios).
- Si `size < 2`, devuelve una cadena vacía.
- El resultado final debe ser un `string` con saltos de línea `\n`.

## Ejemplos

```ts
const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…
```