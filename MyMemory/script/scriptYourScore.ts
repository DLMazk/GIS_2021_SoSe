interface Scores {

    name: string;
    time: number;
}

let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendScore");
sendButton.addEventListener("click", sendMyScore);

let showAnswerY: HTMLDivElement = <HTMLDivElement>document.getElementById("sendedScore");

let urlScoreY: string;
let urlsearchParametersScoreY: URLSearchParams;

let time: string = sessionStorage.getItem("overallTime");
//hat nich mit p tag funktioniert... deshalb ist die Zeit in einem Textarea
let timeScore: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("time");
timeScore.value = time;


function herokuURLScoreY(): void {

    urlScoreY = "https://dlmazk.herokuapp.com";
    // urlScoreY = "http://localhost:8100";

}

function getFormDataScoreY(): void {

    let formData: FormData = new FormData(document.forms[0]);
    // tslint:disable-next-line: no-any
    urlsearchParametersScoreY = new URLSearchParams(<any>formData);
}

async function sendMyScore(): Promise<void> {

    herokuURLScoreY();
    getFormDataScoreY();
    console.log("Score gespeichert");
    urlScoreY += "/sendScore" + "?" + urlsearchParametersScoreY.toString();
    let response: Response = await fetch(urlScoreY);
    let displayResponse: string = await response.text();
    showAnswerY.innerText = displayResponse;
    console.log(showAnswerY);

    window.open("Highscores.html", "_self");

}


