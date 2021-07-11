interface Cards {

    picURL: string;

}




let showButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
showButton.addEventListener("click", showingCards);
// showButton.addEventListener("click", makeTime);

const start: number = new Date().getTime();
let count: number = 0;





let pick: HTMLDivElement = <HTMLDivElement>document.getElementById("picturesGame");
let url: string;
let urlsearchParameters: URLSearchParams;

function getFormData(): void {

    let formData: FormData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    urlsearchParameters = new URLSearchParams(<any>formData);
}

function herokuURL(): void {

    url = "https://dlmazk.herokuapp.com";
    //url = "http://localhost:8100";

}



async function showingCards(): Promise<void> {

    let daten: FormData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>daten);
    herokuURL();
    pick.innerHTML = "";
    console.log("So far so good!");
    url += "/showCards" + "?" + query.toString();
    let response: Response = await fetch(url);
    let showresponse: Cards[] = await response.json();
    let cardsArray: Cards[] = [];

    for (let i: number = 0; i < 8; i++) {

        console.log(i);
        //Randomize the order
        let randomize: number = Math.floor((Math.random() * ((showresponse.length - 1) - 0 + 1)) + 0);
        let query1: Cards = showresponse[randomize];
        let query2: Cards = query1;

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

    let nowTime: Date = new Date;
    let timeStart: number = nowTime.getTime();
    sessionStorage.setItem("timeStart", timeStart.toString());
    console.log(timeStart);

}

function showBack(): void {

    for (let i: number = 0; i < 16; i++) {
        let backOfCard: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.getElementById(i + "");
        backOfCard.style.opacity = "1";
    }

}

function sortingCards(_cardsArray: Cards[]): void {

    _cardsArray.sort(() => .5 - Math.random()); //Kommilitone hat mir diesen Link empholen, wodurch ich Lösungsmöglichkeiten probiert und diese übernommen habe(https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

    for (let i: number = 0; i < 16; i++) {

        let cards: HTMLImageElement = showPicture(_cardsArray[i]);
        let getTable: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.getElementById(i + "");
        getTable.appendChild(cards);

    }
}


function showPicture(_picture: Cards): HTMLImageElement {

    let pic: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    pic.setAttribute("src", _picture.picURL);
    pic.addEventListener("click", turnAround);

    // pic.addEventListener("click", function (): void {this.style.opacity = "1"; });
    pic.style.opacity = "0";

    return pic;

}

let turnedCardSave: HTMLImageElement[] = [];
let turnedCardSave1: string = "leer";   //turnedCardSave1/2 "leeren"
let turnedCardSave2: string = "leer";
let counter: number = 0;    //counter erstellen

//Bei dieser Funktion habe ich ein paar Dinge mit einem Freund(Vinzenz MIB 3.Semester) gemacht, da ich selbst Schwierigkeiten hatte die Karten mit der gewollten Funktion zu versehen
//Deshalb der teilweise komplizierte Code
function turnAround(_event: Event): void {  //Card mit click umdrehen

    console.log("Klappt");
    let firstPick: HTMLImageElement = <HTMLImageElement>_event.target;
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


    if (turnedCardSave1 != "leer" && turnedCardSave2 != "leer") {   //überprüfen ob es die 2. Card ist die aufgedeckt wird
        console.log("Sind 2");
        counter = 0;

        if (turnedCardSave1 == turnedCardSave2) {   //überprüfen ob es die gleichen Cards sind
            console.log("Vergleich");
            //Array leeren
            turnedCardSave1 = "leer";
            turnedCardSave2 = "leer";
            count += 1;

            let picClass: HTMLCollectionOf<HTMLImageElement> = <HTMLCollectionOf<HTMLImageElement>>document.getElementsByClassName("visible");

            for (let i: number = 0; i <= picClass.length; i++) {

                picClass[0].classList.add("done");  //Position 0, da nachdem eine Klasse gelöscht wurde die picClass.length auch kürzer ist
                picClass[0].classList.remove("visible");    //

                console.log("finished");

            }
            //Den Timer habe ich größtenteils mit einem Freund und dieser Website entwickelt: https://nono.ma/measure-time-elapsed-typescript
            if (count == 8) {

                let nowTime: Date = new Date;
                let timeEnd: number = nowTime.getTime();
                let overallTime: number = (timeEnd - parseFloat(sessionStorage.getItem("timeStart"))) / 1000;
                console.log(timeEnd);
                console.log(overallTime);
                sessionStorage.setItem("overallTime", overallTime.toString());

                gotToYourScore(); //open YourScore.html

            }

        } else {

            setTimeout(turnBack, 800);
            // turnBack(_event);

        }

    } else if (counter == 2) {

        turnBack(_event);

    }
}


function turnBack(_event: Event): void {    //Card wieder umdrehen wenn Sie nich übereingestimmt haben

    let picClass: HTMLCollectionOf<HTMLImageElement> = <HTMLCollectionOf<HTMLImageElement>>document.getElementsByClassName("visible");

    for (let i: number = 0; i <= picClass.length; i++) {

        picClass[0].classList.remove("visible");    //Position 0, da nachdem eine Klasse gelöscht wurde die picClass.length auch kürzer ist
        console.log("delete");
    }

    turnedCardSave1 = "leer";
    turnedCardSave2 = "leer";

}

function gotToYourScore(): void {

    window.location.href = "YourScore.html";

}