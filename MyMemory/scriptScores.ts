interface Scores {

    name: string;
    time: string;
}


let top10: HTMLDivElement = <HTMLDivElement>document.getElementById("topScores");

let urlScore: string;
//let urlsearchParameters: URLSearchParams;

showTop10();

function herokuURLScore(): void {

    //urlScore = "https://dlmazk.herokuapp.com";
    urlScore = "http://localhost:8100";

}

function showMySocore(): void {

    
    sessionStorage.getItem("0");


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