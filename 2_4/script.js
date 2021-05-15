"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    /*
    //New Interface:
        export interface Eis {
    
            option: string;
            imageID: string;
            dateiName: string;
    
        }
    */
    let myObj = JSON.parse(Aufgabe2_4.myJSON);
    let previousElement = document.body;
    //Sorten wählen Anweisung
    let h3 = document.createElement("h3");
    h3.style.margin = "10px";
    document.body.appendChild(h3);
    function openNextSite() {
        if (window.location.href.includes("index.html")) {
            window.open("Sorten.html", "_self");
        }
        if (window.location.href.includes("Sorten.html")) {
            window.open("Topping.html");
        }
    }
    function waehlen() {
        let art = wahlGröße;
        if (window.location.href.includes("Sorten.html"))
            art = wahlSorte;
        if (window.location.href.includes("Topping.html"))
            art = wahlTop;
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
            sessionStorage.setItem("click", "wasser");
            img.id = gewaehltes[i].imageID; //ID des Bildes festlegen
            previousElement.appendChild(img);
        }
    }
    auswaehlen();
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map