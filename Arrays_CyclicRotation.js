// Este ejercicio consiste en recorrer los elementos del array, es decir, el ultimo pasa a ocupar la posicion 0 del arreglo y asi sucesivamente 
// durante el numero de iteraciones indicadas en el parametro K
// la clave de esto son el arr.pop() que lo que hace es sacar el ultimo elemento de un array y retiornarlo.
// despues el arr.unshift(elem) lo que hace esw insertar un elemento al inicio de un array
// practicamente con eso y algunqas iteraciones logramos ir recorriendo los elementos de un array colocando el primer elemento hasta
// determinada posicion

/*
An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

class Solution { public int[] solution(int[] A, int K); }

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
For another example, given

    A = [0, 0, 0]
    K = 1
the function should return [0, 0, 0]

Given

    A = [1, 2, 3, 4]
    K = 4
the function should return [1, 2, 3, 4]

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
*/

const arr = [3, 8, 9, 7, 6];
const k = 3;

const cyclicRotation = (arr, k) => {
  if (arr.length > 0) {
    for (let index = 1; index <= k; index++) {
      const elem = arr.pop();
      arr.unshift(elem);
    }
  }
  return arr;
};

console.log(cyclicRotation(arr, k));
