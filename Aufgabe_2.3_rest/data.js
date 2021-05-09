"use strict";
var Aufgabe2_3_2_3;
(function (Aufgabe2_3_2_3) {
    Aufgabe2_3_2_3.auswahlHaare = [];
    Aufgabe2_3_2_3.auswahlShirt = [];
    Aufgabe2_3_2_3.auswahlHose = [];
    let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
    //Haare
    let simHaare = new Aufgabe2_3_2_3.Auswahl("Sim - Haare", 0, path + "assets/haare/sim1_kopf.jpg");
    //Shirt
    let simShirt = new Aufgabe2_3_2_3.Auswahl("Sim - Shirt", 1, path + "assets/shirt/sim1_shirt.jpg");
    //Hose
    let simHose = new Aufgabe2_3_2_3.Auswahl("Sim - Hose", 2, path + "assets/hose/sim1_hose.jpg");
    Aufgabe2_3_2_3.ausgewaehltesBild = { haare: Aufgabe2_3_2_3.auswahlHaare[0], shirt: Aufgabe2_3_2_3.auswahlShirt[0], hose: Aufgabe2_3_2_3.auswahlHose[0] };
    //Sim2
    let sim2Haare = new Aufgabe2_3_2_3.Auswahl("Sim2 - Haare", 0, path + "assets/haare/sim2_kopf.jpg");
    let sim2Shirt = new Aufgabe2_3_2_3.Auswahl("Sim2 - Shirt", 1, path + "assets/shirt/sim2_shirt.jpg");
    let sim2Hose = new Aufgabe2_3_2_3.Auswahl("Sim2 - Hose", 2, path + "assets/hose/sim2_hose.jpg");
    //Sim3
    let sim3Haare = new Aufgabe2_3_2_3.Auswahl("Sim3 - Haare", 0, path + "assets/haare/sim3_kopf.jpg");
    let sim3Shirt = new Aufgabe2_3_2_3.Auswahl("Sim3 - Shirt", 1, path + "assets/shirt/sim3_shirt.jpg");
    let sim3Hose = new Aufgabe2_3_2_3.Auswahl("Sim3 - Hose", 2, path + "assets/hose/sim3_hose.jpg");
    //Sim4
    let sim4Haare = new Aufgabe2_3_2_3.Auswahl("Sim4 - Haare", 0, path + "assets/haare/sim4_kopf.jpg");
    let sim4Shirt = new Aufgabe2_3_2_3.Auswahl("Sim4 - Shirt", 1, path + "assets/shirt/sim4_shirt.jpg");
    let sim4Hose = new Aufgabe2_3_2_3.Auswahl("Sim4 - Hose", 2, path + "assets/hose/sim4_hose.jpg");
})(Aufgabe2_3_2_3 || (Aufgabe2_3_2_3 = {}));
//# sourceMappingURL=data.js.map