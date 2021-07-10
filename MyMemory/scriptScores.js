"use strict";
let top10 = document.getElementById("topScores");
let urlScore;
//let urlsearchParameters: URLSearchParams;
showTop10();
function herokuURLScore() {
    //urlScore = "https://dlmazk.herokuapp.com";
    urlScore = "http://localhost:8100";
}
function showMySocore() {
    sessionStorage.getItem("0");
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