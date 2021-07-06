"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Memory;
(function (Memory) {
    let pick = document.getElementById("choose");
    let serverAnswer = document.getElementById("choose");
    let url;
    function getFormData() {
        let formData = new FormData(document.forms[0]);
    }
    function herokuURL() {
        url = "https://dlmazk.herokuapp.com";
    }
    async function showing() {
        herokuURL();
        serverAnswer.innerHTML = "";
        console.log("So far so good!");
        url += "/showFeedback" + "?";
        let response = await fetch(url);
        let showresponse = await response.json();
        for (let i in showresponse) {
            let query = showresponse[i];
            // let img: HTMLElement = document.createElement("img");
            // img.setAttribute("src", _gewaehltes[i].picURL);
            // pick.appendChild(img);
        }
    }
    showing();
})(Memory || (Memory = {}));
//# sourceMappingURL=scriptGame.js.map