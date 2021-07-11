"use strict";
let showPicturesButton = document.getElementById("showPictures");
showPicturesButton.addEventListener("click", showingAdminCards);
let pics = document.getElementById("pictures");
let urlAdmin;
//let urlsearchParameters: URLSearchParams;
function herokuURLAdmin() {
    //urlAdmin = "https://dlmazk.herokuapp.com";
    urlAdmin = "http://localhost:8100";
}
async function showingAdminCards() {
    herokuURLAdmin();
    pics.innerHTML = "";
    console.log("So far so good!");
    urlAdmin += "/showCards";
    let response = await fetch(urlAdmin);
    let showresponse = await response.json();
    //console.log("fetch erfolgreich!?");
    for (let i = 0; i < showresponse.length; i++) {
        let query = showresponse[i];
        // let div1: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        // pick.appendChild(div1);
        let picture = document.createElement("img");
        picture.setAttribute("src", query.picURL);
        picture.addEventListener("click", function () { turnCard(query.picURL); });
        //picture.addEventListener("click", compare);
        pics.appendChild(picture);
    }
}
//# sourceMappingURL=scriptAdmin.js.map