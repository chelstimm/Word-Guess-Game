
   var reindeerNames = ["dasher", "dancer", "prancer", "vixen", "comet", "cupid", "donner", "blitzen", "rudolf"]
   var reindeerRandom = [Math.floor(Math.random() * reindeerNames.length)];
   var chosenWord = reindeerNames[reindeerRandom];
   var rightWord = [];
   var wrongWord = [];
   var blanks = []; 

   var docFillblanks = document.getElementsByClassName('blanks');
   var docRightGuess = document.getElementsByClassName('rightGuess');
   var docWrongGuess = document.getElementsByClassName('wrongGuess');
   


   var fillBlanks = () => {
   for (var i = 0; i < chosenWord.length; i++) {
    blanks.push('_');
   
   }
   return blanks;
   }


   document.addEventListener('keyup', (event) => {
       var keyword = String.fromCharCode(event.keyCode);

       if (chosenWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);

        blanks[chosenWord.indexOf(keyword)] = keyword;
        docFillblanks[0].innerHTML = blanks.join(' ');
        docRightGuess[0].innerHTML = rightWord;

        if(blanks.join(' ') == chosenWord) {
            alert('You Win!');
        }
       }
       else {
           wrongWord.push(keyword);
           docWrongGuess[0].innerHTML = wrongWord;
           
       }
   });

   fillBlanks().join(' ');

 
