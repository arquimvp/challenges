// Este ejercicio consiste en hallar el numero inpar, es decir, en el ejemplo siguiente consiste en hallar 7, 
// dado que el resto de numeros tienen su par igual.

const arrOfNumbers = [9, 3, 9, 3, 9, 7, 9];

// Esta fue tu solucion propia, de tu autoria:
const solutionOne = (A) => {
  // write your code in JavaScript (Node.js 8.9.4)
  /* const uniq = [...new Set(A)];
  const kvObj = {};
  uniq.forEach((elem) => {
    kvObj[elem] = 0;
  });

  A.forEach((elem) => {
    kvObj[elem] = kvObj[elem] + 1;
  });

  for (const key in kvObj) {
    if (kvObj[key] === 1) {
      return parseInt(key);
    }
  } */

};


// Esta es otra opcion:
// Aqui la clave son los indexOf y el lastIndexOf ya que cada uno retorna la posicion (index) del valor que se les indique, 
// la diferencia es la direrccion de partida de cada uno, el lastIndexOf empieza desde la derecha hacia la izquierda. Obvio si ambos 
// retornan la misma posicion quiere decir que el valor bucado solo existe una vez :O

function solutionTwo(A) {
  /* let oddValue = 0;
  if (A.length > 0 && A.length % 2 !== 0) {
    A.map((curVal, idx, arr) => {
      if (A.indexOf(curVal) === A.lastIndexOf(curVal)) {
        oddValue = curVal;
      }
    });
    return oddValue;
  }
  return null; */
}

// Esta es otra opcion, esta es la mejor opcion:
// Aqui esta opcion lo que hace es que primero la funcion createOccMap se encarga de popular un objeto (map) que tiene como propiedades
// los valores unicos del array, esa funcion la ejecuta por cada valor del array, una vez generado ese objeto lo retorna en IntOccMap
// una vez que tenemo ese objeto lo iteramos validando con la funcion isOdd si cada valor de cada propiedad tiene un valor que arroje 
// residuo con el operador % (modulo) el cuaql retorna ese residuo, en caso de ser diferente de 0 entonces ese es nuestro resultado :)
// Finalmente en la operacion donde se usa "Object.keys(IntOccMap)" aqui lo que se obtiene es un array con las propiedades del objeto IntOccMap
// despues con ese array se hace un find, y rercuerda que el find revuelve el elemento del array que cumpla la condicion que se le pase,
// en nuestro caso esa condicion es que se cumpla la funcion de idOdd :) y ya con eso obtenemos nuestro resultado. :)
// lo que hace el + antes del Object es que como nuestro find devuelve un string dado que las propiedades de nuestro objeto IntOccMap son strings, necesitamos
// "parsear" ese string a number :)

function solutionThree(A) {
  const createOccMap = (map, nextInteger) => {
    const isMissingKey = (key) => map[key] === undefined;
    if (isMissingKey(nextInteger)) {
      map[nextInteger] = 0;
    }
    ++map[nextInteger];
    return map;
  };
  const isOdd = (number) => number % 2 !== 0;
  const IntOccMap = A.reduce(createOccMap, {});

  return +Object.keys(IntOccMap).find((integer) => isOdd(IntOccMap[integer]));
}

const r = solutionThree(arrOfNumbers);
console.log(r);



    