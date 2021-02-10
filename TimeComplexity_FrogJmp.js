// Este ejercicio consiste en calcular cantidad de saltos que necesita una rana apra llegar de un punto inicial a un punto final
// ya sea que se pase o quede en el mismo punto.

/*
  A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. 
  The small frog always jumps a fixed distance, D.

  Count the minimal number of jumps that the small frog must perform to reach its target.

  Write a function:

  function solution(X, Y, D);

  that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

  For example, given:

    X = 10
    Y = 85
    D = 30
  the function should return 3, because the frog will be positioned as follows:

  after the first jump, at position 10 + 30 = 40
  after the second jump, at position 10 + 30 + 30 = 70
  after the third jump, at position 10 + 30 + 30 + 30 = 100
  Write an efficient algorithm for the following assumptions:

  X, Y and D are integers within the range [1..1,000,000,000];
  X ≤ Y.
*/

X = 10;
Y = 85;
D = 30;

/* function solutionOne(X, Y, D) {
  if (X === Y) {
    return 0;
  }
  const diff = Y - X;
  const remainder = diff % D;
  const sizeExact = diff - remainder;
  const jumps = sizeExact / D
  return jumps + 1;
} */


// Esta es la mejor opcion:
function solutionTwo(X, Y, D) {
// lo que hace esta linea es que valida si el punto de partida de la rana (X) es mayor o igual punto final del recorrido, entonces
// no necesita saltar mas
  if (X >= Y) return 0;
// Si el punto de partida mas un salto mas es igual o mayor al punto final, entonces la rana solo necesitaba un salto para llegar 
// al punto final o sobrepasarse
  if ((X + D) >= Y) return 1;
// Si la posicion inicial de la rana es igual a un salto que da la rana, quiere decir que solo hay que restar el punto final menos 1 
// y asi obtenemos los saltos
  if (X == 1 && D == 1) return Y - 1; 
// Aqui ya se calcula despues de las 3 excepciones posibles que podrian suceder. Lo que se hace es que se divide el recorrido total (Y)
// entre la distancia del salto (D) y lo mismo se se hace con lo ya recorrido de la rana (X) despues se restan y si nos da una decimal
// en esa resta siginifica que hay residuo, asi como si lo hicieramos con el operador modulo (%, con tu calculo anterior).
// Entonces si hay residuo significa que requerimos de un salto mas para poder llegar al punto final o sobrepasarlo, por eso usamos
// Math.ceil, que lo que hace es subir al techo un numero decimal, o sea al numero inmediato siguiente hacia arriba. 
  return Math.ceil((Y/D) - (X/D));
}


console.log(solutionTwo(X, Y, D));
