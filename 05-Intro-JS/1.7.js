const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question ("What is your shoe size? ");
let birthYear = readlineSync.question ("What is your birth year? ");

result3 = ( ( ( ((Number(shoeSize)) * 2) + 5 ) * 50 ) - (Number(birthYear)) ) + 1766;

console.log(result3);