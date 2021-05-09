"use strict";
var Aufgabe2_3_2_3;
(function (Aufgabe2_3_2_3) {
    class Auswahl {
        constructor(_name, _type, _link) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
            if (this.type == 0) {
                Aufgabe2_3_2_3.auswahlHaare.push(this);
            }
            else if (this.type == 1) {
                Aufgabe2_3_2_3.auswahlShirt.push(this);
            }
            else if (this.type == 2) {
                Aufgabe2_3_2_3.auswahlHose.push(this);
            }
        }
    }
    Aufgabe2_3_2_3.Auswahl = Auswahl;
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        let bildHaare = document.getElementById("bildHaare");
        let bildShirt = document.getElementById("bildShirt");
        let bildHose = document.getElementById("bildHose");
        window.addEventListener("load", loadImages);
        function loadImages() {
            bildHaare.src = Aufgabe2_3_2_3.ausgewaehltesBild.haare.link;
            bildShirt.src = Aufgabe2_3_2_3.ausgewaehltesBild.shirt.link;
            bildHose.src = Aufgabe2_3_2_3.ausgewaehltesBild.hose.link;
            console.log(Aufgabe2_3_2_3.ausgewaehltesBild);
        }
        let btEditTop = document.getElementById("haareButton");
        btEditTop.addEventListener("click", openBildHaare);
        let btEditMiddle = document.getElementById("shirtButton");
        btEditMiddle.addEventListener("click", openBildShirt);
        let btEditBottom = document.getElementById("hoseButton");
        btEditBottom.addEventListener("click", openBildHose);
        function openBildHaare() {
            window.open("auswahlHaare.html", "_self");
            console.log("Open Auswahl Haare");
        }
        function openBildShirt() {
            window.open("auswahlShirt.html", "_self");
            console.log("Open Auswahl Shirt");
        }
        function openBildHose() {
            window.open("auswahlHose.html", "_self");
            console.log("Open Auswahl Hose");
        }
    }
})(Aufgabe2_3_2_3 || (Aufgabe2_3_2_3 = {}));
//# sourceMappingURL=script.js.map