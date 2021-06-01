const readlineSync = require("readline-sync");

let length = 10;
let width = 5;

function calcSurface(length, width) {
    return length * width;
}

console.log("The surface of the rectangle is " + calcSurface(length, width));

let userLength = readlineSync.question ("What is the length of your rectangle ");
let userWidth = readlineSync.question ("What is the width of your rectangle ");

console.log(calcSurface((Number(userLength)), (Number(userWidth))));