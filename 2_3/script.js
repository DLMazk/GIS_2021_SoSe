"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let previousElement = document.body;
    //Sorten wählen Anweisung
    let h3 = document.createElement("h3");
    h3.style.margin = "10px";
    document.body.appendChild(h3);
    //Button kleine Waffel
    let buttK = document.createElement("button");
    buttK.style.marginTop = "15px";
    buttK.style.marginLeft = "60px";
    buttK.innerText = "Kleine Waffel";
    document.body.appendChild(buttK);
    buttK.addEventListener("click", openingK);
    //Button normale Waffel
    let buttN = document.createElement("button");
    buttN.style.marginTop = "15px";
    buttN.style.marginLeft = "120px";
    buttN.innerText = "Normale Waffel";
    document.body.appendChild(buttN);
    buttN.addEventListener("click", openingN);
    //Button große Waffel
    let buttG = document.createElement("button");
    buttG.style.marginTop = "15px";
    buttG.style.marginLeft = "120px";
    buttG.innerText = "Große Waffel";
    document.body.appendChild(buttG);
    buttG.addEventListener("click", openingG);
    let zeile = document.createElement("br");
    document.body.appendChild(zeile);
    //Nächste Seite öffnen - kleine Waffel
    function openingK() {
        window.open("Sorten.html", "_self");
        console.log("kleine Waffel ausgewählt");
    }
    //Nächste Seite öffnen - normale Waffel
    function openingN() {
        window.open("Sorten.html", "_self");
        console.log("normale Waffel ausgewählt");
    }
    //Nächste Seite öffnen - große Waffel
    function openingG() {
        window.open("Sorten.html", "_self");
        console.log("große Waffel ausgewählt");
    }
    //aktuelle Seite überprüfen und WaffelAuswahl ausführen
    let aSeite = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (aSeite == "index.html") {
        WaffelAuswahl();
    }
    //Waffel Auswahl
    function WaffelAuswahl() {
        for (let i = 0; i < Aufgabe2_3.wahlGröße.length; i++) {
            let posLeft = "";
            let posTop = "";
            posLeft = (i * 200) + "px";
            posTop = 100 + "px";
            let img = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.style.margin = "10px";
            img.style.height = 200 + "px";
            img.style.width = 200 + "px";
            img.setAttribute("src", Aufgabe2_3.wahlGröße[i].dateiName);
            //img.addEventListener("click", opening); //
            img.id = Aufgabe2_3.wahlGröße[i].imageID; //ID des Bildes festlegen
            previousElement.appendChild(img);
        }
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map