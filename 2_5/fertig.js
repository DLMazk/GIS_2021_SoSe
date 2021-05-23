"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    let fin = document.getElementById("fertig");
    let neuButton = document.getElementById("restart");
    let website = document.getElementById("website");
    function abschließen(_source) {
        //    const gewaehltes: EisWahl[] = waehlen();
        let img = document.createElement("img");
        img.setAttribute("src", _source);
        fin.appendChild(img);
    }
    abschließen(sessionStorage.getItem("2"));
    abschließen(sessionStorage.getItem("1"));
    abschließen(sessionStorage.getItem("0"));
    let restart = document.createElement("button");
    restart.id = "neustart";
    restart.innerHTML = "Neues Eis erstellen";
    restart.addEventListener("click", neuStarten);
    neuButton.appendChild(restart);
    function neuStarten() {
        window.open("index.html", "_self");
    }
    // if (window.location.href.includes("final.html")) {
    //     cacheAnzeigen();
    // }
    //Aufgabe c)
    async function cacheAnzeigen() {
        let query = new URLSearchParams(sessionStorage);
        let url = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let serverAntwort = await fetch(url);
        let rückmeldung = await serverAntwort.json();
        if (rückmeldung.error != undefined) {
            console.log(rückmeldung.error);
            let backDiv = document.getElementById("messageError");
            backDiv.appendChild(document.createTextNode("" + rückmeldung.error));
        }
        else if (rückmeldung.message != undefined) {
            console.log(rückmeldung.message);
            let backDiv = document.getElementById("message");
            backDiv.appendChild(document.createTextNode("" + rückmeldung.message));
        }
    }
    cacheAnzeigen();
    function webÖffnen() {
        window.open("https://dlmazk.github.io/GIS_2021_SoSe/1_4/index.html");
    }
    let web = document.createElement("a");
    web.innerText = "Hier geht es zu meiner Website beim Stand von Aufgabe 1_4";
    web.addEventListener("click", webÖffnen);
    website.appendChild(web);
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=fertig.js.map