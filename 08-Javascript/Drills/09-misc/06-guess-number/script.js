// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    let guesses = 0; 
    let random = Math.floor(Math.random() * 100) + 1;
    let number = '';
    
    while (number !== random ) {
        number = parseInt(prompt('Guess a number between 1 and 100 : '));
        guesses += 1;

        if (number > random) {
            alert("Lower");
        } 
        else if (number < random) {
            alert("Higher");
        }
    }
    alert("That's it, you guessed: " + random + ". You needed: " + guesses + " guesses !");

})();
