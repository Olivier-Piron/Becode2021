const readlineSync = require("readline-sync");

let astroSign = readlineSync.question ("What is your astrological sign? [3 questions left] ");
let color = readlineSync.question ("What is your favorite color? [2 questions left] ");
let meal = readlineSync.question ("What was your last meal? [1 questions left] ");
let shower = readlineSync.question ("When was the last time you took a shower? [Last question] ");

console.log("I have no idea for the funny story, but if your last shower goes back to more than 2 days please hurry !");