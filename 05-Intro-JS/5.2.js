const readlineSync = require("readline-sync");
let fs = require('fs');
let data = fs.readFileSync('serie.json');
let serie = JSON.parse(data);

let i = 1;

  function askTvSerie(serie) {
    serie["Name of the serie"] = readlineSync.question("What is the name of your serie? ");
    serie["Production year"] = readlineSync.question("What is the production year of your serie? ");

    let n = readlineSync.question("How many cast members in the serie? ");

    while (i <= n) {
        serie.Cast[i] = readlineSync.question("The name of the cast member number " + i + " ");
        i += 1;
    }

    console.log(serie);
  }

  askTvSerie(serie);

  let array = serie.Cast;
  console.log("length is " + Object.keys(array).length);

  function randomizeCast(array) { 
    for (var i = Object.keys(array).length; i > 1; i--) {  
     
        var j = Math.floor(Math.random() * (i + 1)); 
                     
        var temp = array[i]; 
        array[i] = array[j]; 
        array[j] = temp; 
    } 
         
    console.log(array); 
 } 

 randomizeCast(array);
