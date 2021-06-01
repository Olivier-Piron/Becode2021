const readlineSync = require("readline-sync");

let number1 = readlineSync.question("Give a first number with decimals ");
let number2 = readlineSync.question("Give a second number with decimals ");

var intNumber1 = Math.floor(number1);

let result = intNumber1 * (Number(number2));
console.log("Result = " + result);