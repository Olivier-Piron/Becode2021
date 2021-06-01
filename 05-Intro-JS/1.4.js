const readlineSync = require("readline-sync");

let userFirstName = readlineSync.question("What is your first name?");
let userName = readlineSync.question("What is your last name?");
let userCity = readlineSync.question("Which city do you live in?");

console.log("Your name is " + userFirstName + " " + userName +" and you live in " + userCity);