const readlineSync = require("readline-sync");

let n = readlineSync.question("Enter a number: ");
let i = 1;
let sum = 0;

while (i <= n) {
    m = readlineSync.question("Enter a new number: ");
    i += 1;
    sum += (Number(m));
  }

 console.log(sum);
