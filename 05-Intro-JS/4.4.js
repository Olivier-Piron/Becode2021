let arr = [1, 2, 3, 4, 5]

function average(arr) {
    let sum = arr.reduce(function(a, b) { return a + b; }, 0);
    let average = sum / arr.length;
    console.log("The average value of the array is: " + average);
}

function min(arr) {
    let minimum = Math.min( ...arr );
    console.log ("The minimum value of the array is: " + minimum);
}

function max(arr) {
    let maximum = Math.max( ...arr );
    console.log ("The maximum value of the array is: " + maximum);
}

average(arr);
min(arr);
max(arr);

/* ______ */

const readlineSync = require("readline-sync");

let minB = 1; 
let maxB = 10;
let arrB = [];
let i = 1;
let n = readlineSync.question("What is the length of your desired array? ");

function rand10(minB, maxB) { 
    return Math.floor(Math.random() * (maxB - minB + 1) + minB);
  }

function multiRand(n)  {
  while (i <= n) {
    rand10(minB, maxB);
    i += 1;
    arrB.push(rand10(minB, maxB));
  }
}

function average(arrB) {
    let sumB = arrB.reduce(function(a, b) { return a + b; }, 0);
    let averageB = sumB / arrB.length;
    console.log("The average value of your array is: " + averageB);
}

function min(arrB) {
    let minimumB = Math.min( ...arrB );
    console.log ("The minimum value of your array is: " + minimumB);
}

function max(arrB) {
    let maximumB = Math.max( ...arrB );
    console.log ("The maximum value of your array is: " + maximumB);
}

multiRand(n);

console.log("Your array is: " + arrB);

average(arrB);
min(arrB);
max(arrB);

