"use strict";
var Aufgabe_2_3_Rest;
(function (Aufgabe_2_3_Rest) {
    Aufgabe_2_3_Rest.nummerHaare = 0;
    Aufgabe_2_3_Rest.nummerShirt = 0;
    Aufgabe_2_3_Rest.nummerHose = 0;
    Aufgabe_2_3_Rest.auswahl = { haare: undefined, shirt: undefined, hose: undefined };
    let haareButton = document.getElementById("haareButton");
    haareButton.addEventListener("click", openHaare);
    let shirtButton = document.getElementById("shirtButton");
    shirtButton.addEventListener("click", openShirt);
    let hoseButton = document.getElementById("hoseButton");
    hoseButton.addEventListener("click", openHose);
    function openHaare() {
        window.open("auswahlHaare.html", "_self");
    }
    function openShirt() {
        window.open("auswahlShirt.html", "_self");
    }
    function openHose() {
        window.open("auswahlHose.html", "_self");
    }
})(Aufgabe_2_3_Rest || (Aufgabe_2_3_Rest = {}));
//# sourceMappingURL=script.js.map