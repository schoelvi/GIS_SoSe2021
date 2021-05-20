"use strict";
var Aufgabe_2_4_korrektur;
(function (Aufgabe_2_4_korrektur) {
    let fertigSim = document.getElementById("fertigSim");
    let buttonsDiv = document.getElementById("buttons");
    window.addEventListener("load", speicherAnzeigen);
    function speicherAnzeigen() {
        if (sessionStorage.getItem("" + Aufgabe_2_4_korrektur.nummerHaare) != undefined) {
            let ladeHaare = JSON.parse(sessionStorage.getItem("" + Aufgabe_2_4_korrektur.nummerHaare));
            let vorschauHaare = document.createElement("img");
            vorschauHaare.src = ladeHaare.haare.link;
            fertigSim.appendChild(vorschauHaare);
        }
        if (sessionStorage.getItem("" + Aufgabe_2_4_korrektur.nummerShirt) != undefined) {
            let ladeShirt = JSON.parse(sessionStorage.getItem("" + Aufgabe_2_4_korrektur.nummerShirt));
            let vorschauMitte = document.createElement("img");
            vorschauMitte.src = ladeShirt.shirt.link;
            fertigSim.appendChild(vorschauMitte);
        }
        if (sessionStorage.getItem("" + Aufgabe_2_4_korrektur.nummerHose) != undefined) {
            let ladeHose = JSON.parse(sessionStorage.getItem("" + Aufgabe_2_4_korrektur.nummerHose));
            let vorschauHose = document.createElement("img");
            vorschauHose.src = ladeHose.hose.link;
            fertigSim.appendChild(vorschauHose);
        }
        /*
                for (let index: number = 0; index < sessionStorage.length; index++) {
        
                    let img: HTMLElement = document.createElement("img");
                    img.setAttribute("src", sessionStorage[index]);
        
                    fertigSim.appendChild(img);
                }
                */
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
})(Aufgabe_2_4_korrektur || (Aufgabe_2_4_korrektur = {}));
//# sourceMappingURL=fertigSim_korrekturen.js.map