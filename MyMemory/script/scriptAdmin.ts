interface Cards {
    picURL: string;
}

let showPicturesButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("showPictures");
showPicturesButton.addEventListener("click", showingAdminCards);

let pics: HTMLDivElement = <HTMLDivElement>document.getElementById("pictures");
let urlAdmin: string;
//let urlsearchParameters: URLSearchParams;

let goBack: HTMLButtonElement = <HTMLButtonElement>document.getElementById("toStart");
goBack.addEventListener("click", goingBackToStartAdmin);

function herokuURLAdmin(): void {

    urlAdmin = "https://dlmazk.herokuapp.com";
    // urlAdmin = "http://localhost:8100";

}

function goingBackToStartAdmin(): void {

    window.open("index.html", "_self");

}


async function showingAdminCards(): Promise<void> {

    herokuURLAdmin();
    pics.innerHTML = "";
    console.log("So far so good!");
    urlAdmin += "/showCards";
    let response: Response = await fetch(urlAdmin);
    let showresponse: Cards[] = await response.json();
    //console.log("fetch erfolgreich!?");

    for (let i: number = 0; i < showresponse.length; i++) {

        let query: Cards = showresponse[i];

        // let div1: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        // pick.appendChild(div1);

        let picture: HTMLElement = <HTMLElement>document.createElement("img");
        picture.setAttribute("src", query.picURL);
        pics.appendChild(picture);
        
    }
}