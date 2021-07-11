"use strict";
let topPlayer = document.getElementById("topScores");
let goBackH = document.getElementById("toStart");
goBackH.addEventListener("click", goingBackToStart);
let urlScore;
showTopPlayer();
function herokuURLScore() {
    urlScore = "https://dlmazk.herokuapp.com";
    // urlScore = "http://localhost:8100";
}
function goingBackToStart() {
    window.open("index.html", "_self");
}
async function showTopPlayer() {
    herokuURLScore();
    topPlayer.innerHTML = "";
    console.log("So far so good!");
    urlScore += "/showTopScores";
    let response = await fetch(urlScore);
    let showresponse = await response.json();
    for (let i = 0; i < showresponse.length; i++) {
        let query = showresponse[i];
        let score = document.createElement("p");
        score.appendChild(document.createTextNode(query.name + ": " + query.time));
        topPlayer.appendChild(score);
    }
    let newGamebutt = document.getElementById("newGame");
    newGamebutt.addEventListener("click", newGame);
    newGamebutt.innerText = "New Game";
    function newGame() {
        window.location.href = "Spielseite.html";
    }
}
//# sourceMappingURL=scriptScores.js.map