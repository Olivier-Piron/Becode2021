const readlineSync = require("readline-sync");

let min = 1; 
let max = 10;
let a = [];
let i = 1;
let n = readlineSync.question("What is the length of your desired array? ");

function rand10(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function multiRand(n)  {
  while (i <= n) {
    rand10(min, max);
    i += 1;
    a.push(rand10(min, max));
  }
}

multiRand(n);

console.log("Your array is: " + a);
