interface Scores {

    name: string;
    time: string;
}


let top10: HTMLDivElement = <HTMLDivElement>document.getElementById("topScores");

let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendScore");
sendButton.addEventListener("click", sendMyScore);

let showAnswer: HTMLDivElement = <HTMLDivElement>document.getElementById("sendedScore");

let urlScore: string;
let urlsearchParametersScore: URLSearchParams;

showTop10();

function herokuURLScore(): void {

    //urlScore = "https://dlmazk.herokuapp.com";
    urlScore = "http://localhost:8100";

}

function getFormDataScore(): void {

    let formData: FormData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    urlsearchParametersScore = new URLSearchParams(<any>formData);
}

async function sendMyScore(): Promise<void> {

    // sessionStorage.getItem("0");
    herokuURLScore();
    getFormDataScore();
    console.log("Score gespeichert");
    urlScore += "/sendScore" + "?" + urlsearchParametersScore.toString();
    let response: Response = await fetch(urlScore);
    let displayResponse: string = await response.text();
    showAnswer.innerText = displayResponse;
    console.log(showAnswer);


}


async function showTop10(): Promise<void> {

    herokuURLScore();
    top10.innerHTML = "";
    console.log("So far so good!");
    urlScore += "/showTopScores";
    let response: Response = await fetch(urlScore);
    let showresponse: Scores[] = await response.json();

    for (let i: number = 0; i < showresponse.length; i++) {

        let query: Scores = showresponse[i];
        let place: number = i + 1;

        let score: HTMLElement = <HTMLElement>document.createElement("p");
        score.appendChild(document.createTextNode(place + ". " + query.name + " " + query.time));
        top10.appendChild(score);

    }



}