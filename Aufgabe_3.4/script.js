"use strict";
{
    let url;
    let urlsearchParameters;
    let answer = document.getElementById("antwort");
    let btSend = document.getElementById("send");
    btSend.addEventListener("click", send);
    let btReceive = document.getElementById("receive");
    btReceive.addEventListener("click", receive);
    let btDelete = document.getElementById("delete");
    btDelete.addEventListener("click", deleteAll);
    async function send() {
        url = "https://gis2021vs.herokuapp.com/";
        //url =  "http://localhost:8100/";
        let formData = new FormData(document.forms[0]);
        urlsearchParameters = new URLSearchParams(formData);
        console.log("Daten gesendet");
        url += "datenSenden" + "?" + urlsearchParameters.toString();
        let response = await fetch(url);
        let showAnswer = await response.text();
        answer.innerText = showAnswer;
    }
    async function receive() {
        url = "https://gis2021vs.herokuapp.com/";
        //url =  "http://localhost:8100/";
        console.log("Daten empfangen");
        url += "datenReceive";
        let response = await fetch(url);
        let showAnswer = await response.text();
        let daten = JSON.parse(showAnswer);
        answer.innerText = "";
        let zaehler2 = 1;
        for (let zaehler = 0; zaehler < daten.length; zaehler++) {
            answer.innerHTML = answer.innerHTML + zaehler2 + ". " + "Vorname: " + daten[zaehler].vorname + ", " + "Nachname: " + daten[zaehler].nachname + ", " + "Email: " + daten[zaehler].email + ", " + "Passwort: " + daten[zaehler].passwort;
            answer.innerHTML = answer.innerHTML + "<br>" + "<br>";
            zaehler2++;
        }
    }
    async function deleteAll() {
        url = "https://gis2021vs.herokuapp.com/";
        //url =  "http://localhost:8100/";
        console.log("Daten gelöscht");
        url += "datenLoeschen";
        let response = await fetch(url);
        let showAnswer = await response.text();
        answer.innerText = showAnswer;
    }
}
//# sourceMappingURL=script.js.map