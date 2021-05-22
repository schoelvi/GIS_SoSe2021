"use strict";
var Aufgabe_2_5;
(function (Aufgabe_2_5) {
    Aufgabe_2_5.nummerHaare = "haare";
    Aufgabe_2_5.nummerShirt = "shirt";
    Aufgabe_2_5.nummerHose = "hose";
    Aufgabe_2_5.auswahl = { haare: undefined, shirt: undefined, hose: undefined };
    let bildDiv = document.getElementById("auswahlButtons");
    let haareButton = document.createElement("button");
    haareButton.id = "Haare";
    haareButton.innerHTML = "Haare";
    bildDiv.appendChild(haareButton);
    haareButton.addEventListener("click", openHaare);
    /* benötigt  man nicht mehr, da man von der "startseite" als erstes auf die Haare muss
        let shirtButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
        shirtButton.id = "Shirt";
        shirtButton.innerHTML = "Shirt";
        shirtButton.addEventListener("click", openShirt);
        bildDiv.appendChild(shirtButton);
    
        let hoseButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
        hoseButton.id = "Hose";
        hoseButton.innerHTML = "Hose";
        hoseButton.addEventListener("click", openHose);
        bildDiv.appendChild(hoseButton);
        
        function openShirt(): void {
            window.open("auswahlShirt.html", "_self");
            console.log("auswahlHaare");
        }
    
        function openHose(): void {
            window.open("auswahlHose.html", "_self");
            console.log("auswahlHaare");
        }
        */
    function openHaare() {
        window.open("auswahlHaare.html", "_self");
        console.log("auswahlHaare");
    }
})(Aufgabe_2_5 || (Aufgabe_2_5 = {}));
//# sourceMappingURL=script.js.map