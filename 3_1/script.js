"use strict";
// async function datenSenden(): Promise<void> {
//     let daten: FormData = new FormData(document.forms[0]);
//     console.log(": " + daten.get("name"));
//     for (let entry of daten) {
//         console.log(entry);
//         console.log("name:" + entry[0]);
//         console.log("value:" + entry[1]);
//     }
//     let query: URLSearchParams = new URLSearchParams(<any>daten);
//     let _url: RequestInfo = "https://dlmazk.herokuapp.com/";
//     _url = _url + "?" + query.toString();
//     console.log(_url);
//     let ant: Response = await fetch(_url);
//     let ausgabe: string = await ant.text();
//     console.log(ausgabe);
//     let rueck: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("ausgabe");
//     rueck.innerText = ausgabe;
// }
// let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button");
// button.addEventListener("click", datenSenden);
//# sourceMappingURL=script.js.map