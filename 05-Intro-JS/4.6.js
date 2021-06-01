const readlineSync = require("readline-sync");

let a = readlineSync.question("Ask me the factorial of: ");
a = (Number(a));

console.log(a);

function factorial(a){
    if (a < 0) {
        return undefined;
    }
    else if(a <= 1){
        return 1;
    }else{
        return a * factorial(a - 1);
    }
}

answer = factorial(a)
console.log("The factorial of " + a + " is " + answer);
