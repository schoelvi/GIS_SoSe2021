"use strict";
var Endabgabe;
(function (Endabgabe) {
    let showHighscoreButton = document.getElementById("showHighscore");
    showHighscoreButton.addEventListener("click", openSend);
    let neuerVersuchButton = document.getElementById("newGame");
    neuerVersuchButton.addEventListener("click", openGame);
    // let receiveButton: HTMLElement = <HTMLElement>document.getElementById("receive");
    // receiveButton.addEventListener("click", receive);
    let url;
    let urlsearchParameters;
    let answer = document.getElementById("antwort");
    //Verlinkungen auf andere Seiten
    function openGame() {
        window.open("game.html", "_self");
        console.log("open Game");
    }
    async function openSend() {
        //url = "https://gis2021vs.herokuapp.com/";
        url = "http://localhost:8100/";
        let formData = new FormData(document.forms[0]);
        urlsearchParameters = new URLSearchParams(formData);
        url += "datenSenden" + "?" + urlsearchParameters.toString();
        let response = await fetch(url);
        let showAnswer = await response.text();
        answer.innerText = showAnswer;
        openHighscore();
    }
    function openHighscore() {
        window.open("highscore.html", "_self");
        console.log("open Highscore");
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=login.js.map