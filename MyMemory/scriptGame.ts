interface Cards {

    picURL: string;
}




let showButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
showButton.addEventListener("click", showingCards);

let timer: HTMLElement = <HTMLElement>document.getElementById("timer");


let pick: HTMLDivElement = <HTMLDivElement>document.getElementById("choose");
let url: string;
let urlsearchParameters: URLSearchParams;

function getFormData(): void {

    let formData: FormData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    urlsearchParameters = new URLSearchParams(<any>formData);
}

function herokuURL(): void {

    //url = "https://dlmazk.herokuapp.com";
    url = "http://localhost:8100";

}

function takingTime(): void {



}

async function showingCards(): Promise<void> {

    herokuURL();
    pick.innerHTML = "";
    console.log("So far so good!");
    url += "/showCards";
    let response: Response = await fetch(url);
    let showresponse: Cards[] = await response.json();
    //console.log("fetch erfolgreich!?");

    for (let i: number = 0; i < showresponse.length; i++) {

        let query: Cards = showresponse[i];

        // let div1: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        // pick.appendChild(div1);

        let picture: HTMLElement = <HTMLElement>document.createElement("img");
        picture.setAttribute("src", query.picURL);
        picture.addEventListener("click", function (): void { turnCard(query.picURL); });
        picture.addEventListener("click", compare);
        pick.appendChild(picture);


    }

    function turnCard(_picURL: string): void {
        sessionStorage.setItem("0", _picURL);

    }




    function compare(): void {

    }

    function saveTime(_name: string, _time: string): void {

        sessionStorage.setItem("0", _name);

    }



}



