"use strict";
var Aufgabe_3_1;
(function (Aufgabe_3_1) {
    let btLogin = document.getElementById("login");
    btLogin.addEventListener("click", login);
    async function login() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gis2021vs.herokuapp.com/";
        url = url + "?" + query.toString();
        console.log("test" + query.toString());
        let response = await fetch(url);
        let text = await response.text();
        console.log("Answer:");
        console.log(text);
    }
})(Aufgabe_3_1 || (Aufgabe_3_1 = {}));
//# sourceMappingURL=script.js.map