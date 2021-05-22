"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    let fin = document.getElementById("fertig");
    function abschließen() {
        //    const gewaehltes: EisWahl[] = waehlen();
        for (let i = 0; i < sessionStorage.length; i++) {
            let img = document.createElement("img");
            img.setAttribute("src", sessionStorage.getItem(i.toString()));
            fin.appendChild(img);
        }
    }
    abschließen();
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=fertig.js.map