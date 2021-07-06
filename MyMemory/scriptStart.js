"use strict";
var Memory;
(function (Memory) {
    let startGame = document.getElementById("buttStart");
    startGame.addEventListener("click", startingGame);
    let openAdmin = document.getElementById("buttAdmin");
    openAdmin.addEventListener("click", openingAdmin);
    let openScore = document.getElementById("buttScore");
    openScore.addEventListener("click", openingScore);
    function startingGame() {
        window.open("Spielseite.html", "_self");
    }
    function openingAdmin() {
        window.open("AdminSeite.html", "_self");
    }
    function openingScore() {
        window.open("Highscores.html", "_self");
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=scriptStart.js.map