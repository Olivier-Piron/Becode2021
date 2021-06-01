const readlineSync = require("readline-sync");

let userFirstName = readlineSync.question("What is your first name?");
console.log("Hello " + userFirstName);
