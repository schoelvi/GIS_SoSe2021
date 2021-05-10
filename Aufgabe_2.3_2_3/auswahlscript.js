"use strict";
var Aufgabe_2_3_Rest;
(function (Aufgabe_2_3_Rest) {
    let funktionDiv = document.getElementById("funktionen");
    /*let speicherButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
      speicherButton.id = "speichern";
      speicherButton.addEventListener("click", speichern);
      funktionDiv.appendChild(speicherButton);*/
    let abbrechenButton = document.createElement("button");
    abbrechenButton.id = "abbrechen";
    abbrechenButton.innerHTML = "abbrechen";
    abbrechenButton.addEventListener("click", abbrechen);
    funktionDiv.appendChild(abbrechenButton);
    function abbrechen() {
        window.open("index.html", "_self");
    }
    let previousElement = document.body;
    function Bildübernahme() {
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlHaare.html") {
            console.log("auswahlHaare");
            for (let index = 0; index < Aufgabe_2_3_Rest.Haare.length; index++) {
                let posLeft = "";
                let posTop = "";
                posLeft = (index * 200) + "px";
                posTop = 100 + "px";
                let img = document.createElement("img");
                img.style.position = "static";
                img.style.left = posLeft;
                img.style.top = posTop;
                img.style.margin = "10px";
                img.style.height = 200 + "px";
                img.style.width = 200 + "px";
                img.setAttribute("src", Aufgabe_2_3_Rest.Haare[index].link);
                previousElement.appendChild(img);
            }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlShirt.html") {
            console.log("auswahlShirt");
            for (let index = 0; index < Aufgabe_2_3_Rest.Shirt.length; index++) {
                let posLeft = "";
                let posTop = "";
                posLeft = (index * 200) + "px";
                posTop = 100 + "px";
                let img = document.createElement("img");
                img.style.position = "static";
                img.style.left = posLeft;
                img.style.top = posTop;
                img.style.margin = "10px";
                img.style.height = 200 + "px";
                img.style.width = 200 + "px";
                img.setAttribute("src", Aufgabe_2_3_Rest.Shirt[index].link);
                previousElement.appendChild(img);
            }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlHose.html") {
            console.log("auswahlHose");
            for (let index = 0; index < Aufgabe_2_3_Rest.Hose.length; index++) {
                let posLeft = "";
                let posTop = "";
                posLeft = (index * 200) + "px";
                posTop = 100 + "px";
                let img = document.createElement("img");
                img.style.position = "static";
                img.style.left = posLeft;
                img.style.top = posTop;
                img.style.margin = "10px";
                img.style.height = 200 + "px";
                img.style.width = 200 + "px";
                img.setAttribute("src", Aufgabe_2_3_Rest.Hose[index].link);
                previousElement.appendChild(img);
            }
        }
    }
    Bildübernahme();
})(Aufgabe_2_3_Rest || (Aufgabe_2_3_Rest = {}));
//# sourceMappingURL=auswahlscript.js.map