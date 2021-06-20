"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    async function abschicken() {
        let daten = new FormData(document.forms[0]);
        let url = "https://dlmazk.herokuapp.com/";
        //let url: RequestInfo = "http://localhost:8100";
        url += "/senden";
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        console.log(ausgabe);
    }
    let buttSenden = document.getElementById("senden");
    buttSenden.addEventListener("click", abschicken);
    async function empfangen() {
        let rueckgabe = document.getElementById("ausgabe");
        let daten = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        url += "/empfangen";
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        console.log(ausgabe);
        rueckgabe.innerHTML = ausgabe;
    }
    let buttEmpfangen = document.getElementById("empfangen");
    buttEmpfangen.addEventListener("click", empfangen);
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=dbclient.js.map