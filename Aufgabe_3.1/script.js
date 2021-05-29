"use strict";
var Aufgabe_3_1;
(function (Aufgabe_3_1) {
    let formData = new FormData(document.forms[0]);
    let btSend = document.getElementById("login");
    btSend.addEventListener("click", login);
    async function login() {
        let url = "https://gis2021vs.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log("Answer:");
        console.log(text);
    }
})(Aufgabe_3_1 || (Aufgabe_3_1 = {}));
//# sourceMappingURL=script.js.map