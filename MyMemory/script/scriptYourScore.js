"use strict";
let sendButton = document.getElementById("sendScore");
sendButton.addEventListener("click", sendMyScore);
let showAnswerY = document.getElementById("sendedScore");
let urlScoreY;
let urlsearchParametersScoreY;
let time = sessionStorage.getItem("overallTime");
//hat nich mit p tag funktioniert... deshalb ist die Zeit in einem Textarea
let timeScore = document.getElementById("time");
timeScore.value = time;
function herokuURLScoreY() {
    urlScoreY = "https://dlmazk.herokuapp.com";
    // urlScoreY = "http://localhost:8100";
}
function getFormDataScoreY() {
    let formData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    urlsearchParametersScoreY = new URLSearchParams(formData);
}
async function sendMyScore() {
    herokuURLScoreY();
    getFormDataScoreY();
    console.log("Score gespeichert");
    urlScoreY += "/sendScore" + "?" + urlsearchParametersScoreY.toString();
    let response = await fetch(urlScoreY);
    let displayResponse = await response.text();
    showAnswerY.innerText = displayResponse;
    console.log(showAnswerY);
    window.open("Highscores.html", "_self");
}
//# sourceMappingURL=scriptYourScore.js.map