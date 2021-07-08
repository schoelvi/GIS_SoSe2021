"use strict";
var Endabgabe;
(function (Endabgabe) {
    let url;
    let urlsearchParameters;
    let answer = document.getElementById("antwort");
    let bilderDiv = document.getElementById("bilderDatenbank");
    showBild();
    let bildEinfuegenButton = document.getElementById("hinzufuegen");
    bildEinfuegenButton.addEventListener("click", bildHinzufuegen);
    let bildLoeschenButton = document.getElementById("loeschen");
    bildLoeschenButton.addEventListener("click", deleteBild);
    async function bildHinzufuegen() {
        //url = "https://gis2021vs.herokuapp.com/";
        url = "http://localhost:8100/";
        let formData = new FormData(document.forms[0]);
        urlsearchParameters = new URLSearchParams(formData);
        console.log("URL gesendet");
        url += "urlSenden" + "?" + urlsearchParameters.toString();
        let response = await fetch(url);
        let showAnswer = await response.text();
        answer.innerText = showAnswer;
    }
    async function showBild() {
        //url = "https://gis2021vs.herokuapp.com/";
        url = "http://localhost:8100/";
        console.log("Daten empfangen");
        url += "bildReceive";
        let response = await fetch(url);
        let showAnswer = await response.text();
        let daten = JSON.parse(showAnswer);
        for (let zaehler = 0; zaehler < daten.length; zaehler++) {
            let bild = document.createElement("img");
            bild.className = "bilderAdmin";
            bild.src = daten[zaehler].url;
            bilderDiv.appendChild(bild);
        }
    }
    async function deleteBild() {
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=admin.js.map