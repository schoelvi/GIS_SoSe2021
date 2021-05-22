"use strict";
var Aufgabe_2_5;
(function (Aufgabe_2_5) {
    let buttonsDiv = document.getElementById("buttons");
    let bilderDiv = document.getElementById("funktionen");
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
    // let previousElement: HTMLElement = document.getElementById("funktionen");
    ladeBilderAusJSON("data.json");
    async function ladeBilderAusJSON(_url) {
        let response = await fetch(_url);
        let json = JSON.stringify(await response.json());
        let objectJson = JSON.parse(json);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlHaare.html") {
            for (let index = 0; index < objectJson.haare.length; index++) {
                let meinbild = document.createElement("img");
                meinbild.addEventListener("click", function () { auswählen(objectJson.haare[index]); });
                // meinbild.src = objectJson.haare[index].link;
                meinbild.setAttribute("src", objectJson.haare[index].link);
                bilderDiv.appendChild(meinbild);
            }
        }
        else if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlShirt.html") {
            for (let index = 0; index < objectJson.shirt.length; index++) {
                let meinbild = document.createElement("img");
                meinbild.addEventListener("click", function () { auswählen(objectJson.shirt[index]); });
                // meinbild.src = objectJson.shirt[index].link;
                meinbild.setAttribute("src", objectJson.shirt[index].link);
                bilderDiv.appendChild(meinbild);
            }
        }
        else if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlHose.html") {
            for (let index = 0; index < objectJson.hose.length; index++) {
                let meinbild = document.createElement("img");
                meinbild.addEventListener("click", function () { auswählen(objectJson.hose[index]); });
                // meinbild.src = objectJson.hose[index].link;
                meinbild.setAttribute("src", objectJson.hose[index].link);
                bilderDiv.appendChild(meinbild);
            }
        }
    }
    /*  function wauswählenhlen(): BildSim[] {
          let art: BildSim[] = derSim.haare;
          if (window.location.href.includes("auswahlShirt.html"))
              art = derSim.shirt;
          if (window.location.href.includes("auswahlHose.html"))
              art = derSim.hose;
          return art;
          }
  
      */
    /*function auswählen(): void {
        const gewaehltes: BildSim[] = ladeBilderAusJSON();
        for (let index: number = 0; index < gewaehltes.length; index++) {

            let img: HTMLElement = document.createElement("img");
            img.setAttribute("src", gewaehltes[index].link);
            img.addEventListener("click", function event(): void {speichern(gewaehltes[index].link, gewaehltes[index].typ); derzeitigSim();
            });

            img.id = gewaehltes[index].name;
            previousElement.appendChild(img);
        }
        
    } */
    function auswählen(_bild) {
        if (_bild.typ == Aufgabe_2_5.nummerHaare) {
            Aufgabe_2_5.auswahl.haare = _bild;
        }
        if (_bild.typ == Aufgabe_2_5.nummerShirt) {
            Aufgabe_2_5.auswahl.shirt = _bild;
        }
        if (_bild.typ == Aufgabe_2_5.nummerHose) {
            Aufgabe_2_5.auswahl.hose = _bild;
        }
        let auswahlJSON = JSON.stringify(Aufgabe_2_5.auswahl);
        sessionStorage.setItem("" + _bild.typ, auswahlJSON);
    }
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
    //  function speichern(_link: string, _typ: string): void {
    //      sessionStorage.setItem(_typ, _link);
    //  }
    function derzeitigSim() {
        if (path == "auswahlHaare.html") {
            derzeitigAuswahl.innerHTML = "";
            let imgHaare = document.createElement("img");
            imgHaare.setAttribute("src", JSON.parse(sessionStorage.getItem("haare")));
            derzeitigAuswahl.appendChild(imgHaare);
        }
        else if (path == "auswahlShirt.html") {
            derzeitigAuswahl.innerHTML = "";
            let imgHaare = document.createElement("img");
            imgHaare.setAttribute("src", JSON.parse(sessionStorage.getItem("haare")));
            derzeitigAuswahl.appendChild(imgHaare);
            let imgShirt = document.createElement("img");
            imgShirt.setAttribute("src", JSON.parse(sessionStorage.getItem("shirt")));
            derzeitigAuswahl.appendChild(imgShirt);
        }
        else if (path == "auswahlHose.html") {
            derzeitigAuswahl.innerHTML = "";
            let imgHaare = document.createElement("img");
            imgHaare.setAttribute("src", JSON.parse(sessionStorage.getItem("haare")));
            derzeitigAuswahl.appendChild(imgHaare);
            let imgShirt = document.createElement("img");
            imgShirt.setAttribute("src", JSON.parse(sessionStorage.getItem("shirt")));
            derzeitigAuswahl.appendChild(imgShirt);
            let imgHose = document.createElement("img");
            imgHose.setAttribute("src", JSON.parse(sessionStorage.getItem("hose")));
            derzeitigAuswahl.appendChild(imgHose);
        }
    }
})(Aufgabe_2_5 || (Aufgabe_2_5 = {}));
//# sourceMappingURL=auswahlscript.js.map