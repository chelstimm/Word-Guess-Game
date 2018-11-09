    //Setting up game and variables//
    //Array of Reindeer Names to be guessed//
    var reindeerNames = ["dasher", "dancer", "prancer", "vixen", "comet", "cupid", "donner", "blitzen", "rudolf"]
    //Randomly choose a Reindeer Name from the array to start each game//
   var reindeerRandom = [Math.floor(Math.random() * reindeerNames.length)];
   // Word that gets chosen//
   var chosenWord = reindeerNames[reindeerRandom];
   //Users guesses//
   var rightWord = [];
   var wrongWord = [];
   var blanks = []; 
    //Tracking Guesses//
   var winCount = 0;
   var loseCount = 0;
   var numBlanks = 0;
   //Declare global variable for the player guesses remaining//
   var remainingGuesses = 9;
   var rightGuessCounter = 0;

    //Write current status of wins, losses, and guesses//
   var docFillblanks = document.getElementsByClassName('blanks');
   var docRightGuess = document.getElementsByClassName('wins');
   var docWrongGuess = document.getElementsByClassName('losses');
   var docRemainingGuesses = document.getElementsByClassName('guessLeft');
   var docCounterLoss = document.getElementsByClassName('lossCounter');

    //Generate word length with underscores in place of word letters//
   var fillBlanks = () => {
   for (var i = 0; i < chosenWord.length; i++) {
    blanks.push('_');
    remainingGuesses--;
   
   }
   return blanks;
   }


   document.addEventListener('keypress', (event) => {
       var keyword = String.fromCharCode(event.keyCode);
   
       if (chosenWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);

        blanks[chosenWord.indexOf(keyword)] = keyword;
        docFillblanks[0].innerHTML = blanks.join(' ');
        docRightGuess[0].innerHTML = rightWord;
        winCount++;


        if(blanks.join(' ') == chosenWord) {
            alert('You Win!');
        }
       }
       else {
           wrongWord.push(keyword);
           docWrongGuess[0].innerHTML = wrongWord;
           loseCount--;

           docRemainingGuesses.innerHTML = remainingGuesses;

        
       }
    });

      
    if (
        docFillblanks[0].innerHTML = fillBlanks().join(' '));

       //end//
       
       
        function winLose()
{
	// When number blanks if filled with right words then you win
	if(rightGuessCounter === numBlanks)
	{
		//Counts Wins 
		winCount++;
		//Changes HTML
		document.getElementsById('guessesLeft').innerHTML = winCount;
		alert('You Win');
		reset();
	}
	// When number of Guesses reaches 0 then You lose
	else if(remainingGuesses === 0)
	{
		//Counts losses
		loseCount++;
		//Changes HTML
		document.getElementsByClassName('lossCounter').innerHTML = loseCount;
		alert('You Lose');
		reset();
	}
}

