"use strict";
let openFridge = document.getElementById("openFridge");
openFridge.addEventListener("click", testFunc);
openFridge.addEventListener("click", showItems);
function testFunc() {
    console.log("Bitte eine Konsolenausgabe wenigstens!");
}
let itemPos = document.getElementById("allItems");
let url;
//let urlsearchParameters: URLSearchParams;
function serverURL() {
    url = "https://dlmazk.herokuapp.com";
    //url = "http://localhost:8100";
}
async function showItems() {
    let daten = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    let query = new URLSearchParams(daten);
    serverURL();
    console.log("So far so good boi.");
    url = url + "/showItems" + "?" + query.toString();
    let response = await fetch(url);
    let showResponse = await response.json();
    let itemsArr = [];
    // tslint:disable-next-line: typedef
    for (let i = 0; i < array.length; i++) {
        console.log(i);
        let listing = showResponse[i];
        itemsArr.push(listing);
    }
    console.log(itemsArr);
    //let theItem: HTMLElement = <HTMLElement>document.createElement("p");
    //theItem.innerHTML = "Tomate";
}
//# sourceMappingURL=script.js.map