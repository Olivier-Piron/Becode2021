let array = [1, 2, 3, 4, 5];

console.log(array)

function randomizeArray(array) { 
    for (var i = Object.keys(array).length - 1; i > 0; i--) {  
     
        var j = Math.floor(Math.random() * (i + 1)); 
                     
        var temp = array[i]; 
        array[i] = array[j]; 
        array[j] = temp; 
    } 
         
    console.log(array); 
 } 

 randomizeArray(array)