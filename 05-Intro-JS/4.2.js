let min = 1; 
let max = 10;

function rand10(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

console.log("Here is a random integer between " + min + " and " + max + " : " + rand10(min, max));