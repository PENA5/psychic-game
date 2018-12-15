var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

document.onkeyup = function (event) {
    var userGuess = event.key;
console.log(userGuess)

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)



function updateLetterToGuess(){ 
this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessesSoFar(){
    document.getElementById(guessesLetters).innerHTML = "Your Guess So Far: " + guessedLetters.join(',');

};

var reset = function(){
    guesses = 9;
    guessesLeft = 9;
    guessesdLetters = [];


}



if (userGuess === computerGuess) {
wins++;
guessesLeft = 9;
guesses = 9;
guessedLetters ="";
alert("Correct!")
}else {
guessesLeft--;
guesses--;
guessedLetters = [];
alert("Wrong try again!");

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guesses = 9;
        guessedLetters ="";
        alert("You Lose!!");
        
    }
}




var html =
"<h1>The Psychic Game" + "</h1>" +
"<h2>Guess what letter I'm thinking of?" + "</h2>" +
"<h2>Wins: " + wins + "</h2>" +
"<h2>Losses: " + losses + "</h2>" +
"<h2>Guesses Left: " + guessesLeft + "</h2>" ;
//"<h2>Your Guesses so far: " + guessedLetters + "</h2>" ;

document.querySelector("#game").innerHTML = html;


};



