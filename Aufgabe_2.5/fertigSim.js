"use strict";
var Aufgabe_2_5;
(function (Aufgabe_2_5) {
    let fertigSim = document.getElementById("fertigSim");
    let buttonsDiv = document.getElementById("buttons");
    function speicherAnzeigen() {
        let imgHaare = document.createElement("img");
        imgHaare.setAttribute("src", (sessionStorage.getItem("haare")));
        fertigSim.appendChild(imgHaare);
        let imgShirt = document.createElement("img");
        imgShirt.setAttribute("src", (sessionStorage.getItem("shirt")));
        fertigSim.appendChild(imgShirt);
        let imgHose = document.createElement("img");
        imgHose.setAttribute("src", (sessionStorage.getItem("hose")));
        fertigSim.appendChild(imgHose);
    }
    speicherAnzeigen();
    let startseite = document.createElement("button");
    startseite.id = "abbrechen";
    startseite.innerHTML = "Gefällt mir doch nicht, ich möchte von vorne beginnen";
    startseite.addEventListener("click", neuBeginnen);
    buttonsDiv.appendChild(startseite);
    function neuBeginnen() {
        window.open("auswahlHaare.html", "_self");
        console.log("Abgebrochen");
    }
})(Aufgabe_2_5 || (Aufgabe_2_5 = {}));
//# sourceMappingURL=fertigSim.js.map