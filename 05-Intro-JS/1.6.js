const readlineSync = require("readline-sync");

let int1 = readlineSync.question("Give a first integer ");
let int2 = readlineSync.question("Give a second integer ");

let result2 = (Number(int1)) % (Number(int2));
console.log(result2);