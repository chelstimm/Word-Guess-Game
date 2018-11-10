/*Setting up game and variables*/
//Declare array of words for the Avatar Hangman Game and score information
var reindeerNames = ["dasher", "dancer", "vixen", "comet", "cupid", "blitzen", "rudolf"]
var wins = 0;
var losses = 0;

function setup() {
  //Randomly choose a word from the array to start each game
  var reindeerRandom = [Math.floor(Math.random() * reindeerNames.length)];

  //Declare global variables for the player guesses remaining
  var guessLeft = 10;

  //Declare array for user guesses and write to document
  var guessArr = [];
  document.getElementById("guess").innerHTML = guessArr;

  //Write current status of wins, losses, and guesses remaining
  document.getElementById("win").innerHTML = wins;
  document.getElementById("lose").innerHTML = losses;
  document.getElementById("remain").innerHTML = guessLeft;

  //Create blank spaces for the number of letters in the word and write to document
  var blanks = reindeerRandom.replace(availableKeys, "_");
  document.getElementById("blanks").innerHTML = blanks;

  /*Game code start*/
  //Start guess by selecting any letter key
  document.onkeyup = function(event) {
    var fillBlanks = event.key;

    //Function used to replace correct letter at its index
    function replaceIndex(string,index,replacement) {
        return string.substr(0, index) + replacement + string.substr(index+1);
    }

    //Checks that the user choice is a letter from a-z
    if (reindeerNames.indexOf(fillBlanks) > -1){
        //If letter is in the word, then show it
        if (reindeerRandom.includes(fillBlanks)) {
          var letterInd = [];
          //Loop through each index of wordSelect length
          for (var i = 0; i < reindeerRandom.length; i++) {
            if(reindeerRandom[i] === fillBlanks) letterInd.push(i);
          }
          //Loop through each index of letterInd
          for (var j = 0; j < letterInd.length; j++){
            blanks = replaceIndex(blanks, letterInd[j], fillBlanks);
            var counter = letterInd.length;
          }               
        }
        //If user choice is not in the word, decrement guessLeft and push to array
        else if (guessArr.includes(fillBlanks)===false && reindeerRandom.indexOf(fillBlanks)===-1){
          guessArr.push(fillBlanks);
          guessLeft--;      
        }
    //Increment wins if user guess the word and end the game
    if (blanks === reindeerRandom){
      wins++;
      setup();
      return;
    }
    //Increment losses if user has no more guesses remaining and end the game
    else if (guessLeft < 1) {
      losses++;
      setup();
      return;
    }
  }

  //Print updates to the document
  document.getElementById("blanks").innerHTML = blanks;
  document.getElementById("guess").innerHTML = guessArr;
  document.getElementById("win").innerHTML = wins;
  document.getElementById("lose").innerHTML = losses;
  document.getElementById("remain").innerHTML = guessLeft;

  }
}
window.onload = function(event){
  setup();
}