"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let previousElement = document.body;
    //Sorten wählen Anweisung
    let h3 = document.createElement("h3");
    h3.style.margin = "10px";
    document.body.appendChild(h3);
    function openNextSite() {
        if (window.location.href.includes("index.html")) {
            window.open("Sorten.html", "_self");
        }
    }
    function waehlen() {
        let art = Aufgabe2_3.wahlGröße;
        if (window.location.href.includes("Sorten.html")) {
            art = Aufgabe2_3.wahlSorte;
        }
        if (window.location.href.includes("Topping.html")) {
            art = Aufgabe2_3.wahlTop;
        }
        return art;
    }
    //Waffel auswaehlen
    function auswaehlen() {
        const gewaehltes = waehlen();
        for (let i = 0; i < gewaehltes.length; i++) {
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
            img.setAttribute("src", gewaehltes[i].dateiName);
            img.addEventListener("click", openNextSite);
            img.id = gewaehltes[i].imageID; //ID des Bildes festlegen
            previousElement.appendChild(img);
        }
    }
    auswaehlen();
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map