//Setting up game and variables//
//Array of Reindeer Names to be guessed//
var reindeerNames = ["dasher", "dancer", "vixen", "comet", "cupid", "blitzen", "rudolph"]
//Randomly choose a Reindeer Name from the array to start each game//
var reindeerRandom = [Math.floor(Math.random() * reindeerNames.length)];
// Word that gets chosen//
var chosenWord = reindeerNames[reindeerRandom];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
//Users guesses//
var blanks = [];
var wrongLetter = [];

//Tracking Guesses//
var wins = 0;
var losses = 0;
//Declare global variable for the player guesses remaining//
var guessesLeft = 10;

console.log(chosenWord)

//Generate word length with underscores in place of word letters//

for (var i = 0; i < chosenWord.length; i++) {
    blanks.push("_");
}
//Push to document//
document.getElementById("myGuesses").innerHTML = guessesLeft;
document.getElementById("blanks").innerHTML = blanks.join(" ");
document.getElementById("myWins").innerHTML = wins;
document.getElementById("wrongLetter").innerHTML = wrongLetter;


//Start Game//
document.onkeyup = function (event) {

    var keyPress = event.key.toLowerCase();
    //Documents keypress//
    if (guessesLeft >= 1) {
        if (alphabet.indexOf(keyPress) != -1) {

            if (chosenWord.indexOf(keyPress) != -1) {
                console.log(keyPress);

                for (var j = 0; j < chosenWord.length; j++) {
                    //If kepress matches letter in word, fill blank, console log, and add wins by one//
                    if (chosenWord[j] === keyPress) {
                        blanks[j] = chosenWord[j];
                        wins++;
                        document.getElementById("blanks").innerHTML = blanks.join(" ");
                        document.getElementById("myWins").innerHTML = wins;

                    }

                }
                //If keypress does not match, document wrong letter guessed and decrease guesses left by one//
            } else if (wrongLetter.indexOf(keyPress) === -1) {
                wrongLetter.push(keyPress);
                guessesLeft = guessesLeft - 1;
                document.getElementById("wrongLetter").innerHTML = wrongLetter;
                document.getElementById("blanks").innerHTML = blanks.join(" ");
                document.getElementById("myGuesses").innerHTML = guessesLeft;

            }
            //If all letters of the chosen word have been guessed then you win//
            if (blanks.join("") === chosenWord) {
                alert("You Win!");
                wins = wins + 1
                document.getElementById("myWins").innerHTML = wins;
                resetGame();
            }
        }
        //If you haven't guessed chosen word and ran out of guesses, you lose//
        else {
            guessesLeft = guessesLeft + 1
            document.getElementById("myGuesses").innerHTML = guessesLeft;
            alert("You lose. Try again!");
            resetGame();
        }
        //Function to clear everything and restart game//
        function resetGame() {

            wrongLetter = [];
            guessesLeft = 10;
            losses = 0
            wins = 0
            blanks = [];
            var reindeerRandom = [Math.floor(Math.random() * reindeerNames.length)];
            chosenWord = reindeerNames[reindeerRandom];
            for (var i = 0; i < chosenWord.length; i++) {
                blanks.push("_");
            }
            console.log(chosenWord)

            document.getElementById("myGuesses").innerHTML = guessesLeft;
            document.getElementById("blanks").innerHTML = blanks.join(" ");
            document.getElementById("myWins").innerHTML = wins;
            document.getElementById("wrongLetter").innerHTML = wrongLetter;


        }

    }
}  
