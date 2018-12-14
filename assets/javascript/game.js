// user: press key to start(listen for key)
// comp: pick random word from array
// display number of underscores for word
// loop this:
//     user: presses key(listen)
//     comp: check that key is a letter.If no do nothing, else:
//           check if key is in solution.If yes, tick sound and display in solution section, else check if letter has already been typed.If so, beep, else tick sound and display in letters guessed section.
//     comp: check to see if solution has been completed, check to see if guessed letters has reached limit.Act accordingly if either of those happens.

const allWordsToGuess = ["James", "Ann", "Vivian", "William", "Charles", "Elizabeth", "Charlotte", "Katherine", "Arthur", "Thomas"];
let theWins = "0";
let theGuessesRemaining = "5";
var theLettersGuessed = [];
let theGuess = "";
let theWordToGuessArray = [];
let theLetterThatMatchArray = [];
let theDisplayArray = "_";

// generate random number
let randomNumber = function(min, max) {
        return Math.floor(Math.random() * (+max - +min)) + +min;
    }
    // pick the word based on the random number
let theWordToGuess = allWordsToGuess[randomNumber(0, 9)];
// put the word into an array
// theWordToGuessArray = theWordToGuess.split("")
// join is opposite of split
for (var count = 0; count < theWordToGuess.length; count++) {
    theWordToGuessArray.push(theWordToGuess.charAt(count));
    theLetterThatMatchArray.push("_");
}
console.log(theWordToGuessArray);
console.log(theLetterThatMatchArray);

// make the initial display of underscores
for (let theCount = 1; theCount < theWordToGuess.length; theCount++) {
    theDisplayArray = theDisplayArray + " _";
}
document.write(theDisplayArray);
console.log(theWordToGuess);
console.log(theDisplayArray);

// play the game
for (let theCount = theGuessesRemaining; theCount >= 0; theCount--) {
    theGuess = (prompt("enter a letter to see if it's part of the word"));
    theLettersGuessed.push(theGuess)
    if (theWordToGuess.includes(theGuess)) {
        alert(theGuess + " is in the word!");
        // redo the display
        for (i = 0; i < theWordToGuess.length; i++) {
            //if theGuess is in theWordToGuessArray position[i] then splice;
            if (theWordToGuessArray[i] == theGuess) {
                theLetterThatMatchArray.splice(i, 1, theGuess);
            }
        }
        theDisplayString =
            console.log(theLetterThatMatchArray);
    }
    console.log(theLettersGuessed);
}