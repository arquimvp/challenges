// Mi serie de fibonacci, mia mia :)
// este codigo te dice el nuumero fibonacii dada la posicion "n"

var yourself = {
  fibObj: {},
  fibonacci: function (n) {
    for (let idx = 0; idx <= n; idx++) {
      if (idx === 0) {
        this.fibObj[idx] = 0;
      } else if (idx === 1) {
        this.fibObj[idx] = 1;
      } else {
        this.fibObj[idx] = this.fibObj[idx - 1] + this.fibObj[idx - 2];
      }
      if (idx === n) {
        return this.fibObj[idx];
      }
    }
  },
};

console.log(yourself.fibonacci(0)); //0
console.log(yourself.fibonacci(1)); //1
console.log(yourself.fibonacci(2)); //1
console.log(yourself.fibonacci(3)); //2
console.log(yourself.fibonacci(4)); //3
console.log(yourself.fibonacci(5)); //5
console.log(yourself.fibonacci(6)); //8
console.log(yourself.fibonacci(7)); //13
console.log(yourself.fibonacci(8)); //21