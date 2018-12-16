// remove camel case from css - use hyphens

// 3. ** HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed.This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
// 4. Save your whole game and its properties in an object.
// 5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// 6. Don't forget to place your global variables and functions above your object.
//     * Remember: global variables, then objects, then calls.

// get keyboard to show on mobile
// fix the zero in the last row of Girl names
// fix the reset button
// there may be some game count and other scoring anomalies - need to not accept key inputs when game not active
// make some "ta-da" when all ten names are guessed
// play sounds
// read me file

//{ key1: ["val1", "val2", "val3"], key2: "value2" }
// one hundred years of names from https://www.ssa.gov/oact/babynames/top5names.html
const oneHundredYearsOfNamesObject = { 2017: ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Liam", "Noah", "William", "James", "Logan"], 2016: ["Emma", "Olivia", "Ava", "Sophia", "Isabella", "Noah", "Liam", "William", "Mason", "James"], 2015: ["Emma", "Olivia", "Sophia", "Ava", "Isabella", "Noah", "Liam", "Mason", "Jacob", "William"], 2014: ["Emma", "Olivia", "Sophia", "Isabella", "Ava", "Noah", "Liam", "Mason", "Jacob", "William"], 2013: ["Sophia", "Emma", "Olivia", "Isabella", "Ava", "Noah", "Jacob", "Liam", "Mason", "William"], 2012: ["Sophia", "Emma", "Isabella", "Olivia", "Ava", "Jacob", "Mason", "Ethan", "Noah", "William"], 2011: ["Sophia", "Isabella", "Emma", "Olivia", "Ava", "Jacob", "Mason", "William", "Jayden", "Noah"], 2010: ["Isabella", "Sophia", "Emma", "Olivia", "Ava", "Jacob", "Ethan", "Michael", "Jayden", "William"], 2009: ["Isabella", "Emma", "Olivia", "Sophia", "Ava", "Jacob", "Ethan", "Michael", "Alexander", "William"], 2008: ["Emma", "Isabella", "Emily", "Olivia", "Ava", "Jacob", "Michael", "Ethan", "Joshua", "Daniel"], 2007: ["Emily", "Isabella", "Emma", "Ava", "Madison", "Jacob", "Michael", "Ethan", "Joshua", "Daniel"], 2006: ["Emily", "Emma", "Madison", "Isabella", "Ava", "Jacob", "Michael", "Joshua", "Ethan", "Matthew"], 2005: ["Emily", "Emma", "Madison", "Abigail", "Olivia", "Jacob", "Michael", "Joshua", "Matthew", "Ethan"], 2004: ["Emily", "Emma", "Madison", "Olivia", "Hannah", "Jacob", "Michael", "Joshua", "Matthew", "Ethan"], 2003: ["Emily", "Emma", "Madison", "Hannah", "Olivia", "Jacob", "Michael", "Joshua", "Matthew", "Andrew"], 2002: ["Emily", "Madison", "Hannah", "Emma", "Alexis", "Jacob", "Michael", "Joshua", "Matthew", "Ethan"], 2001: ["Emily", "Madison", "Hannah", "Ashley", "Alexis", "Jacob", "Michael", "Matthew", "Joshua", "Christopher"], 2000: ["Emily", "Hannah", "Madison", "Ashley", "Sarah", "Jacob", "Michael", "Matthew", "Joshua", "Christopher"], 1999: ["Emily", "Hannah", "Alexis", "Sarah", "Samantha", "Jacob", "Michael", "Matthew", "Joshua", "Nicholas"], 1998: ["Emily", "Hannah", "Samantha", "Sarah", "Ashley", "Michael", "Jacob", "Matthew", "Joshua", "Christopher"], 1997: ["Emily", "Jessica", "Ashley", "Sarah", "Hannah", "Michael", "Jacob", "Matthew", "Christopher", "Joshua"], 1996: ["Emily", "Jessica", "Ashley", "Sarah", "Samantha", "Michael", "Matthew", "Jacob", "Christopher", "Joshua"], 1995: ["Jessica", "Ashley", "Emily", "Samantha", "Sarah", "Michael", "Matthew", "Christopher", "Jacob", "Joshua"], 1994: ["Jessica", "Ashley", "Emily", "Samantha", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "Tyler"], 1993: ["Jessica", "Ashley", "Sarah", "Samantha", "Emily", "Michael", "Christopher", "Matthew", "Joshua", "Tyler"], 1992: ["Ashley", "Jessica", "Amanda", "Brittany", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "Andrew"], 1991: ["Ashley", "Jessica", "Brittany", "Amanda", "Samantha", "Michael", "Christopher", "Matthew", "Joshua", "Andrew"], 1990: ["Jessica", "Ashley", "Brittany", "Amanda", "Samantha", "Michael", "Christopher", "Matthew", "Joshua", "Daniel"], 1989: ["Jessica", "Ashley", "Brittany", "Amanda", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "David"], 1988: ["Jessica", "Ashley", "Amanda", "Sarah", "Jennifer", "Michael", "Christopher", "Matthew", "Joshua", "Andrew"], 1987: ["Jessica", "Ashley", "Amanda", "Jennifer", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "David"], 1986: ["Jessica", "Ashley", "Amanda", "Jennifer", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "David"], 1985: ["Jessica", "Ashley", "Jennifer", "Amanda", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "Daniel"], 1984: ["Jennifer", "Jessica", "Ashley", "Amanda", "Sarah", "Michael", "Christopher", "Matthew", "Joshua", "David"], 1983: ["Jennifer", "Jessica", "Amanda", "Ashley", "Sarah", "Michael", "Christopher", "Matthew", "David", "Joshua"], 1982: ["Jennifer", "Jessica", "Amanda", "Sarah", "Melissa", "Michael", "Christopher", "Matthew", "Jason", "David"], 1981: ["Jennifer", "Jessica", "Amanda", "Sarah", "Melissa", "Michael", "Christopher", "Matthew", "Jason", "David"], 1980: ["Jennifer", "Amanda", "Jessica", "Melissa", "Sarah", "Michael", "Christopher", "Jason", "David", "James"], 1979: ["Jennifer", "Melissa", "Amanda", "Jessica", "Amy", "Michael", "Christopher", "Jason", "David", "James"], 1978: ["Jennifer", "Melissa", "Jessica", "Amy", "Heather", "Michael", "Jason", "Christopher", "David", "James"], 1977: ["Jennifer", "Melissa", "Amy", "Jessica", "Heather", "Michael", "Jason", "Christopher", "David", "James"], 1976: ["Jennifer", "Amy", "Melissa", "Heather", "Angela", "Michael", "Jason", "Christopher", "David", "James"], 1975: ["Jennifer", "Amy", "Heather", "Melissa", "Angela", "Michael", "Jason", "Christopher", "James", "David"], 1974: ["Jennifer", "Amy", "Michelle", "Heather", "Angela", "Michael", "Jason", "Christopher", "David", "James"], 1973: ["Jennifer", "Amy", "Michelle", "Kimberly", "Lisa", "Michael", "Christopher", "Jason", "James", "David"], 1972: ["Jennifer", "Michelle", "Lisa", "Kimberly", "Amy", "Michael", "Christopher", "James", "David", "John"], 1971: ["Jennifer", "Michelle", "Lisa", "Kimberly", "Amy", "Michael", "James", "David", "John", "Robert"], 1970: ["Jennifer", "Lisa", "Kimberly", "Michelle", "Amy", "Michael", "James", "David", "John", "Robert"], 1969: ["Lisa", "Michelle", "Jennifer", "Kimberly", "Melissa", "Michael", "David", "James", "John", "Robert"], 1968: ["Lisa", "Michelle", "Kimberly", "Jennifer", "Melissa", "Michael", "David", "John", "James", "Robert"], 1967: ["Lisa", "Kimberly", "Michelle", "Mary", "Susan", "Michael", "David", "James", "John", "Robert"], 1966: ["Lisa", "Kimberly", "Mary", "Michelle", "Karen", "Michael", "David", "James", "John", "Robert"], 1965: ["Lisa", "Mary", "Karen", "Kimberly", "Susan", "Michael", "John", "David", "James", "Robert"], 1964: ["Lisa", "Mary", "Susan", "Karen", "Patricia", "Michael", "John", "David", "James", "Robert"], 1963: ["Lisa", "Mary", "Susan", "Karen", "Linda", "Michael", "John", "David", "James", "Robert"], 1962: ["Lisa", "Mary", "Susan", "Karen", "Linda", "Michael", "David", "John", "James", "Robert"], 1961: ["Mary", "Lisa", "Susan", "Linda", "Karen", "Michael", "David", "John", "James", "Robert"], 1960: ["Mary", "Susan", "Linda", "Karen", "Donna", "David", "Michael", "James", "John", "Robert"], 1959: ["Mary", "Susan", "Linda", "Karen", "Donna", "Michael", "David", "James", "John", "Robert"], 1958: ["Mary", "Susan", "Linda", "Karen", "Patricia", "Michael", "David", "James", "Robert", "John"], 1957: ["Mary", "Susan", "Linda", "Debra", "Karen", "Michael", "James", "David", "Robert", "John"], 1956: ["Mary", "Debra", "Linda", "Deborah", "Susan", "Michael", "James", "Robert", "David", "John"], 1955: ["Mary", "Deborah", "Linda", "Debra", "Susan", "Michael", "David", "James", "Robert", "John"], 1954: ["Mary", "Linda", "Deborah", "Patricia", "Susan", "Michael", "James", "Robert", "John", "David"], 1953: ["Mary", "Linda", "Deborah", "Patricia", "Susan", "Robert", "James", "Michael", "John", "David"], 1952: ["Linda", "Mary", "Patricia", "Deborah", "Susan", "James", "Robert", "John", "Michael", "David"], 1951: ["Linda", "Mary", "Patricia", "Deborah", "Barbara", "James", "Robert", "John", "Michael", "David"], 1950: ["Linda", "Mary", "Patricia", "Barbara", "Susan", "James", "Robert", "John", "Michael", "David"], 1949: ["Linda", "Mary", "Patricia", "Barbara", "Susan", "James", "Robert", "John", "William", "Michael"], 1948: ["Linda", "Mary", "Barbara", "Patricia", "Susan", "James", "Robert", "John", "William", "David"], 1947: ["Linda", "Mary", "Patricia", "Barbara", "Sandra", "James", "Robert", "John", "William", "Richard"], 1946: ["Mary", "Linda", "Patricia", "Barbara", "Carol", "James", "Robert", "John", "William", "Richard"], 1945: ["Mary", "Linda", "Barbara", "Patricia", "Carol", "James", "Robert", "John", "William", "Richard"], 1944: ["Mary", "Barbara", "Linda", "Patricia", "Carol", "James", "Robert", "John", "William", "Richard"], 1943: ["Mary", "Barbara", "Patricia", "Linda", "Carol", "James", "Robert", "John", "William", "Richard"], 1942: ["Mary", "Barbara", "Patricia", "Linda", "Carol", "James", "Robert", "John", "William", "Richard"], 1941: ["Mary", "Barbara", "Patricia", "Carol", "Linda", "James", "Robert", "John", "William", "Richard"], 1940: ["Mary", "Barbara", "Patricia", "Judith", "Betty", "James", "Robert", "John", "William", "Richard"], 1939: ["Mary", "Barbara", "Patricia", "Betty", "Shirley", "Robert", "James", "John", "William", "Richard"], 1938: ["Mary", "Barbara", "Patricia", "Betty", "Shirley", "Robert", "James", "John", "William", "Richard"], 1937: ["Mary", "Barbara", "Patricia", "Shirley", "Betty", "Robert", "James", "John", "William", "Richard"], 1936: ["Mary", "Shirley", "Barbara", "Betty", "Patricia", "Robert", "James", "John", "William", "Richard"], 1935: ["Mary", "Shirley", "Barbara", "Betty", "Patricia", "Robert", "James", "John", "William", "Richard"], 1934: ["Mary", "Betty", "Barbara", "Shirley", "Dorothy", "Robert", "James", "John", "William", "Richard"], 1933: ["Mary", "Betty", "Barbara", "Dorothy", "Joan", "Robert", "James", "John", "William", "Richard"], 1932: ["Mary", "Betty", "Barbara", "Dorothy", "Joan", "Robert", "James", "John", "William", "Richard"], 1931: ["Mary", "Betty", "Dorothy", "Barbara", "Joan", "Robert", "James", "John", "William", "Richard"], 1930: ["Mary", "Betty", "Dorothy", "Helen", "Margaret", "Robert", "James", "John", "William", "Richard"], 1929: ["Mary", "Betty", "Dorothy", "Helen", "Margaret", "Robert", "James", "John", "William", "Charles"], 1928: ["Mary", "Betty", "Dorothy", "Helen", "Margaret", "Robert", "John", "James", "William", "Charles"], 1927: ["Mary", "Dorothy", "Betty", "Helen", "Margaret", "Robert", "John", "James", "William", "Charles"], 1926: ["Mary", "Dorothy", "Betty", "Helen", "Margaret", "Robert", "John", "James", "William", "Charles"], 1925: ["Mary", "Dorothy", "Betty", "Helen", "Margaret", "Robert", "John", "William", "James", "Charles"], 1924: ["Mary", "Dorothy", "Helen", "Betty", "Margaret", "Robert", "John", "William", "James", "Charles"], 1923: ["Mary", "Dorothy", "Helen", "Margaret", "Betty", "John", "Robert", "William", "James", "Charles"], 1922: ["Mary", "Dorothy", "Helen", "Margaret", "Ruth", "John", "Robert", "William", "James", "Charles"], 1921: ["Mary", "Dorothy", "Helen", "Margaret", "Ruth", "John", "Robert", "William", "James", "Charles"], 1920: ["Mary", "Dorothy", "Helen", "Margaret", "Ruth", "John", "William", "Robert", "James", "Charles"], 1919: ["Mary", "Helen", "Dorothy", "Margaret", "Ruth", "John", "William", "James", "Robert", "Charles"], 1918: ["Mary", "Helen", "Dorothy", "Margaret", "Ruth", "John", "William", "James", "Robert", "Charles"] }

const pageBackgrounds = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

let theYearDisplay = prompt("Please enter a year between 1918 and 2017");
let thePageBackground = pageBackgrounds[theYearDisplay - 1918];
const allWordsReset = [...oneHundredYearsOfNamesObject[theYearDisplay]];
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
let theGameIsActive = false;

window.onload = function windowLoad() {
    resetGame();
};

document.addEventListener("keypress", (event) => {
    theKeyName = event.key;
    if (event.key === "Enter") {
        playAgain();
    } else {
        if (theGameIsActive) {
            respondToKeyPress();
        }
    }
});

function startNewGame() {
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

function playAgain() { // partial reset
    document.getElementById("playAgain").blur();
    document.getElementById("hiddenTextField").focus();
    theLettersThatMatchArray = [];
    theLettersGuessedArray = [];
    playGame();
}

function updateDisplay(theID, theMessage) {
    document.getElementById(theID).innerHTML = theMessage;
}

function updateAllDisplays() {
    updateDisplay("theHeadline", "Guess the Top Ten Baby Names of " + theYearDisplay + "<br><em>Try to guess all ten!</em>");
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
    theGameIsActive = true;
    document.getElementById("hiddenTextField").focus();
    document.body.style.backgroundColor = thePageBackground;
    updateAllDisplays();
    if (allWordsToGuess.length === 0) {
        // woo-hoo, you guessed all 10! (this needs to be cleaned up)
        updateDisplay("displayArea", "<em>Woo-hoo! These are the top ten baby names of " + theYearDisplay + "!</em>");
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
        updateDisplay("displayArea", "The name to guess: " + theLettersThatMatchArray.join(" "));
    }
}

function respondToKeyPress() {
    if (theGuessesRemaining > 0) {
        // if it is not a letter then we will do nothing (maybe beep?)
        if (!allTheValidGuesses.includes(theKeyName) || theKeyName.length !== 1 || theLettersGuessedArray.includes(theKeyName)) { //beep
        } else {
            // if (!allTheValidGuesses.includes(theKeyName) || theKeyName.length !== 1) {} else {
            // theLettersGuessedArray.includes(theKeyName)
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
                        updateDisplay("displayArea", "The name to guess: " + theLettersThatMatchArray.join(" "));
                    }
                }
                // then see if the word has been completed
                if (!theLettersThatMatchArray.includes("_")) {
                    theWins = theWins + 1;
                    updateDisplay("displayArea", "The name to guess: " + theLettersThatMatchArray.join(" "));
                    theWordsGuessedArray.push(theWordToGuess);
                    theMessage = ("You won! You guessed '" + theLettersThatMatchArray.join("") + "'.\nYou have won " + theWins + " games so far.");
                    theGameIsActive = false;
                    document.getElementById("playAgain").focus();
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
        theGameIsActive = false;
        document.getElementById("playAgain").focus();
        document.getElementById("displayArea").innerHTML = theMessage;
        theMessage = "Games won: " + theWins;
        document.getElementById("theWins").innerHTML = theMessage;
        updateTopFiveDisplays()
    }
}