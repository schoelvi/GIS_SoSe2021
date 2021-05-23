"use strict";
var Aufgabe_2_5;
(function (Aufgabe_2_5) {
    Aufgabe_2_5.nummerHaare = 0;
    Aufgabe_2_5.nummerShirt = 1;
    Aufgabe_2_5.nummerHose = 2;
    Aufgabe_2_5.auswahl = { haare: undefined, shirt: undefined, hose: undefined };
    let bildDiv = document.getElementById("auswahlButtons");
    let haareButton = document.createElement("button");
    haareButton.id = "Haare";
    haareButton.innerHTML = "Haare";
    bildDiv.appendChild(haareButton);
    haareButton.addEventListener("click", openHaare);
    function openHaare() {
        window.open("auswahlHaare.html", "_self");
        console.log("auswahlHaare");
    }
})(Aufgabe_2_5 || (Aufgabe_2_5 = {}));
//# sourceMappingURL=script.js.map