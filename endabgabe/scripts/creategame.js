"use strict";
var Endabgabe;
(function (Endabgabe) {
    let url;
    let urlsearchParameters;
    let answer = document.getElementById("antwort");
    let hinweis = document.getElementById("hinweis");
    let sperren1 = document.getElementById("sperren1");
    let sperren2 = document.getElementById("sperren2");
    let sperren3 = document.getElementById("sperren3");
    let registerButtons = document.getElementById("register");
    registerButtons.addEventListener("click", openSend);
    let startButton = document.getElementById("startGame");
    startButton.addEventListener("click", openStartpage);
    let createButton = document.getElementById("createGame");
    createButton.addEventListener("click", openCreatepage);
    //Verlinkungen auf andere Seiten
    /*function openRegistration(): void {
        window.open("registration.html", "_self");
        console.log("open Registratiom");
    }*/
    function openStartpage() {
        setTimeout(function () {
            window.open("startpage.html", "_self");
            console.log("open Startgame");
        }, 5000);
    }
    function openCreatepage() {
        window.open("creategame.html", "_self");
        console.log("open Creategame");
    }
    // Daten des Spielers zusammen mit den Daten (Zeit, Versuche) in die Datenbank abschicken
    async function openSend() {
        if (sperren1.value == "" && sperren2.value == "" && sperren3.value == "") {
            hinweis.innerHTML = "Alle Felder müssen ausgefüllt sein.";
        }
        else {
            url = "https://gis2021vs.herokuapp.com/";
            //url = "http://localhost:8100/";
            let formData = new FormData(document.forms[0]);
            urlsearchParameters = new URLSearchParams(formData);
            url += "datenSenden" + "?" + urlsearchParameters.toString();
            let response = await fetch(url);
            let showAnswer = await response.text();
            answer.innerText = showAnswer;
            openStartpage();
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=creategame.js.map