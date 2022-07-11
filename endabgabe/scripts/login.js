"use strict";
var Endabgabe;
(function (Endabgabe) {
    let url;
    let urlsearchParameters;
    let answer = document.getElementById("antwort");
    let hinweis = document.getElementById("hinweis");
    let sperren1 = document.getElementById("sperren1");
    let signinButton = document.getElementById("signIn");
    signinButton.addEventListener("click", openSend);
    let registrationButton = document.getElementById("newUser");
    registrationButton.addEventListener("click", openRegistration);
    //Verlinkungen auf andere Seiten
    function openRegistration() {
        window.open("registration.html", "_self");
        console.log("open Registratiom");
    }
    function openHighscore() {
        window.open("highscore.html", "_self");
        console.log("open Highscore");
    }
    // Daten des Spielers zusammen mit den Daten (Zeit, Versuche) in die Datenbank abschicken
    async function openSend() {
        if (sperren1.value == "") {
            hinweis.innerHTML = "Beide Felder müssen ausgefüllt sein.";
        }
        else {
            url = "https://gis2021vs.herokuapp.com/";
            //url = "http://localhost:8100/";
            let formData = new FormData(document.forms[0]);
            urlsearchParameters = new URLSearchParams(formData);
            url += "compareUserdata" + "?" + urlsearchParameters.toString();
            let response = await fetch(url);
            let showAnswer = await response.text();
            answer.innerText = showAnswer;
            openHighscore();
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=login.js.map