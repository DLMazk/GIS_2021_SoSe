"use strict";
async function datenSenden() {
    let daten = new FormData(document.forms[0]);
    console.log(": " + daten.get("name"));
    for (let entry of daten) {
        console.log(entry);
        console.log("name:" + entry[0]);
        console.log("value:" + entry[1]);
    }
    let query = new URLSearchParams(daten);
    let _url = "https://dlmazk.herokuapp.com/";
    _url = _url + "?" + query.toString();
    console.log(_url);
    let ant = await fetch(_url);
    let ausgabe = await ant.text();
    console.log(ausgabe);
    let rueck = document.getElementById("ausgabe");
    rueck.innerText = ausgabe;
}
let button = document.getElementById("button");
button.addEventListener("click", datenSenden);
//# sourceMappingURL=script.js.map