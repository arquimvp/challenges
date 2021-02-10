// esta fue prueba me la hizo southworks para una vacante
// Este ejercicio consiste en hallar la suma mayor de un par de numeros del arreglo, cuyos digitos (ambos sumen) la misma cantidad.
// Por ejemplo en este ejemplo [51,71,17,42] el resultado seria 93 (51 + 42), ya que si sumas 5 + 1 es igual a 6, y si sumas 4 + 2 es igual 6, lo mismo
// pasa con el otro par de numeros pero la suma de esos numeros es menor a 93.

const A = [51,71,17,42]; // 93
// const A = [42, 33, 60]; // 102

function solution(A) {
  let pairs = {};
  A.map((n) => {
    const ns = n.toString();
    const nn = ns.split("");
    pairs[n] = nn.reduce((a, b) => a + parseInt(b), 0);
  });

  let sumOfDigitsArr = [];

  for (const key in pairs) {
    sumOfDigitsArr = [...sumOfDigitsArr, pairs[key]];
  }

  const duplicates = findDuplicates(sumOfDigitsArr);

  if (!duplicates || duplicates.length === 0) {
    return -1;
  }
  
  let numbers = [];
  duplicates.map((n) => {
    let prevArr = []
    for (const key in pairs) {
      if (pairs[key] === parseInt(n)) {
        prevArr = [...prevArr, parseInt(key)];
      }
    }
    numbers = numbers.concat(getPermutationsSums(prevArr));
  });

  console.log(Math.max(...numbers));

  return Math.max(...numbers);
}

function getPermutationsSums(numbers) {
  const r = [];
  let tempArr,
    i,
    j,
    max = 1 << numbers.length;
  for (i = 0; i < max; i++) {
    tempArr = [];
    for (j = 0; j < numbers.length; j++) {
      if (i & (1 << j)) {
        tempArr.push(numbers[j]);
      }
    }
    if (tempArr.length === 2) {
      r.push(
        tempArr.reduce(function (a, b) {
          return a + b;
        })
      );
    }
  }
  return r;
}

function findDuplicates(arr) {
  const obj = {};
  let result = [];

  arr.forEach(function (i) {
    if (!obj[i]) obj[i] = 0;
    obj[i] += 1;
  });

  for (let prop in obj) {
    if (obj[prop] >= 2) {
      result = [...result, prop];
    }
  }
  return result;
}

solution(A);
