// user: press key to start(listen for key)
// loop this:
//     comp: check that key is a letter.If no do nothing, else:
//           check if key is in solution.If yes, tick sound and display in solution section, else check if letter has already been typed.If so, beep, else tick sound and display in letters guessed section.
//     comp: check to see if solution has been completed, check to see if guessed letters has reached limit.Act accordingly if either of those happens.

const allWordsReset = ["Mary", "Helen", "Dorothy", "Margaret", "Ruth", "John", "William", "James", "Robert", "Charles"]; //1918-1919 top-five baby girl and top-five baby boy names
var allWordsToGuess = allWordsReset;
const allTheValidGuesses = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let theWins = 0;
let theGuessesRemaining = 0;
let theLettersGuessedArray = [];
let theGuess = "";
let theWordToGuessArray = [];
let theLettersThatMatchArray = [];
let randomMax = allWordsToGuess.length - 1 //minus 1 to make it zero-based
let randomMin = 0
let theMessage = ""

function resetGame() {
    allWordsToGuess = allWordsReset;
    theWins = 0;
    playGame();
}

function playAgain() {
    playGame();
}

function playGame() {
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
        theGuess = (prompt("Fill in the blanks to guess this " + theWordToGuess.length + " letter name: " + theLettersThatMatchArray.join(" ") + "\nYou have guessed these letters so far: " + theLettersGuessedArray.join(", ") + "\nYou have " + theGuessesRemaining + " guesses left. (Correct guesses don't count against you.)\nEnter your guess here and press [return]"));
        if (theGuess == null) {
            theMessage = "Reload this page to play again!";
            document.getElementById("displayArea").innerHTML = theMessage;
            break;
        }

        // if it is not a letter then we will do nothing (maybe beep?)
        if (!allTheValidGuesses.includes(theGuess) || theGuess.length !== 1) {} else {
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
                    }
                }
                // then see if the word has been completed
                if (!theLettersThatMatchArray.includes("_")) {
                    theWins = theWins + 1;
                    theMessage = ("You won! You guessed '" + theLettersThatMatchArray.join("") + "'.\nYou have won " + theWins + " games so far.");
                    alert(theMessage);
                    document.getElementById("displayArea").innerHTML = theMessage;
                    theMessage = "Games won: " + theWins;
                    document.getElementById("theWins").innerHTML = theMessage;
                    break;
                }
                console.log(theLettersThatMatchArray.join(" "));
                //if the guess is wrong the we decrement the guesses remaining
            } else {
                theGuessesRemaining = theGuessesRemaining - 1;
                theMessage = "Guesses remaining: " + theGuessesRemaining;
                document.getElementById("theGuessesRemaining").innerHTML = theMessage;
            }
        }
    }
    if (theGuessesRemaining == 0) {
        theMessage = ("You ran out of guesses. The correct answer was '" + theWordToGuess.split("").join(" ") + "'.\nYou have won " + theWins + " games so far.")
        alert(theMessage);
        document.getElementById("displayArea").innerHTML = theMessage;
        theMessage = "Games won: " + theWins;
        document.getElementById("theWins").innerHTML = theMessage;
    }
    console.log(theLettersGuessedArray.join(", "));
    document.getElementById("displayArea").innerHTML = theMessage;
}