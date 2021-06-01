const readlineSync = require("readline-sync");

let age = readlineSync.question("What is your age? ");

if (((Number(age)) >= 18)) {
  console.log("You are an adult");
} else {
  console.log("You are not yet an adult");
}