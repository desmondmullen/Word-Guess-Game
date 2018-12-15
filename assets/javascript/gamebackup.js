// 3. ** HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed.This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
// 4. Save your whole game and its properties in an object.
// 5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// 6. Don't forget to place your global variables and functions above your object.
//     * Remember: global variables, then objects, then calls.

// get keyboard to show on mobile
// fix the zero in the last row of Girl names
// fix the reset button
// declare variables within a function?
// there may be some game count and other scoring anomalies - need to not accept key inputs when game not active
// make some "ta-da" when all ten names are guessed
// make it so you can do names from any year as sourced from Social Security's top-five per gender for the last 100 years
// play sounds

const fiftyAndHundred = [
    ["Lisa", "Michelle", "Kimberly", "Jennifer", "Melissa", "Michael", "David", "John", "James", "Robert"],
    ["Mary", "Helen", "Dorothy", "Margaret", "Ruth", "John", "William", "James", "Robert", "Charles"]
];
let theYear = prompt("Please enter 0 for 1968 or 1 for 1918");
let theYearDisplay = 0
if (theYear == 0) {
    theYearDisplay = 1968;
} else {
    theYearDisplay = 1918;
}
const allWordsReset = [...fiftyAndHundred[theYear]];

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
let theTopFiveGirlNamesArray = ["1: ", "2: ", "3: ", "4: ", "5: "];
let theTopFiveBoyNamesArray = ["1: ", "2: ", "3: ", "4: ", "5: "];
let theIndex = 0;

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
    const allWordsToGuess = [...allWordsReset];
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
    updateDisplay("theHeadline", "Guess the Top Ten Baby Names of " + theYearDisplay + "!");
    updateDisplay("displayArea", "&nbsp;");
    updateDisplay("theWins", "Games won: " + theWins);
    updateDisplay("theLettersGuessed", "Letters guessed: " + theLettersGuessedArray.join(", "));
    updateDisplay("theGuessesRemaining", "Guesses remaining: " + theGuessesRemaining);
    // the following field plus theTopFiveGirlNames/BoyNames should be "localized" as needed for different games
    // updateDisplay("theWordsGuessed", "Names guessed: " + theWordsGuessedArray.join(", "));
    updateTopFiveDisplays()
}

function updateTopFiveDisplays() {
    theIndex = (allWordsReset.indexOf(theWordToGuess));
    console.log(theIndex);
    // if ((theIndex <= 4) && (theIndex !== -1)) { // there's some annoying thing in here where girl 5 shows "0:"
    if (theIndex <= 4) {
        theTopFiveGirlNamesArray.splice(theIndex, 1, (theIndex + 1) + ": " + theWordToGuess);
    } else {
        theTopFiveBoyNamesArray.splice(theIndex - 5, 1, (theIndex - 4) + ": " + theWordToGuess);
    }
    updateDisplay("theTopFiveGirlNames", "Top Five Girl Names<br><ul><li>" + theTopFiveGirlNamesArray.join("</li><li>") + "</li></ul>");
    updateDisplay("theTopFiveBoyNames", "Top Five Boy Names<br><ul><li>" + theTopFiveBoyNamesArray.join("</li><li>") + "</li></ul>");
}

function playGame() {
    updateAllDisplays();
    if (allWordsToGuess.length === 0) {
        // woo-hoo, you guessed all 10! (this needs to be cleaned up)
        updateDisplay("displayArea", "Woo-hoo! These are the top ten baby names of " + theYearDisplay + "!");
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