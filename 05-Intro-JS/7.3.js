const readlineSync = require("readline-sync");

let userNumber = readlineSync.question ("Give an positive integer ");
let n = (Number(userNumber))

console.log("Factor(s) of " + n + ": ");

for (let i = 2; i < n; i++) {

    if(n % i == 0) {
        console.log(i);
    }
}