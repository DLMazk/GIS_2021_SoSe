"use strict";
let showButton = document.getElementById("start");
showButton.addEventListener("click", showingCards);
let timer = document.getElementById("timer");
let pick = document.getElementById("choose");
let url;
let urlsearchParameters;
function getFormData() {
    let formData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    urlsearchParameters = new URLSearchParams(formData);
}
function herokuURL() {
    //url = "https://dlmazk.herokuapp.com";
    url = "http://localhost:8100";
}
function takingTime() {
}
async function showingCards() {
    herokuURL();
    pick.innerHTML = "";
    console.log("So far so good!");
    url += "/showCards";
    let response = await fetch(url);
    let showresponse = await response.json();
    //console.log("fetch erfolgreich!?");
    for (let i = 0; i < showresponse.length; i++) {
        let query = showresponse[i];
        // let div1: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        // pick.appendChild(div1);
        let picture = document.createElement("img");
        picture.setAttribute("src", query.picURL);
        picture.addEventListener("click", function () { turnCard(query.picURL); });
        picture.addEventListener("click", compare);
        pick.appendChild(picture);
    }
    function turnCard(_picURL) {
        sessionStorage.setItem("0", _picURL);
    }
    function compare() {
    }
    function saveTime(_name, _time) {
        sessionStorage.setItem("0", _name);
    }
}
//# sourceMappingURL=scriptGame.js.map