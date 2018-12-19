window.onload = function windowLoad() {
    setFocus();
};

document.addEventListener("keypress", (event) => {
    window.location.href = "gameplay.html";
});

function setFocus() {
    document.activeElement.blur();
    document.getElementById("startFromStartScreen").focus();
}

function startFromStartScreen() {
    window.location.href = "gameplay.html";
}