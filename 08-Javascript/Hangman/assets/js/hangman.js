let list = ["PLAYER", "HANGMAN", "RANDOM", "WORD", "CODING", "WOODS", "GAME", "DEVELOPMENT"];
    
let letters = [];        
let wordIndex;           
let guesses = [];         
let remainingGuesses = 7;      
let hasFinished = false;     


wordIndex = Math.floor(Math.random() * (list.length));
for (let i = 0; i < list[wordIndex].length; i++) {
        guesses.push("_");
}

function updateDisplay() {

    let guessesText = "";
    for (let i = 0; i < guesses.length; i++) {
        guessesText += guesses[i];
    }

    document.getElementById("currentWord").innerText = guessesText;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;

    if (remainingGuesses <= 6) {
        document.getElementById("red").style.width = "15%";
    }
    if (remainingGuesses <= 5) {
        document.getElementById("red").style.width = "30%";
    }
    if (remainingGuesses <= 4) {
        document.getElementById("red").style.width = "45%";
    }
    if (remainingGuesses <= 3) {
        document.getElementById("red").style.width = "60%";
    }
    if (remainingGuesses <= 2) {
        document.getElementById("red").style.width = "75%";
    }
    if (remainingGuesses <= 1) {
        document.getElementById("red").style.width = "90%";
    }
    if (remainingGuesses <= 0) {
        document.getElementById("red").style.width = "102%";
    }

    

    if(guesses.indexOf("_") === -1) {
        hasFinished = true;
        document.getElementById("won").innerText = "You Won";
        document.getElementById("perso").style.left = "140vw";
        document.getElementById("perso").style.opacity = "0%"; 
        setTimeout(function() {window.location.reload(false)}, 1000);
    }
    
    else if(remainingGuesses <= 0) {
        hasFinished = true;
        document.getElementById("won").innerText = "You Lost";
        setTimeout(function() {window.location.reload(false)}, 1000);
    }
};

function evaluateGuess(letter) {
    
    let positions = [];
    
    for (let i = 0; i < list[wordIndex].length; i++) {
        if(list[wordIndex][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        remainingGuesses--;
    } else {
        for(let i = 0; i < positions.length; i++) {
            guesses[positions[i]] = letter;
        }
    }

};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (letters.indexOf(letter) === -1) {
            letters.push(letter);
            evaluateGuess(letter);
        }
    }
    
};


document.onkeydown = function(event) {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toUpperCase());
            updateDisplay();
        }
    
};
