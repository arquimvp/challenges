// Este ejercicio consiste en encontrar el gap (ceros consecutivos) mayor de un numero entero positivo convertido a binario.
// practicamente lo que hiciste fue con la funcion N.toString(2) es convertir a numero binario el numero.
// despues con [...str] conviertes el string en array para posteriormente poder iterarlo
// dentro de las iteraciones lo que hago es declarar un count el cual le voy sumando 1 en cada itercion si el valor qie se esta 
// iterando es 0, en caso de no ser 0 entonces almaceno ese count en el array numbers previamente declarado y para no perder los valores
// que pudiera tener ya el array numbers hago un spread y le concateno el count obtenido hasta ese punto y una vez almacenado el count
// entonces lo reseteo para comenzar a contar en caso de encontrar un nuevo grupo de ceros y asi sucesivamente por cada agrupacion de ceros posible.
// Al final lo unico que hago es buscar el valor maximo de los valores dentro del array, esto lo hago con  Math.max(...numbers)
// y listo!!!! :)

/**
    A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

    For example, 
    The number 9 has binary representation 1001 and contains a binary gap of length 2. 
    The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. 
    The number 20 has binary representation 10100 and contains one binary gap of length 1. 
    The number 15 has binary representation 1111 and has no binary gaps. 
    The number 32 has binary representation 100000 and has no binary gaps.

    that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

    For example, 
    given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. 
    Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

    Write an efficient algorithm for the following assumptions:
    N is an integer within the range [1..2,147,483,647].

 */

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0;
  let numbers = [];
  const str = N.toString(2);
  console.log(str);
  [...str].forEach((char) => {
    if (char === "0") {
      count++;
    } else {
      numbers = [...numbers, count];
      count = 0;
    }
  });
  return Math.max(...numbers);
}

console.log(solution(529)); // 4
