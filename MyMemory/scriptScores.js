"use strict";
let top10 = document.getElementById("topScores");
let sendButton = document.getElementById("sendScore");
sendButton.addEventListener("click", sendMyScore);
let showAnswer = document.getElementById("sendedScore");
let urlScore;
let urlsearchParametersScore;
showTop10();
function herokuURLScore() {
    //urlScore = "https://dlmazk.herokuapp.com";
    urlScore = "http://localhost:8100";
}
function getFormDataScore() {
    let formData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    urlsearchParametersScore = new URLSearchParams(formData);
}
async function sendMyScore() {
    // sessionStorage.getItem("0");
    herokuURLScore();
    getFormDataScore();
    console.log("Score gespeichert");
    urlScore += "/sendScore" + "?" + urlsearchParametersScore.toString();
    let response = await fetch(urlScore);
    let displayResponse = await response.text();
    showAnswer.innerText = displayResponse;
    console.log(showAnswer);
}
async function showTop10() {
    herokuURLScore();
    top10.innerHTML = "";
    console.log("So far so good!");
    urlScore += "/showTopScores";
    let response = await fetch(urlScore);
    let showresponse = await response.json();
    for (let i = 0; i < showresponse.length; i++) {
        let query = showresponse[i];
        let place = i + 1;
        let score = document.createElement("p");
        score.appendChild(document.createTextNode(place + ". " + query.name + " " + query.time));
        top10.appendChild(score);
    }
}
//# sourceMappingURL=scriptScores.js.map