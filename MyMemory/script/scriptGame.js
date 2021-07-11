"use strict";
let showButton = document.getElementById("start");
showButton.addEventListener("click", showingCards);
// showButton.addEventListener("click", makeTime);
const start = new Date().getTime();
let count = 0;
let pick = document.getElementById("picturesGame");
let url;
let urlsearchParameters;
function getFormData() {
    let formData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    urlsearchParameters = new URLSearchParams(formData);
}
function herokuURL() {
    url = "https://dlmazk.herokuapp.com";
    //url = "http://localhost:8100";
}
async function showingCards() {
    let daten = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    let query = new URLSearchParams(daten);
    herokuURL();
    pick.innerHTML = "";
    console.log("So far so good!");
    url += "/showCards" + "?" + query.toString();
    let response = await fetch(url);
    let showresponse = await response.json();
    let cardsArray = [];
    for (let i = 0; i < 8; i++) {
        console.log(i);
        //Randomize the order
        let randomize = Math.floor((Math.random() * ((showresponse.length - 1) - 0 + 1)) + 0);
        let query1 = showresponse[randomize];
        let query2 = query1;
        // let picture: HTMLImageElement = <HTMLImageElement>document.createElement("img");
        // picture.setAttribute("src", query1.picURL);
        cardsArray.push(query1);
        cardsArray.push(query2);
        showresponse.splice(randomize, 1);
        // pick.appendChild(picture);
    }
    console.log(cardsArray);
    showBack();
    sortingCards(cardsArray);
    let nowTime = new Date;
    let timeStart = nowTime.getTime();
    sessionStorage.setItem("timeStart", timeStart.toString());
    console.log(timeStart);
}
function showBack() {
    for (let i = 0; i < 16; i++) {
        let backOfCard = document.getElementById(i + "");
        backOfCard.style.opacity = "1";
    }
}
function sortingCards(_cardsArray) {
    _cardsArray.sort(() => .5 - Math.random()); //Kommilitone hat mir diesen Link empholen, wodurch ich Lösungsmöglichkeiten probiert und diese übernommen habe(https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
    for (let i = 0; i < 16; i++) {
        let cards = showPicture(_cardsArray[i]);
        let getTable = document.getElementById(i + "");
        getTable.appendChild(cards);
    }
}
function showPicture(_picture) {
    let pic = document.createElement("img");
    pic.setAttribute("src", _picture.picURL);
    pic.addEventListener("click", turnAround);
    // pic.addEventListener("click", function (): void {this.style.opacity = "1"; });
    pic.style.opacity = "0";
    return pic;
}
let turnedCardSave = [];
let turnedCardSave1 = "leer"; //turnedCardSave1/2 "leeren"
let turnedCardSave2 = "leer";
let counter = 0; //counter erstellen
//Bei dieser Funktion habe ich ein paar Dinge mit einem Freund(Vinzenz MIB 3.Semester) gemacht, da ich selbst Schwierigkeiten hatte die Karten mit der gewollten Funktion zu versehen
//Deshalb der teilweise komplizierte Code
function turnAround(_event) {
    console.log("Klappt");
    let firstPick = _event.target;
    firstPick.classList.add("visible");
    turnedCardSave.push(firstPick);
    if (counter == 0) {
        turnedCardSave1 = firstPick.src;
    }
    if (counter == 1) {
        turnedCardSave2 = firstPick.src;
    }
    console.log(counter);
    counter++;
    console.log(counter);
    console.log(turnedCardSave1);
    console.log(turnedCardSave2);
    if (turnedCardSave1 != "leer" && turnedCardSave2 != "leer") { //überprüfen ob es die 2. Card ist die aufgedeckt wird
        console.log("Sind 2");
        counter = 0;
        if (turnedCardSave1 == turnedCardSave2) { //überprüfen ob es die gleichen Cards sind
            console.log("Vergleich");
            //Array leeren
            turnedCardSave1 = "leer";
            turnedCardSave2 = "leer";
            count += 1;
            let picClass = document.getElementsByClassName("visible");
            for (let i = 0; i <= picClass.length; i++) {
                picClass[0].classList.add("done"); //Position 0, da nachdem eine Klasse gelöscht wurde die picClass.length auch kürzer ist
                picClass[0].classList.remove("visible"); //
                console.log("finished");
            }
            //Den Timer habe ich größtenteils mit einem Freund und dieser Website entwickelt: https://nono.ma/measure-time-elapsed-typescript
            if (count == 8) {
                let nowTime = new Date;
                let timeEnd = nowTime.getTime();
                let overallTime = (timeEnd - parseFloat(sessionStorage.getItem("timeStart"))) / 1000;
                console.log(timeEnd);
                console.log(overallTime);
                sessionStorage.setItem("overallTime", overallTime.toString());
                gotToYourScore(); //open YourScore.html
            }
        }
        else {
            setTimeout(turnBack, 800);
            // turnBack(_event);
        }
    }
    else if (counter == 2) {
        turnBack(_event);
    }
}
function turnBack(_event) {
    let picClass = document.getElementsByClassName("visible");
    for (let i = 0; i <= picClass.length; i++) {
        picClass[0].classList.remove("visible"); //Position 0, da nachdem eine Klasse gelöscht wurde die picClass.length auch kürzer ist
        console.log("delete");
    }
    turnedCardSave1 = "leer";
    turnedCardSave2 = "leer";
}
function gotToYourScore() {
    window.location.href = "YourScore.html";
}
//# sourceMappingURL=scriptGame.js.map