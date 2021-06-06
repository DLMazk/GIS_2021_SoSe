"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let rueckgabe = document.getElementById("serverausgabe"); //an meine Seite anheften 
    async function datenSendenHTML() {
        let daten = new FormData(document.forms[0]); //Objekt FormData wird generiert
        let url = "https://dlmazk.herokuapp.com"; // Verbindung zu Heroku
        url += "/html"; //HTML Button
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString(); //in String umwandeln 
        let antwort = await fetch(url); //warten auf url
        let ausgabe = await antwort.text(); //warten auf antwort 
        rueckgabe.innerHTML = ausgabe;
    }
    let buttonHTML = document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", datenSendenHTML);
    async function datenSendenJSON() {
        let daten = new FormData(document.forms[0]);
        let url = "https://dlmazk.herokuapp.com"; // Verbindung zu Heroku
        url += "/json"; //JSON Button 
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let jsonObjekt = await antwort.json(); //JSON-Objekt generieren 
        console.log(jsonObjekt); //JSON Konsolenausgabe 
    }
    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", datenSendenJSON);
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map