const allWordsReset = ["Mary", "Helen", "Dorothy", "Margaret", "Ruth", "John", "William", "James", "Robert", "Charles"]; //1918-1919 top-five baby girl and top-five baby boy names
const allWordsToGuess = [...allWordsReset];
var theWordToGuess = "";
const allTheValidGuesses = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let theWins = 0;
let theGuessesRemaining = 0;
let theLettersGuessedArray = [];
let theWordToGuessArray = [];
let theLettersThatMatchArray = [];
let randomMax = allWordsToGuess.length - 1; //minus 1 to make it zero-based
let randomMin = 0;
let theMessage = "";
let theKeyName = "";
let theWordsGuessedArray = [];

window.onload = function windowLoad() {
    resetGame();
};

document.addEventListener("keypress", (event) => {
    theKeyName = event.key;
    if (event.key === "Enter") {
        playAgain();
    } else {
        respondToKeyPress();
    }
});

function resetGame() { // full reset
    allWordsToGuess = [...allWordsReset];
    theWins = 0;
    theWordsGuessedArray = [];
    playAgain();
}

function playAgain() { // partial reset
    theLettersThatMatchArray = [];
    theLettersGuessedArray = [];
    playGame();
}

function updateDisplay(theID, theMessage) {
    document.getElementById(theID).innerHTML = theMessage;
}

function updateAllDisplays() {
    updateDisplay("displayArea", "");
    updateDisplay("theWins", "Games won: " + theWins);
    updateDisplay("theLettersGuessed", "Letters guessed: " + theLettersGuessedArray.join(", "));
    updateDisplay("theGuessesRemaining", "Guesses remaining: " + theGuessesRemaining);
    // the following three fields should be "localized" as needed for different games
    updateDisplay("theWordsGuessed", "Names guessed: " + theWordsGuessedArray.join(", "));
    updateDisplay("theTopFiveGirlNames", "Top Five Girl Names: " + theWordsGuessedArray.join(", ")); //
    updateDisplay("theTopFiveBoyNames", "Top Five Boy Names:");
}

function updateTopFiveDisplays() {
    console.log(allWordsReset);
    updateDisplay("theTopFiveGirlNames", "Top Five Girl Names: " + (allWordsReset.indexOf(theWordToGuess) + 1) + ": " + theWordToGuess); //
    updateDisplay("theTopFiveBoyNames", "Top Five Boy Names:");
}

// make girls and boys names guessed go into list in order
// make some "ta-da" when all ten names are guessed
// ? make it so you can do names from any year as sourced from Social Security's top-five per gender for the last 100 years


function playGame() {
    updateAllDisplays();
    if (allWordsToGuess.length === 0) {
        // woo-hoo, you guessed all 10! (this should be figured out elsewhere)
    } else {
        // pick the word based on a random number
        theRandomNumber = Math.floor(Math.random() * (+randomMax - +randomMin)) + +randomMin;
        theWordToGuess = allWordsToGuess[theRandomNumber];
        // console.log(theWordToGuess + " / random: " + theRandomNumber + " / randomMax: " + randomMax + " / allWords length: " + allWordsToGuess.length);
        // remove that word from our master list so it won't be repeated if someone plays again
        allWordsToGuess.splice(theRandomNumber, 1);
        randomMax = (allWordsToGuess.length - 1);
        theGuessesRemaining = theWordToGuess.length + 2;
        updateDisplay("theGuessesRemaining", "Guesses remaining: " + theGuessesRemaining);
        // put the word into an array
        theWordToGuessArray = theWordToGuess.split("");
        for (var count = 0; count < theWordToGuess.length; count++) {
            theLettersThatMatchArray.push("_");
        }
        console.log(theWordToGuess);
        updateDisplay("displayArea", theLettersThatMatchArray.join(" "));
    }
}

function respondToKeyPress() {
    if (theGuessesRemaining > 0) {
        // if it is not a letter then we will do nothing (maybe beep?)
        if (!allTheValidGuesses.includes(theKeyName) || theKeyName.length !== 1) {} else {

            theLettersGuessedArray.push(theKeyName);
            updateDisplay("theLettersGuessed", "Letters guessed: " + theLettersGuessedArray.join(", "))
            if (theWordToGuess.toLowerCase().includes(theKeyName.toLowerCase())) {
                // redo the display
                for (i = 0; i < theWordToGuess.length; i++) {
                    // if theKeyName is in theWordToGuessArray position[i] then splice
                    if (theWordToGuessArray[i].toLowerCase() == theKeyName.toLowerCase()) {
                        //check if the letter in theWordToGuessArray is capital and capitalize the spice if so
                        if (theWordToGuessArray[i] === theKeyName.toLowerCase()) {
                            theLettersThatMatchArray.splice(i, 1, theKeyName.toLowerCase());
                        } else {
                            theLettersThatMatchArray.splice(i, 1, theKeyName.toUpperCase());
                        }
                        updateDisplay("displayArea", theLettersThatMatchArray.join(" "));
                    }
                }
                // then see if the word has been completed
                if (!theLettersThatMatchArray.includes("_")) {
                    theWins = theWins + 1;
                    updateDisplay("displayArea", theLettersThatMatchArray.join(" "));
                    theWordsGuessedArray.push(theWordToGuess);
                    theMessage = ("You won! You guessed '" + theLettersThatMatchArray.join("") + "'.\nYou have won " + theWins + " games so far.");
                    // alert(theMessage);
                    document.getElementById("displayArea").innerHTML = theMessage;
                    theMessage = "Games won: " + theWins;
                    document.getElementById("theWins").innerHTML = theMessage;
                    updateTopFiveDisplays()
                }
                //if the guess is wrong the we decrement the guesses remaining
            } else {
                theGuessesRemaining = theGuessesRemaining - 1;
                theMessage = "Guesses remaining: " + theGuessesRemaining;
                document.getElementById("theGuessesRemaining").innerHTML = theMessage;
            }
        }
    }
    if (theGuessesRemaining == 0) {
        theWordsGuessedArray.push(theWordToGuess);
        theMessage = ("You ran out of guesses. The correct answer was '" + theWordToGuess.split("").join(" ") + "'.\nYou have won " + theWins + " games so far.")
            // alert(theMessage);
        document.getElementById("displayArea").innerHTML = theMessage;
        theMessage = "Games won: " + theWins;
        document.getElementById("theWins").innerHTML = theMessage;
        updateTopFiveDisplays()
    }
}