"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    let previousElement = document.getElementById("auswahl");
    function openNextSite() {
        if (window.location.href.includes("index.html")) {
            window.open("Sorten.html", "_self");
        }
        if (window.location.href.includes("Sorten.html")) {
            window.open("Topping.html", "_self");
        }
        if (window.location.href.includes("Topping.html")) {
            window.open("final.html", "_self");
        }
    }
    // function waehlen(): EisWahl[] {
    //     let art: EisWahl[] = myObj.wahlGröße;
    //     if (window.location.href.includes("Sorten.html"))
    //         art = myObj.wahlSorte;
    //     if (window.location.href.includes("Topping.html"))
    //         art = myObj.wahlTop;
    //     return art;
    // }
    // async function einlesen(_url: RequestInfo): Promise<void> {
    //     let ant: Response = await fetch(_url);
    //     let daten: Eis = await ant.json();
    //     console.log("Antwort", daten);
    //     auswaehlen(daten);
    // }
    // einlesen("http://127.0.0.1:5500/2_5/data.json");
    function waehlen(_eis) {
        let art = _eis.wahlGröße;
        if (window.location.href.includes("Sorten.html"))
            art = _eis.wahlSorte;
        if (window.location.href.includes("Topping.html"))
            art = _eis.wahlTop;
        return art;
    }
    async function einlesen(_url) {
        let ant = await fetch(_url);
        let daten = await ant.json();
        //console.log("Antwort", daten);
        let wahl = waehlen(daten);
        auswaehlen(wahl);
    }
    einlesen("data.json");
    function speichern(_dateiName) {
        if (window.location.href.includes("index.html")) {
            sessionStorage.setItem("0", _dateiName); // 0 im Prinzip die ID der Auswahl
        }
        if (window.location.href.includes("Sorten.html")) {
            sessionStorage.setItem("1", _dateiName);
        }
        if (window.location.href.includes("Topping.html")) {
            sessionStorage.setItem("2", _dateiName);
        }
    }
    //aktuelle Auswahl
    function aktuell() {
        //wenn bei "Sorten"
        if (window.location.href.includes("Sorten.html")) {
            let aktuelldiv = document.getElementById("aktuell");
            let img = document.createElement("img");
            img.setAttribute("src", sessionStorage.getItem("0"));
            aktuelldiv.appendChild(img);
        }
        //wenn bei "Topping"
        if (window.location.href.includes("Topping.html")) {
            let aktuelldiv = document.getElementById("aktuell");
            for (let i = 0; i < 2; i++) {
                let img = document.createElement("img");
                img.setAttribute("src", sessionStorage.getItem(i.toString()));
                aktuelldiv.appendChild(img);
            }
        }
    }
    aktuell();
    //Waffel auswaehlen
    function auswaehlen(_gewaehltes) {
        //const gewaehltes: EisWahl[] = waehlen();
        for (let i = 0; i < _gewaehltes.length; i++) {
            let img = document.createElement("img");
            img.setAttribute("src", _gewaehltes[i].dateiName);
            img.addEventListener("click", function () { speichern(_gewaehltes[i].dateiName); });
            img.addEventListener("click", openNextSite);
            img.id = _gewaehltes[i].imageID; //ID des Bildes festlegen
            previousElement.appendChild(img);
        }
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map