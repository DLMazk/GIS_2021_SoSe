"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    let fin = document.getElementById("fertig");
    function abschließen() {
        //    const gewaehltes: EisWahl[] = waehlen();
        for (let i = 0; i < sessionStorage.length; i++) {
            let posLeft = "";
            let posTop = "";
            posLeft = (i * 200) + "px";
            posTop = 100 + "px";
            let img = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.setAttribute("src", sessionStorage.getItem(i.toString()));
            fin.appendChild(img);
        }
    }
    abschließen();
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=fertig.js.map