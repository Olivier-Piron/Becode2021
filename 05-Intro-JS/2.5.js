const readlineSync = require("readline-sync");

let answer = readlineSync.question("What is your favorite number? ");

while ((Number(answer)) != 42) {
    console.log("Are you sure?");
    answer = readlineSync.question("What is your favorite number?");
}

console.log ("end");