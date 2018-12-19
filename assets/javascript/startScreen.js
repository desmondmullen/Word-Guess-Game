function makeGameNotActive() {
    theGameIsActive = false;
    setFocus("playAgain");
    if (theGameIsActive) {
        respondToKeyPress();
    }
}

window.onload = function windowLoad() {
    resetGame();
};

document.addEventListener("keypress", (event) => {
    theKeyName = event.key;
    if (event.key === "Enter") {
        if (document.activeElement !== document.getElementById('playAgain')) {
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

function startNewGame() {
    location.reload();
}

function resetGame() { // full reset
    // const allWordsToGuess = [...allWordsReset];
    // theWins = 0;
    // theWordsGuessedArray = [];

    // theLettersThatMatchArray = [];
    // theLettersGuessedArray = [];
    playAgain();
}

function playAgain() { // partial reset
    // setFocus("hiddenTextField");
    // theLettersThatMatchArray = [];
    // theLettersGuessedArray = [];
    // playGame();
}