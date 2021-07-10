namespace Memory {
    
let startGame: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttStart");
startGame.addEventListener("click", startingGame);

let openAdmin: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttAdmin");
openAdmin.addEventListener("click", openingAdmin);

let openScore: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttScore");
openScore.addEventListener("click", openingScore);




function startingGame(): void {
    window.open("Spielseite.html", "_self");
}

function openingAdmin(): void {
    window.open("AdminSeite.html", "_self");
}

function openingScore(): void {
    window.open("Highscores.html", "_self");
}

}