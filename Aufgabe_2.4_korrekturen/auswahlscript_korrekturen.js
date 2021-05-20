"use strict";
var Aufgabe_2_4_korrektur;
(function (Aufgabe_2_4_korrektur) {
    // let funktionDiv: HTMLElement = <HTMLElement>document.getElementById("funktionen");
    let buttonsDiv = document.getElementById("buttons");
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    let antwort = document.getElementById("antwort");
    let derzeitigAuswahl = document.getElementById("derzeitigeAuswahl");
    derzeitigSim();
    let speicherButton = document.createElement("button");
    speicherButton.id = "speichern";
    speicherButton.innerHTML = "speichern";
    speicherButton.addEventListener("click", nächsteAuswahl);
    buttonsDiv.appendChild(speicherButton);
    let abbrechenButton = document.createElement("button");
    abbrechenButton.id = "abbrechen";
    abbrechenButton.innerHTML = "abbrechen";
    abbrechenButton.addEventListener("click", abbrechen);
    buttonsDiv.appendChild(abbrechenButton);
    let zurückButton = document.createElement("button");
    zurückButton.id = "zurück";
    zurückButton.innerHTML = "zurück";
    zurückButton.addEventListener("click", zurück);
    buttonsDiv.appendChild(zurückButton);
    function abbrechen() {
        window.open("index.html", "_self");
        console.log("Abgebrochen");
    }
    function zurück() {
        let vorherigeSeite;
        if (path == "auswahlShirt.html") {
            vorherigeSeite = "auswahlHaare.html";
        }
        else if (path == "auswahlHose.html") {
            vorherigeSeite = "auswahlShirt.html";
        }
        else if (path == "auswahlHaare.html") {
            vorherigeSeite = "index.html";
        }
        window.open(vorherigeSeite, "_self");
    }
    let previousElement = document.getElementById("funktionen");
    function wählen() {
        let art = Aufgabe_2_4_korrektur.derSim.haare;
        if (window.location.href.includes("auswahlShirt.html"))
            art = Aufgabe_2_4_korrektur.derSim.shirt;
        if (window.location.href.includes("auswahlHose.html"))
            art = Aufgabe_2_4_korrektur.derSim.hose;
        return art;
    }
    function auswählen() {
        const gewaehltes = wählen();
        for (let index = 0; index < gewaehltes.length; index++) {
            let img = document.createElement("img");
            img.setAttribute("src", gewaehltes[index].link);
            img.addEventListener("click", function event() {
                speichern(gewaehltes[index].link, gewaehltes[index].typ);
                derzeitigSim();
            });
            img.id = gewaehltes[index].name;
            previousElement.appendChild(img);
        }
    }
    auswählen();
    function nächsteAuswahl() {
        if (window.location.href.includes("auswahlHaare.html")) {
            if (sessionStorage.getItem("haare") == null) {
                antwort.innerHTML = "BITTE WÄHLEN SIE ETWAS AUS.";
                return;
            }
            window.open("auswahlShirt.html", "_self");
        }
        if (window.location.href.includes("auswahlShirt.html")) {
            if (sessionStorage.getItem("shirt") == null) {
                antwort.innerHTML = "BITTE WÄHLEN SIE ETWAS AUS.";
                return;
            }
            window.open("auswahlHose.html", "_self");
        }
        if (window.location.href.includes("auswahlHose.html")) {
            if (sessionStorage.getItem("hose") == null) {
                antwort.innerHTML = "BITTE WÄHLEN SIE ETWAS AUS.";
                return;
            }
            window.open("fertigSim.html", "_self");
        }
    }
    function speichern(_link, _typ) {
        sessionStorage.setItem(_typ, _link);
    }
    function derzeitigSim() {
        if (path == "auswahlHaare.html") {
            derzeitigAuswahl.innerHTML = "";
            let imgHaare = document.createElement("img");
            imgHaare.setAttribute("src", sessionStorage.getItem("haare"));
            derzeitigAuswahl.appendChild(imgHaare);
        }
        if (path == "auswahlShirt.html") {
            derzeitigAuswahl.innerHTML = "";
            let imgHaare = document.createElement("img");
            imgHaare.setAttribute("src", sessionStorage.getItem("haare"));
            derzeitigAuswahl.appendChild(imgHaare);
            let imgShirt = document.createElement("img");
            imgShirt.setAttribute("src", sessionStorage.getItem("shirt"));
            derzeitigAuswahl.appendChild(imgShirt);
        }
        if (path == "auswahlHose.html") {
            derzeitigAuswahl.innerHTML = "";
            let imgHaare = document.createElement("img");
            imgHaare.setAttribute("src", sessionStorage.getItem("haare"));
            derzeitigAuswahl.appendChild(imgHaare);
            let imgShirt = document.createElement("img");
            imgShirt.setAttribute("src", sessionStorage.getItem("shirt"));
            derzeitigAuswahl.appendChild(imgShirt);
            let imgHose = document.createElement("img");
            imgHose.setAttribute("src", sessionStorage.getItem("hose"));
            derzeitigAuswahl.appendChild(imgHose);
        }
    }
})(Aufgabe_2_4_korrektur || (Aufgabe_2_4_korrektur = {}));
//# sourceMappingURL=auswahlscript_korrekturen.js.map