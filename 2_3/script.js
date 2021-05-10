"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let previousElement = document.body;
    //Sorten Überschrieft
    let h1 = document.createElement("h1");
    h1.innerText = "Sorten";
    document.body.appendChild(h1);
    //Sorten wählen Anweisung
    let h3 = document.createElement("h3");
    h3.style.margin = "10px";
    document.body.appendChild(h3);
    //aktuelle Seite überprüfen und WaffelAuswahl ausführen
    let aSeite = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (aSeite == "index.html") {
        WaffelAuswahl();
    }
    //Waffel Auswahl
    function WaffelAuswahl() {
        function opening() {
            window.open("Sorten.html", "_self");
        }
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
            img.addEventListener("click", opening);
            img.id = Aufgabe2_3.wahlGröße[i].image;
            previousElement.appendChild(img);
        }
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map