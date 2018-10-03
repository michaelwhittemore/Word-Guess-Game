var wordbank = ["test", "testagain", "testyetagain"];
//intialization
var wins = 0;
var losses = 0;
var guessesleft = 13;
var guesses = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var currentwordprogress;
var currentword;
var wordholder = [];
var userGuess;

//gets a new word and wordprogress, resets guessesleft and guesses
function newGame() {
    currentword = wordbank[Math.floor(Math.random() * wordbank.length)];
    wordholder = [];
    for (var i = 0; i < currentword.length; i++) {
        wordholder.push('_');
    }
    currentwordprogress = wordholder.join(" ");
    guesses = [];
    guessesleft = 13;

}

newGame();
document.getElementById("currentwordprogress").innerHTML = currentwordprogress; //remove
document.getElementById("currentword").innerHTML = currentword; //remove

//this function should take the guess and fill in the spots where the letter occurs
function updateWordProgress() {
    for (var i = 0; i < currentword.length; i++) {
        if (userGuess === currentword[i]) {
            wordholder[i] = userGuess;
        }
    }
    currentwordprogress = wordholder.join(" ");
}

document.onkeyup = function (event) {
    userGuess = event.key;
    //valid input
    if (!guesses.includes(userGuess) && alphabet.includes(userGuess)) {
        guesses.push(userGuess);
        //check if the guessed letter is in the word
        if (currentword.includes(userGuess)) {
            updateWordProgress();
            //they win
            if(!wordholder.includes('_')){
                alert("Hooray! You win!");
                wins++;
                newGame();
            }
        }
        //the guess is wrong
        else {
            guessesleft--;
            if(guessesleft<1){
                alert("You lose!");
                losses++;
                newGame();
            }
        }

    }
    else {
        alert("Please make a valid new guess")
    }


    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesleft").innerHTML = guessesleft;
    document.getElementById("madeguesses").innerHTML = guesses;
    document.getElementById("currentword").innerHTML = currentword; //remove
    document.getElementById("currentwordprogress").innerHTML = currentwordprogress; //remove

}

