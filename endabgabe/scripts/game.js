"use strict";
var Endabgabe;
(function (Endabgabe) {
    let einstelltungenButton = document.getElementById("admin");
    einstelltungenButton.addEventListener("click", openEinstellungen);
    let showHighscoreButton = document.getElementById("showHighscore");
    showHighscoreButton.addEventListener("click", openHighscore);
    let startButton = document.getElementById("showHighscore");
    startButton.addEventListener("click", startGame);
    //Verlinkungen auf andere Seiten
    function openEinstellungen() {
        window.open("admin.html", "_self");
        console.log("open Einstellungen");
    }
    function openHighscore() {
        window.open("highscore.html", "_self");
        console.log("open Highscore");
    }
    function startGame() {
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=game.js.map