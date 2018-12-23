window.onload = function windowLoad() {
    setFocus();
};

document.addEventListener("keypress", (event) => {
    window.location.href = "objectgameplay.html";
});

function setFocus() {
    document.activeElement.blur();
    document.getElementById("startFromStartScreen").focus();
}

function startFromStartScreen() {
    window.location.href = "objectgameplay.html";
}