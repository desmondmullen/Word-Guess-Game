// user: press key to start(listen for key)
// loop this:
//     comp: check that key is a letter.If no do nothing, else:
//           check if key is in solution.If yes, tick sound and display in solution section, else check if letter has already been typed.If so, beep, else tick sound and display in letters guessed section.
//     comp: check to see if solution has been completed, check to see if guessed letters has reached limit.Act accordingly if either of those happens.

const allWordsToGuess = ["Mary", "Helen", "Dorothy", "Margaret", "Ruth", "John", "William", "James", "Robert", "Charles"]; //1918-1919 top-five baby girl and top-five baby boy names
const allTheValidGuesses = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let theWins = 0;
let theGuessesRemaining = 0;
let theLettersGuessedArray = [];
let theGuess = "";
let theWordToGuessArray = [];
let theLettersThatMatchArray = [];
let randomMax = allWordsToGuess.length - 1 //minus 1 to make it zero-based
let randomMin = 0

// pick the word based on a random number
let theWordToGuess = allWordsToGuess[Math.floor(Math.random() * (+randomMax - +randomMin)) + +randomMin];
theGuessesRemaining = theWordToGuess.length + 2;
// put the word into an array
theWordToGuessArray = theWordToGuess.split("")
for (var count = 0; count < theWordToGuess.length; count++) {
    theLettersThatMatchArray.push("_");
}
console.log(theWordToGuess);
console.log(theLettersThatMatchArray.join(" "));

while (theGuessesRemaining > 0) {
    theGuess = (prompt("enter a letter to see if it's part of the word"));
    // if it is not a letter then we will do nothing (maybe beep?)
    if (!allTheValidGuesses.includes(theGuess) || theGuess.length !== 1) {
        // beep or something?
    } else {
        theLettersGuessedArray.push(theGuess);
        if (theWordToGuess.toLowerCase().includes(theGuess.toLowerCase())) {
            // redo the display
            for (i = 0; i < theWordToGuess.length; i++) {
                // if theGuess is in theWordToGuessArray position[i] then splice
                if (theWordToGuessArray[i].toLowerCase() == theGuess.toLowerCase()) {
                    //check if the letter in theWordToGuessArray is capital and capitalize the spice if so
                    if (theWordToGuessArray[i] === theGuess.toLowerCase()) {
                        theLettersThatMatchArray.splice(i, 1, theGuess.toLowerCase());
                    } else {
                        theLettersThatMatchArray.splice(i, 1, theGuess.toUpperCase());
                    }

                    // theLettersThatMatchArray.splice(i, 1, theGuess);
                }
            }
            // then see if the word has been completed
            if (!theLettersThatMatchArray.includes("_")) {
                alert("You won!");
                break;
            }
            console.log(theLettersThatMatchArray.join(" "));
            //if the guess is wrong the we decrement the guesses remaining
        } else {
            theGuessesRemaining = theGuessesRemaining - 1;
        }
        console.log("Guesses remaining: " + theGuessesRemaining);
    }
}
if (theGuessesRemaining == 0) {
    console.log("You ran out of guesses.");
}
console.log(theLettersGuessedArray.join(", "));
document.write(theLettersThatMatchArray.join(" ") + " / your letters guessed: " + theLettersGuessedArray.join(", "));