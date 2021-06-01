const readlineSync = require("readline-sync");

let x = readlineSync.question("Enter a number between 1 and 7:");

if ((Number(x)) == 1) {
    console.log("Lundi");
} 

else if ((Number(x)) == 2) {
    console.log("Mardi");
} 

else if ((Number(x)) == 3) {
console.log("Mercredi");
} 

else if ((Number(x)) == 4) {
console.log("Jeudi");
} 

else if ((Number(x)) == 5) {
console.log("Vendredi");
} 

else if ((Number(x)) == 6) {
console.log("Samedi");
} 

else if ((Number(x)) == 7) {
console.log("Dimanche");
} 

else {
console.log("Fail")
}