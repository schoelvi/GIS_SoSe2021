"use strict";
var Aufgabe_3_2;
(function (Aufgabe_3_2) {
    let url = "https://gis2021vs.herokuapp.com/";
    // let url: string = "http://localhost:8100/";
    let answer = document.getElementById("antwort");
    let btHtml = document.getElementById("sendHtml");
    btHtml.addEventListener("click", sendHtml);
    let btJson = document.getElementById("sendJson");
    btJson.addEventListener("click", sendJson);
    async function sendHtml() {
        let response = await send(url + "html");
        let text = await response.text();
        answer.innerHTML = "ServerAntwort:<br/>" + text;
    }
    async function sendJson() {
        let response = await send(url + "json");
        let json = await response.json();
        console.log("Answer:");
        console.log(json);
        answer.innerHTML = "<pre>" + JSON.stringify(json, undefined, 2) + "</pre>";
    }
    async function send(_url) {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        return response;
    }
})(Aufgabe_3_2 || (Aufgabe_3_2 = {}));
//# sourceMappingURL=script.js.map