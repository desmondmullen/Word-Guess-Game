// remove camel case from css - use hyphens

// 3. ** HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed.This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
// 4. Save your whole game and its properties in an object.
// 5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// 6. Don't forget to place your global variables and functions above your object.
//     * Remember: global variables, then objects, then calls.

// make some "ta-da" when all ten names are guessed
// play sounds
// read me file

// one hundred years of names copied from https://www.ssa.gov/oact/babynames/top5names.html saved as a tab-delimited file, and processed using /processSSNames.html which produced the copy-and-paste, fully punctuated object below.
const oneHundredYearsOfNamesObject = { 2017: ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Liam", "Noah", "William", "James", "Logan"], 2016: ["Emma", "Olivia", "Ava", "Sophia", "Isabella", "Noah", "Liam", "William", "Mason", "James"], 2015: ["Emma", "Olivia", "Sophia", "Ava", "Isabella", "Noah", "Liam", "Mason", "Jacob", "William"], 2014: ["Emma", "Olivia", "Sophia", "Isabella", "Ava", "Noah", "Liam", "Mason", "Jacob", "William"], 2013: ["Sophia", "Emma", "Olivia", "Isabella", "Ava", "Noah", "Jacob", "Liam", "Mason", "William"], 2012: ["Sophia", "Emma", "Isabella", "Olivia", "Ava", "Jacob", "Mason", "Ethan", "Noah", "William"], 2011: ["Sophia", "Isabella", "Emma", "Olivia", "Ava", "Jacob", "Mason", "William", "Jayden", "Noah"], 2010: ["Isabella", "Sophia", "Emma", "Olivia", "Ava", "Jacob", "Ethan", "Michael", "Jayden", "William"], 2009: ["Isabella", "Emma", "Olivia", "Sophia", "Ava", "Jacob", "Ethan", "Michael", "Alexander", "William"], 2008: ["Emma", "Isabella", "Emily", "Olivia", "Ava", "Jacob", "Michael", "Ethan", "Joshua", "Daniel"], 2007: ["Emily", "Isabella", "Emma", "Ava", "Madison", "Jacob", "Michael", "Ethan", "Joshua", "Daniel"], 2006: ["Emily", "Emma", "Madison", "Isabella", "Ava", "Jacob", "Michael", "Joshua", "Ethan", "Matthew"], 2005: ["Emily", "Emma", "Madison", "Abigail", "Olivia", "Jacob", "Michael", "Joshua", "Matthew", "Ethan"], 2004: ["Emily", "Emma", "Madison", "Olivia", "Hannah", "Jacob", "Michael", "Joshua", "Matthew", "Ethan"], 2003: ["Emily", "Emma", "Madison", "Hannah", "Olivia", "Jacob", "Michael", "Joshua", "Matthew", "Andrew"], 2002: ["Emily", "Madison", "Hannah", "Emma", "Alexis", "Jacob", "Michael", "Joshua", "Matthew", "Ethan"], 2001: ["Emily", "Madison", "Hannah", "Ashley", "Alexis", "Jacob", "Michael", "Matthew", "Joshua", "Christopher"], 2000: ["Emily", "Hannah", "Madison", "Ashley", "Sarah", "Jacob", "Michael", "Matthew", "Joshua", "Christopher"], 1999: ["Emily", "Hannah", "Alexis", "Sarah", "Samantha", "Jacob", "Michael", "Matthew", "Joshua", "Nicholas"], 1998: ["Emily", "Hannah", "Samantha", "Sarah", "Ashley", "Michael", "Jacob", "Matthew", "Joshua", "Christopher"], 1997: ["Emily", "Jessica", "Ashley", "Sarah", "Hannah", "Michael", "Jacob", "Matthew", "Christopher", "Joshua"], 1996: ["Emily", "Jessica", "Ashley", "Sarah", "Samantha", "Michael", "Matthew", "Jacob", "Christopher", "Joshua"], 1995: ["Jessica", "Ashley", "Emily", "Samantha", "Sarah", "Michael", "Matthew", "Christopher", "Jacob", "Joshua"], 1994: ["Jessica", "Ashley", "Emily", "Samantha", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "Tyler"], 1993: ["Jessica", "Ashley", "Sarah", "Samantha", "Emily", "Michael", "Christopher", "Matthew", "Joshua", "Tyler"], 1992: ["Ashley", "Jessica", "Amanda", "Brittany", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "Andrew"], 1991: ["Ashley", "Jessica", "Brittany", "Amanda", "Samantha", "Michael", "Christopher", "Matthew", "Joshua", "Andrew"], 1990: ["Jessica", "Ashley", "Brittany", "Amanda", "Samantha", "Michael", "Christopher", "Matthew", "Joshua", "Daniel"], 1989: ["Jessica", "Ashley", "Brittany", "Amanda", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "David"], 1988: ["Jessica", "Ashley", "Amanda", "Sarah", "Jennifer", "Michael", "Christopher", "Matthew", "Joshua", "Andrew"], 1987: ["Jessica", "Ashley", "Amanda", "Jennifer", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "David"], 1986: ["Jessica", "Ashley", "Amanda", "Jennifer", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "David"], 1985: ["Jessica", "Ashley", "Jennifer", "Amanda", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "Daniel"], 1984: ["Jennifer", "Jessica", "Ashley", "Amanda", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "David"], 1983: ["Jennifer", "Jessica", "Amanda", "Ashley", "Sarah", "Michael", "Christopher", "Matthew", "David", "Joshua"], 1982: ["Jennifer", "Jessica", "Amanda", "Sarah", "Melissa", "Michael", "Christopher", "Matthew", "Jason", "David"], 1981: ["Jennifer", "Jessica", "Amanda", "Sarah", "Melissa", "Michael", "Christopher", "Matthew", "Jason", "David"], 1980: ["Jennifer", "Amanda", "Jessica", "Melissa", "Sarah", "Michael", "Christopher", "Jason", "David", "James"], 1979: ["Jennifer", "Melissa", "Amanda", "Jessica", "Amy", "Michael", "Christopher", "Jason", "David", "James"], 1978: ["Jennifer", "Melissa", "Jessica", "Amy", "Heather", "Michael", "Jason", "Christopher", "David", "James"], 1977: ["Jennifer", "Melissa", "Amy", "Jessica", "Heather", "Michael", "Jason", "Christopher", "David", "James"], 1976: ["Jennifer", "Amy", "Melissa", "Heather", "Angela", "Michael", "Jason", "Christopher", "David", "James"], 1975: ["Jennifer", "Amy", "Heather", "Melissa", "Angela", "Michael", "Jason", "Christopher", "James", "David"], 1974: ["Jennifer", "Amy", "Michelle", "Heather", "Angela", "Michael", "Jason", "Christopher", "David", "James"], 1973: ["Jennifer", "Amy", "Michelle", "Kimberly", "Lisa", "Michael", "Christopher", "Jason", "James", "David"], 1972: ["Jennifer", "Michelle", "Lisa", "Kimberly", "Amy", "Michael", "Christopher", "James", "David", "John"], 1971: ["Jennifer", "Michelle", "Lisa", "Kimberly", "Amy", "Michael", "James", "David", "John", "Robert"], 1970: ["Jennifer", "Lisa", "Kimberly", "Michelle", "Amy", "Michael", "James", "David", "John", "Robert"], 1969: ["Lisa", "Michelle", "Jennifer", "Kimberly", "Melissa", "Michael", "David", "James", "John", "Robert"], 1968: ["Lisa", "Michelle", "Kimberly", "Jennifer", "Melissa", "Michael", "David", "John", "James", "Robert"], 1967: ["Lisa", "Kimberly", "Michelle", "Mary", "Susan", "Michael", "David", "James", "John", "Robert"], 1966: ["Lisa", "Kimberly", "Mary", "Michelle", "Karen", "Michael", "David", "James", "John", "Robert"], 1965: ["Lisa", "Mary", "Karen", "Kimberly", "Susan", "Michael", "John", "David", "James", "Robert"], 1964: ["Lisa", "Mary", "Susan", "Karen", "Patricia", "Michael", "John", "David", "James", "Robert"], 1963: ["Lisa", "Mary", "Susan", "Karen", "Linda", "Michael", "John", "David", "James", "Robert"], 1962: ["Lisa", "Mary", "Susan", "Karen", "Linda", "Michael", "David", "John", "James", "Robert"], 1961: ["Mary", "Lisa", "Susan", "Linda", "Karen", "Michael", "David", "John", "James", "Robert"], 1960: ["Mary", "Susan", "Linda", "Karen", "Donna", "David", "Michael", "James", "John", "Robert"], 1959: ["Mary", "Susan", "Linda", "Karen", "Donna", "Michael", "David", "James", "John", "Robert"], 1958: ["Mary", "Susan", "Linda", "Karen", "Patricia", "Michael", "David", "James", "Robert", "John"], 1957: ["Mary", "Susan", "Linda", "Debra", "Karen", "Michael", "James", "David", "Robert", "John"], 1956: ["Mary", "Debra", "Linda", "Deborah", "Susan", "Michael", "James", "Robert", "David", "John"], 1955: ["Mary", "Deborah", "Linda", "Debra", "Susan", "Michael", "David", "James", "Robert", "John"], 1954: ["Mary", "Linda", "Deborah", "Patricia", "Susan", "Michael", "James", "Robert", "John", "David"], 1953: ["Mary", "Linda", "Deborah", "Patricia", "Susan", "Robert", "James", "Michael", "John", "David"], 1952: ["Linda", "Mary", "Patricia", "Deborah", "Susan", "James", "Robert", "John", "Michael", "David"], 1951: ["Linda", "Mary", "Patricia", "Deborah", "Barbara", "James", "Robert", "John", "Michael", "David"], 1950: ["Linda", "Mary", "Patricia", "Barbara", "Susan", "James", "Robert", "John", "Michael", "David"], 1949: ["Linda", "Mary", "Patricia", "Barbara", "Susan", "James", "Robert", "John", "William", "Michael"], 1948: ["Linda", "Mary", "Barbara", "Patricia", "Susan", "James", "Robert", "John", "William", "David"], 1947: ["Linda", "Mary", "Patricia", "Barbara", "Sandra", "James", "Robert", "John", "William", "Richard"], 1946: ["Mary", "Linda", "Patricia", "Barbara", "Carol", "James", "Robert", "John", "William", "Richard"], 1945: ["Mary", "Linda", "Barbara", "Patricia", "Carol", "James", "Robert", "John", "William", "Richard"], 1944: ["Mary", "Barbara", "Linda", "Patricia", "Carol", "James", "Robert", "John", "William", "Richard"], 1943: ["Mary", "Barbara", "Patricia", "Linda", "Carol", "James", "Robert", "John", "William", "Richard"], 1942: ["Mary", "Barbara", "Patricia", "Linda", "Carol", "James", "Robert", "John", "William", "Richard"], 1941: ["Mary", "Barbara", "Patricia", "Carol", "Linda", "James", "Robert", "John", "William", "Richard"], 1940: ["Mary", "Barbara", "Patricia", "Judith", "Betty", "James", "Robert", "John", "William", "Richard"], 1939: ["Mary", "Barbara", "Patricia", "Betty", "Shirley", "Robert", "James", "John", "William", "Richard"], 1938: ["Mary", "Barbara", "Patricia", "Betty", "Shirley", "Robert", "James", "John", "William", "Richard"], 1937: ["Mary", "Barbara", "Patricia", "Shirley", "Betty", "Robert", "James", "John", "William", "Richard"], 1936: ["Mary", "Shirley", "Barbara", "Betty", "Patricia", "Robert", "James", "John", "William", "Richard"], 1935: ["Mary", "Shirley", "Barbara", "Betty", "Patricia", "Robert", "James", "John", "William", "Richard"], 1934: ["Mary", "Betty", "Barbara", "Shirley", "Dorothy", "Robert", "James", "John", "William", "Richard"], 1933: ["Mary", "Betty", "Barbara", "Dorothy", "Joan", "Robert", "James", "John", "William", "Richard"], 1932: ["Mary", "Betty", "Barbara", "Dorothy", "Joan", "Robert", "James", "John", "William", "Richard"], 1931: ["Mary", "Betty", "Dorothy", "Barbara", "Joan", "Robert", "James", "John", "William", "Richard"], 1930: ["Mary", "Betty", "Dorothy", "Helen", "Margaret", "Robert", "James", "John", "William", "Richard"], 1929: ["Mary", "Betty", "Dorothy", "Helen", "Margaret", "Robert", "James", "John", "William", "Charles"], 1928: ["Mary", "Betty", "Dorothy", "Helen", "Margaret", "Robert", "John", "James", "William", "Charles"], 1927: ["Mary", "Dorothy", "Betty", "Helen", "Margaret", "Robert", "John", "James", "William", "Charles"], 1926: ["Mary", "Dorothy", "Betty", "Helen", "Margaret", "Robert", "John", "James", "William", "Charles"], 1925: ["Mary", "Dorothy", "Betty", "Helen", "Margaret", "Robert", "John", "William", "James", "Charles"], 1924: ["Mary", "Dorothy", "Helen", "Betty", "Margaret", "Robert", "John", "William", "James", "Charles"], 1923: ["Mary", "Dorothy", "Helen", "Margaret", "Betty", "John", "Robert", "William", "James", "Charles"], 1922: ["Mary", "Dorothy", "Helen", "Margaret", "Ruth", "John", "Robert", "William", "James", "Charles"], 1921: ["Mary", "Dorothy", "Helen", "Margaret", "Ruth", "John", "Robert", "William", "James", "Charles"], 1920: ["Mary", "Dorothy", "Helen", "Margaret", "Ruth", "John", "William", "Robert", "James", "Charles"], 1919: ["Mary", "Helen", "Dorothy", "Margaret", "Ruth", "John", "William", "James", "Robert", "Charles"], 1918: ["Mary", "Helen", "Dorothy", "Margaret", "Ruth", "John", "William", "James", "Robert", "Charles"] }

window.onload = function windowLoad() {
    resetGame();
};

// the following starts gameplay in motion by asking for a year
let theYearDisplay = Number(prompt("Please enter any year from 1918 to 2017 and guess the most popular names for that year:"));
if (theYearDisplay == null || theYearDisplay == "") { // if user cancels, go back to start screen
    window.location.href = "index.html";
} else { // if they haven't cancelled, check to see if it's a useable year
    if ((theYearDisplay > 2017 || theYearDisplay < 1918) && theYearDisplay != NaN) { // if not a useable number, we prompt again
        theYearDisplay = Number(prompt("Please enter a number from 1918 to 2017"));
    } else { // if the user cancelled or pressed OK with no number (may be text or nothing) in field
        if (theYearDisplay > 2017 || theYearDisplay < 1918 || theYearDisplay == NaN || theYearDisplay == null || theYearDisplay == "") { // sounds like they don't want to play so we go back to the start screen
            window.location.href = "index.html";
        }
    }
}

let theShortPageBackground = "assets/images/" + theYearDisplay + ".jpg";
let thePageBackground = "<img src=\"assets/images/" + theYearDisplay + ".jpg\" class=\"theBackgroundImage\">";
const allWordsReset = [...oneHundredYearsOfNamesObject[theYearDisplay]];
const allWordsToGuess = [...allWordsReset];
let theWordToGuess = "";
const allTheValidGuesses = "abcdefghijklmnopqrstuvwxyz";
let theWins = 0;
let theGuessesRemaining = 0;
let theDifficultyLevel = 2;
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
let theGameIsActive = false;

function getDifficulty() { // check the radio buttons and update the difficulty level. The (word length + difficulty level) = the number of guesses the user gets.
    if (document.getElementById("easyDifficulty").checked) {
        theDifficultyLevel = 4;
    } else {
        if (document.getElementById("standardDifficulty").checked) {
            theDifficultyLevel = 2;
        } else {
            theDifficultyLevel = -1;
        }
    }
    updateGuessesRemaining();
}

function makeGameNotActive() {
    theGameIsActive = false;
    setFocus("playAgain");
    if (theGameIsActive) {
        respondToKeyPress();
    }
}

document.addEventListener("keypress", (event) => {
    theKeyName = event.key;
    if (event.key === "Enter") {
        if (document.activeElement !== document.getElementById("playAgain")) {
            playAgain();
        }
    } else {
        if (theGameIsActive) {
            respondToKeyPress();
        }
    }
});

function setFocus(theID) {
    document.activeElement.blur();
    document.getElementById(theID).focus();
}

function focusOnHiddenTextField() {
    setFocus("hiddenTextField"); // this is necessary for gameplay on mobiles - you cannot just programmatically open the keyboard, you need to have a field and put the focus on it.
}

function startNewGame() { // this includes choosing a year
    location.reload();
}

function resetGame() { // full reset
    const allWordsToGuess = [...allWordsReset];
    theWins = 0;
    theWordsGuessedArray = [];

    theLettersThatMatchArray = [];
    theLettersGuessedArray = [];
    playAgain();
}

function playAgain() { // partial reset - this allows all ten names for a year to be guessed
    setFocus("hiddenTextField");
    theLettersThatMatchArray = [];
    theLettersGuessedArray = [];
    playGame();
}

function backToStart() { // if user clicks the button, or if selection of the year is cancelled or fails twice we go back to start screen
    window.location.href = "index.html";
}

function showBackgroundImage() { // shows the year's newspaper jpg in a new window without the opacity reduction used in gameplay
    window.open(theShortPageBackground);
    setFocus("hiddenTextField");
}

function updateDisplay(theID, theMessage) {
    document.getElementById(theID).innerHTML = theMessage;
}

function updateAllDisplays() {
    updateDisplay("theHeadline", "<em>Guess the Top Baby Names of " + theYearDisplay + "</em>");
    updateDisplay("displayArea", "&nbsp;");
    updateDisplay("theWins", "Rounds won: " + theWins + " out of " + (10 - allWordsToGuess.length) + " rounds played");
    updateDisplay("theLettersGuessed", "Letters guessed: " + theLettersGuessedArray.join(" "));
    updateGuessesRemaining();
    updateTopFiveDisplays();
}

function updateDisplaysExceptDisplayAndRemaining() { // used when gameplay finishes and user wins or loses round
    updateDisplay("theHeadline", "<em>Guess the Top Baby Names of " + theYearDisplay + "</em>");
    updateDisplay("theWins", "Rounds won: " + theWins + " out of " + (10 - allWordsToGuess.length) + " rounds played");
    updateDisplay("theLettersGuessed", "Letters guessed: " + theLettersGuessedArray.join(" "));
    updateTopFiveDisplays();
}

function updateTopFiveDisplays() { // updates the top-five girls and the top-five boys names, correctly ranking each name for the year when the word is guessed or the round is lost
    theIndex = (allWordsReset.indexOf(theWordToGuess));
    if (0 <= theIndex) {
        if (theIndex <= 4) {
            theTopFiveGirlNamesArray.splice(theIndex, 1, (theIndex + 1) + ": " + theWordToGuess);
        } else {
            theTopFiveBoyNamesArray.splice(theIndex - 5, 1, (theIndex - 4) + ": " + theWordToGuess);
        }
    }
    updateDisplay("theTopFiveGirlNames", "Top Five Girl Names of " + theYearDisplay + "<br><ul><li>" + theTopFiveGirlNamesArray.join("</li><li>") + "</li></ul>"); // auto-magically makes unordered lists
    updateDisplay("theTopFiveBoyNames", "Top Five Boy Names of " + theYearDisplay + "<br><ul><li>" + theTopFiveBoyNamesArray.join("</li><li>") + "</li></ul>");
}

function updateGuessesRemaining() {
    theGuessesRemaining = theWordToGuess.length + theDifficultyLevel;
    updateDisplay("theGuessesRemaining", "<strong>Guesses remaining: </strong>" + theGuessesRemaining);
}

function makeSound(waveform1, frequency1, start1, stop1, waveform2, frequency2, start2, stop2) { // this is very basic sound generation but it's very flexible and doesn't require more files
    var context = new(window.AudioContext || window.webkitAudioContext)();
    var context2 = new(window.AudioContext || window.webkitAudioContext)();
    var oscillator = context.createOscillator();
    var oscillator2 = context2.createOscillator();
    oscillator.type = waveform1;
    oscillator.frequency.value = frequency1;
    oscillator.connect(context.destination);
    oscillator.start(start1);
    oscillator.stop(context.currentTime + stop1);
    if (waveform2 != "") {
        oscillator2.type = waveform2;
        oscillator2.frequency.value = frequency2;
        oscillator2.connect(context2.destination);
        oscillator2.start(context2.currentTime + start2);
        oscillator2.stop(context2.currentTime + stop2);
    }
}

function buzzBeep() {
    makeSound("sawtooth", 60, 0, 0.07);
}

function shortBuzzBeep() {
    makeSound("sawtooth", 60, 0, 0.03);
}

function shortWinBeep() {
    makeSound("sine", 220, 0, 0.03);
}


function lossBeep() {
    makeSound("sawtooth", 50, 0, 0.4);
}

function winBeep() {
    makeSound("sine", 660, 0, 0.05, "sine", 880, 0.07, 0.2);
}

function bigWinBeep() {
    makeSound("sine", 440, 0, 0.15, "sine", 880, 0.2, 1.5);
}

function announceTheEnd() {
    updateDisplay("displayArea", "<em>These are the top ten baby names of " + theYearDisplay + "!</em>");
    setFocus("startNewGame");
    bigWinBeep();
}

function playGame() { // this does some initializing, gets the corresponding-year picture in the background, and randomly selects the name to guess
    theGameIsActive = true;
    getDifficulty();
    updateDisplay("backgroundImageHolder", thePageBackground);
    updateAllDisplays(); // we overwrite a couple of these below but this makes sure all our bases are covered
    // we pick a name from the array based on a random number
    theRandomNumber = Math.floor(Math.random() * (+randomMax - +randomMin)) + +randomMin;
    theWordToGuess = allWordsToGuess[theRandomNumber];
    // remove that name from our master list so it won't be repeated if someone plays again
    allWordsToGuess.splice(theRandomNumber, 1);
    randomMax = (allWordsToGuess.length - 1);
    updateGuessesRemaining();
    // put the name into an array so we can deal with the letters separately, set up arrays for the letters that match (the main gameplay display) and the letters guessed including blanks for the remaining guesses (this goes to the secondary gameplay display)
    theWordToGuessArray = theWordToGuess.split("");
    for (var count = 0; count < theWordToGuess.length; count++) {
        theLettersThatMatchArray.push("_");
        theLettersGuessedArray.push("_");
    }

    // FIX - this is where an extra underscore gets in when difficulty is "hard"
    for (var count = 0; count < theDifficultyLevel; count++) { // add a couple more underscores for the difficulty level
        theLettersGuessedArray.push("_");
    }
    console.log(theWordToGuess); // peek there if you want to cheat!
    updateDisplay("displayArea", "The name to guess: " + theLettersThatMatchArray.join(" "));
    updateDisplay("theLettersGuessed", "Letters guessed: " + theLettersGuessedArray.join(" "));

    setFocus("hiddenTextField");
}

function respondToKeyPress() {
    if (theGuessesRemaining > 0) {
        // if it is not a letter then we will beep to indicate an error
        if (!allTheValidGuesses.includes(theKeyName.toLowerCase()) || theKeyName.length !== 1 || theLettersGuessedArray.includes(theKeyName.toLowerCase())) {
            buzzBeep();
        } else { // put the letter in place of an underscore in theLettersGuessedArray
            if (theWordToGuess.toLowerCase().includes(theKeyName.toLowerCase())) {
                theLettersGuessedArray.splice(theLettersGuessedArray.indexOf('_'), 0, theKeyName.toLowerCase());
                updateDisplay("theLettersGuessed", "Letters guessed: " + theLettersGuessedArray.join(" "));
                // get the letter in the right place (observing capitals) and redo the word-to-guess display
                for (i = 0; i < theWordToGuess.length; i++) {
                    // if theKeyName is in theWordToGuessArray position[i] then splice
                    if (theWordToGuessArray[i].toLowerCase() == theKeyName.toLowerCase()) {
                        //check if the letter in theWordToGuessArray is capital and capitalize the splice if so
                        if (theWordToGuessArray[i] === theKeyName.toLowerCase()) {
                            theLettersThatMatchArray.splice(i, 1, theKeyName.toLowerCase());
                        } else {
                            theLettersThatMatchArray.splice(i, 1, theKeyName.toUpperCase());
                        }
                        updateDisplay("displayArea", "The name to guess: " + theLettersThatMatchArray.join(" "));
                    }
                }
                // then see if the word has been completed
                if (!theLettersThatMatchArray.includes("_")) {
                    theWins = theWins + 1;
                    updateDisplay("displayArea", "You won that round!");
                    theWordsGuessedArray.push(theWordToGuess);
                    updateDisplaysExceptDisplayAndRemaining();
                    makeGameNotActive();
                    if (allWordsToGuess.length === 0) { // if there are no more names to guess
                        announceTheEnd();
                    } else {
                        winBeep();
                    }
                }
                shortWinBeep();
                //if the guess is wrong then we decrement the guesses remaining
            } else {
                theLettersGuessedArray.splice(theLettersGuessedArray.indexOf('_'), 1, theKeyName.toLowerCase());
                updateDisplay("theLettersGuessed", "Letters guessed: " + theLettersGuessedArray.join(" "));
                theGuessesRemaining = theGuessesRemaining - 1;
                theMessage = "Guesses remaining: " + theGuessesRemaining;
                document.getElementById("theGuessesRemaining").innerHTML = theMessage;
                shortBuzzBeep();
            }
        }
    } // if user has run out of guesses, we end up here
    if (theGuessesRemaining === 0) {
        theWordsGuessedArray.push(theWordToGuess);
        updateDisplay("displayArea", "No guesses left. It was '" + theWordToGuess + "'");
        updateDisplaysExceptDisplayAndRemaining();
        makeGameNotActive();
        if (allWordsToGuess.length === 0) { // if there are no more names to guess
            announceTheEnd();
        } else {
            lossBeep();
        }
    }
}