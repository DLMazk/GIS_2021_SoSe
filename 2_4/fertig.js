"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let fin = document.getElementById("fertig");
    function abschließen(_source) {
        //    const gewaehltes: EisWahl[] = waehlen();
        let img = document.createElement("img");
        img.setAttribute("src", _source);
        fin.appendChild(img);
    }
    abschließen(sessionStorage.getItem("0"));
    abschließen(sessionStorage.getItem("1"));
    abschließen(sessionStorage.getItem("2"));
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=fertig.js.map