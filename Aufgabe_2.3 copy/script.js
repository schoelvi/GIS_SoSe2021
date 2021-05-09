"use strict";
var Aufg_2_3;
(function (Aufg_2_3) {
    // Aufgabe 1
    let zeichenflächeDiv = document.getElementById("myCanvas");
    //  zeichenflächeDiv.style.position = "relative";
    zeichenflächeDiv.style.width = "600px";
    zeichenflächeDiv.style.height = "400px";
    //Himmel
    let himmel = document.createElement("div");
    himmel.style.backgroundColor = "lightblue";
    himmel.style.width = "100%";
    himmel.style.height = "100%";
    zeichenflächeDiv.appendChild(himmel);
    //Grass
    let grass = document.createElement("div");
    grass.style.backgroundColor = "green";
    grass.style.width = "100%";
    grass.style.height = "100px";
    grass.style.marginBottom = "0px";
    grass.style.position = "absolut";
    zeichenflächeDiv.appendChild(grass);
    //Haus
    let dach = document.createElement("div");
    dach.setAttribute("style", "width: 0; height: 0; border-style: solid; border-width: 0 130px 200px 130px; border-color: transparent transparent #ff0000 transparent;");
    dach.style.position = "absolute";
    dach.style.top = "60px";
    dach.style.right = "400px";
    zeichenflächeDiv.appendChild(dach);
    let haus = document.createElement("div");
    haus.style.backgroundColor = "orange";
    haus.style.width = "200px";
    haus.style.height = "200px";
    haus.style.position = "absolute";
    haus.style.top = "260px";
    haus.style.left = "200px";
    zeichenflächeDiv.appendChild(haus);
    let zurueckButton = document.getElementById("zurücksetzen");
    zurueckButton.addEventListener("click", weg);
    let neuRechteckButton = document.getElementById("neuesRechteck");
    neuRechteckButton.addEventListener("click", neuRect);
    let divs = [];
    function weg() {
        console.log("Zurücksetzen");
        divs.forEach(element => {
            zeichenflächeDiv.removeChild(element);
        });
        divs = [];
    }
    function zufallsZahl(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function neuRect() {
        console.log("neues Rechteck");
        let rechteck = document.createElement("div");
        let width = zufallsZahl(10, 600);
        let height = zufallsZahl(10, 400);
        rechteck.style.backgroundColor = "black";
        rechteck.style.position = "absolute";
        rechteck.style.width = width + "px";
        rechteck.style.height = height + "px";
        rechteck.style.left = zufallsZahl(0, 400 - width) + "px";
        rechteck.style.top = zufallsZahl(0, 600 - height) + "px";
        zeichenflächeDiv.appendChild(rechteck);
        divs.push(rechteck);
    }
})(Aufg_2_3 || (Aufg_2_3 = {}));
//# sourceMappingURL=script.js.map