const readlineSync = require("readline-sync");

let min = readlineSync.question("What is your minimum number? ");
let max = readlineSync.question("What is your maximum number? ");
let current = readlineSync.question("What is your current number? ");

 if (((Number(current)) >= (Number(min)) ) && ((Number(current)) <= (Number(max))))  { 
    console.log(current + " is between " + min + " and " + max)
} else {
    console.log(current + " is not between " + min + " and " + max)
}