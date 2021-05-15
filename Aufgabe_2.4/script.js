"use strict";
var Aufgabe_2_4;
(function (Aufgabe_2_4) {
    Aufgabe_2_4.nummerHaare = 0;
    Aufgabe_2_4.nummerShirt = 0;
    Aufgabe_2_4.nummerHose = 0;
    Aufgabe_2_4.auswahl = { haare: undefined, shirt: undefined, hose: undefined };
    let bildDiv = document.getElementById("auswahlButtons");
    let haareButton = document.createElement("button");
    haareButton.id = "Haare";
    haareButton.innerHTML = "Haare";
    bildDiv.appendChild(haareButton);
    haareButton.addEventListener("click", openHaare);
    let shirtButton = document.createElement("button");
    shirtButton.id = "Shirt";
    shirtButton.innerHTML = "Shirt";
    shirtButton.addEventListener("click", openShirt);
    bildDiv.appendChild(shirtButton);
    let hoseButton = document.createElement("button");
    hoseButton.id = "Hose";
    hoseButton.innerHTML = "Hose";
    hoseButton.addEventListener("click", openHose);
    bildDiv.appendChild(hoseButton);
    function openHaare() {
        window.open("auswahlHaare.html", "_self");
        console.log("auswahlHaare");
    }
    function openShirt() {
        window.open("auswahlShirt.html", "_self");
        console.log("auswahlHaare");
    }
    function openHose() {
        window.open("auswahlHose.html", "_self");
        console.log("auswahlHaare");
    }
})(Aufgabe_2_4 || (Aufgabe_2_4 = {}));
//# sourceMappingURL=script.js.map