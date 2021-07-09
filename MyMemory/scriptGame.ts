


interface Cards {

    picURL: string;
}
// export interface Scores {

//     id: ObjectID;
//     name: string;
//     time: string;
// }

let showButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
showButton.addEventListener("click", showingCards);

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

async function showingCards(): Promise<void> {

    herokuURL();
    pick.innerHTML = "";
    console.log("So far so good!");
    url += "/showCards";
    let response: Response = await fetch(url);
    let showresponse: Cards[] = await response.json();

    for (let i in showresponse) {

        let query: Cards = showresponse[i];

        let div1: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        pick.appendChild(div1);

        let picture: HTMLElement = <HTMLElement>document.createElement("img");
        picture.setAttribute("src", query.picURL);
        div1.appendChild(picture);

        // let img: HTMLElement = document.createElement("img");
        // img.setAttribute("src", _gewaehltes[i].picURL);
        // pick.appendChild(img);
    }

}



