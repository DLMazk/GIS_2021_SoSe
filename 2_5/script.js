"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    let previousElement = document.getElementById("auswahl");
    //Sorten wählen Anweisung
    let h3 = document.createElement("h3");
    h3.style.margin = "10px";
    document.body.appendChild(h3);
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
    //        function waehlen(): EisWahl[] {
    //         let art: EisWahl[] = myObj.wahlGröße;
    //         if (window.location.href.includes("Sorten.html"))
    //         art = myObj.wahlSorte;
    //         if (window.location.href.includes("Topping.html")) 
    //         art = myObj.wahlTop;
    //         return art;
    // }
    async function einlesen(_url) {
        let ant = await fetch(_url); //wartet darauf, dass die Seite geladen wird
        console.log("Antwort", ant);
    }
    function speichern(_dateiName) {
        if (window.location.href.includes("index.html")) {
            sessionStorage.setItem("0", _dateiName);
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
            let posLeft = "";
            let posTop = "";
            posLeft = (0 * 200) + "px";
            posTop = 100 + "px";
            let img = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.setAttribute("src", sessionStorage.getItem("0"));
            aktuelldiv.appendChild(img);
        }
        //wenn bei "Topping"
        if (window.location.href.includes("Topping.html")) {
            let aktuelldiv = document.getElementById("aktuell");
            for (let i = 0; i < 2; i++) {
                let posLeft = "";
                let posTop = "";
                posLeft = (i * 200) + "px";
                posTop = 100 + "px";
                let img = document.createElement("img");
                img.style.position = "static";
                img.style.left = posLeft;
                img.style.top = posTop;
                img.setAttribute("src", sessionStorage.getItem(i.toString()));
                aktuelldiv.appendChild(img);
            }
        }
    }
    aktuell();
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
            img.setAttribute("src", gewaehltes[i].dateiName);
            img.addEventListener("click", function () { speichern(gewaehltes[i].dateiName); });
            img.addEventListener("click", openNextSite);
            img.id = gewaehltes[i].imageID; //ID des Bildes festlegen
            previousElement.appendChild(img);
        }
    }
    auswaehlen();
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map