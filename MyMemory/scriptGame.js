"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let showButton = document.getElementById("start");
showButton.addEventListener("click", showingCards);
let pick = document.getElementById("choose");
let url;
let urlsearchParameters;
function getFormData() {
    let formData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    urlsearchParameters = new URLSearchParams(formData);
}
function herokuURL() {
    url = "https://dlmazk.herokuapp.com";
}
async function showingCards() {
    herokuURL();
    pick.innerHTML = "";
    console.log("So far so good!");
    url += "/showCards" + "?";
    let response = await fetch(url);
    let showresponse = await response.json();
    for (let i in showresponse) {
        let query = showresponse[i];
        let div1 = document.createElement("div");
        pick.appendChild(div1);
        let picture = document.createElement("img");
        picture.setAttribute("src", query.picURL);
        div1.appendChild(picture);
        // let img: HTMLElement = document.createElement("img");
        // img.setAttribute("src", _gewaehltes[i].picURL);
        // pick.appendChild(img);
    }
}
//# sourceMappingURL=scriptGame.js.map