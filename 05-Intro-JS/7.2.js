const readlineSync = require("readline-sync");

let userNumber = readlineSync.question ("Give an integer (not too large) ");
let n = (Number(userNumber))

function fibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
console.log(fibonacci(n));