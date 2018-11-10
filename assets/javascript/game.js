//Setting up game and variables//
//Array of Reindeer Names to be guessed//
var reindeerNames = ["dasher", "dancer", "vixen", "comet", "cupid", "blitzen", "rudolf"]
//Randomly choose a Reindeer Name from the array to start each game//
var reindeerRandom = [Math.floor(Math.random() * reindeerNames.length)];
// Word that gets chosen//
var chosenWord = reindeerNames[reindeerRandom];
//Users guesses//
var rightWord = [];
var wrongWord = [];
var blanks = [];
//Tracking Guesses//
var wins = 0;
var losses = 0;
//Declare global variable for the player guesses remaining//
var remainingGuesses = 10;

//Write current status of wins, losses, and guesses//

var docFillblanks = document.getElementsByClassName('blanks');
var docRightGuess = document.getElementsByClassName('wins');
var docWrongGuess = document.getElementsByClassName('losses');
var docRemainingGuesses = document.getElementsByClassName('guessLeft');
var docCounterLoss = document.getElementsByClassName('lossCounter');

//Generate word length with underscores in place of word letters//
var fillBlanks = function () {
    for (var i = 0; i < chosenWord.length; i++) {
        blanks.push('_');
    }
    return blanks;
}

if (
    docFillblanks[0].innerHTML = fillBlanks().join(' '));

document.addEventListener('keypress', function (event) {
    var keyword = String.fromCharCode(event.keyCode);

    if (chosenWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);

        blanks[chosenWord.indexOf(keyword)] = keyword;
        docFillblanks[0].innerHTML = blanks.join(' ');
        docRightGuess[0].innerHTML = rightWord;
//Alert when user has guess all letters of reindeer name//
        var fullName = rightWord.join('');
         if (fullName === chosenWord) { 
         alert("You Win!");
         }
        }
else if (wrongWord.push(keyword)); {
docWrongGuess[0].innerHTML = wrongWord;
remainingGuesses--;
docRemainingGuesses[0].innerHTML = remainingGuesses;
}
if (fullName === chosenWord) {
    fillBlanks();
    return;
}
else if (remainingGuesses < 1) {
    losses--;
    fillBlanks();
    return;
}
});

        //Increment wins if user guess the word and end the game

