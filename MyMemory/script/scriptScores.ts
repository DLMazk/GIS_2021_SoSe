interface Scores {

    name: string;
    time: number;
}


let topPlayer: HTMLDivElement = <HTMLDivElement>document.getElementById("topScores");

let goBackH: HTMLButtonElement = <HTMLButtonElement>document.getElementById("toStart");
goBackH.addEventListener("click", goingBackToStart);

let urlScore: string;

showTopPlayer();

function herokuURLScore(): void {

    urlScore = "https://dlmazk.herokuapp.com";
    // urlScore = "http://localhost:8100";

}

function goingBackToStart(): void {

    window.open("index.html", "_self");

}

async function showTopPlayer(): Promise<void> {

    herokuURLScore();
    topPlayer.innerHTML = "";
    console.log("So far so good!");
    urlScore += "/showTopScores";
    let response: Response = await fetch(urlScore);
    let showresponse: Scores[] = await response.json();

    for (let i: number = 0; i < showresponse.length; i++) {

        let query: Scores = showresponse[i];
        

        let score: HTMLElement = <HTMLElement>document.createElement("p");
        score.appendChild(document.createTextNode(query.name + ": " + query.time));
        topPlayer.appendChild(score);

    }

    let newGamebutt: HTMLButtonElement = <HTMLButtonElement>document.getElementById("newGame");
    newGamebutt.addEventListener("click", newGame);
    newGamebutt.innerText = "New Game";

    function newGame(): void {
        window.location.href = "Spielseite.html";
    }

}