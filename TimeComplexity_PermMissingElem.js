// Este ejercicio consiste en tener un arreglo de numeros consecutivos en desorden y todos son distintos y  solo hace falta un numero en la secuencia.
// lo que hay que hacer es hallar ese numero faltante, la forma en que lo hiciste esta descrita en el codigo.

/*
  An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

  Your goal is to find that missing element.

  Write a function:

  function solution(A);

  that, given an array A, returns the value of the missing element.

  For example, given array A such that:

    A[0] = 2
    A[1] = 3
    A[2] = 1
    A[3] = 5
  the function should return 4, as it is the missing element.

  Write an efficient algorithm for the following assumptions:

  N is an integer within the range [0..100,000];
  the elements of A are all distinct;
  each element of array A is an integer within the range [1..(N + 1)].
*/

const A = [1, 3, 4, 5]; // 2

// mi solucion:
function solution(A) {
  // Validas que el arreglo tenga datos y no sea nulo.
  if (!A || A.length === 0) {
    return 1;
  }
  // Asignas a n la cantidad de elementos del arreglo (obvio le tienes que sumar 1 ya que recuerda que los arrays te dan longitud contando el 0)
  const n = A.length + 1;
  // Aplicas formula de carl friedrich gauss, para obtener la suma de todos los elementos consecutivos
  const fullSum = (n * (1 + n)) / 2;
  // obtienes la suma real que tienes en el arreglo
  const currentSum = A.reduce((prev, curr) => prev + curr);
  // Finalmente calculas la diferencia entre la suma perfecta segun gauss menos la suma real de los elementos y te debe dar como 
  // resultado el numero faltante en la secuencia
  return fullSum - currentSum;
}

console.log(solution(A));
