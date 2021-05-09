"use strict";
var Aufgabe2_3_2_3;
(function (Aufgabe2_3_2_3) {
    let selected;
    let htmlBilder = [];
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    window.addEventListener("load", loadContent);
    function loadContent() {
        if (path == "auswahlHaare.html") {
            selected = Aufgabe2_3_2_3.ausgewaehltesBild.haare;
            addContentToDetailWindow(Aufgabe2_3_2_3.auswahlHaare);
        }
        else if (path == "auswahlShirt.html") {
            selected = Aufgabe2_3_2_3.ausgewaehltesBild.shirt;
            addContentToDetailWindow(Aufgabe2_3_2_3.auswahlShirt);
        }
        else if (path == "auswahlHose.html") {
            selected = Aufgabe2_3_2_3.ausgewaehltesBild.hose;
            addContentToDetailWindow(Aufgabe2_3_2_3.auswahlHose);
        }
    }
    function addContentToDetailWindow(images) {
        let divToAdd = document.getElementById("auswahlBilder");
        images.forEach(img => {
            let imgElement = document.createElement("img");
            htmlBilder.push(imgElement);
            imgElement.className += "detailImg";
            imgElement.src = img.link;
            if (img == selected) {
                setSelected(img, imgElement);
            }
            imgElement.addEventListener("click", function () {
                setSelected(img, imgElement);
            });
            divToAdd.appendChild(imgElement);
        });
    }
    function setSelected(img, imgElement) {
        selected = img;
        imgElement.className += " selectedImage";
        console.log("selected: " + img.name);
        htmlBilder.forEach(htmlImg => {
            if (htmlImg != imgElement) {
                htmlImg.classList.remove("selectedImage");
            }
        });
    }
    let speicherButton = document.getElementById("speicherButton");
    speicherButton.addEventListener("click", speichern);
    let abbrechenButton = document.getElementById("abbrechenButton");
    abbrechenButton.addEventListener("click", abbrechen);
    function speichern() {
        if (path == "auswahlHaare.html") {
            Aufgabe2_3_2_3.ausgewaehltesBild.haare = selected;
        }
        else if (path == "auswahlShirt.html") {
            Aufgabe2_3_2_3.ausgewaehltesBild.shirt = selected;
        }
        else if (path == "auswahlHose.html") {
            Aufgabe2_3_2_3.ausgewaehltesBild.hose = selected;
        }
        window.open("index.html", "_self");
        console.log("selected: " + selected.name);
    }
    function abbrechen() {
        window.open("index.html", "_self");
        console.log("Abgebrochen");
    }
})(Aufgabe2_3_2_3 || (Aufgabe2_3_2_3 = {}));
//# sourceMappingURL=auswahlscript.js.map