namespace Aufgabe2_3_2_3 {

    export let auswahlHaare: Auswahl[] = [];
    export let auswahlShirt: Auswahl[] = [];
    export let auswahlHose: Auswahl[] = [] ;

    let path: string = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);

    //Haare
    let simHaare: Auswahl = new Auswahl("Sim - Haare", 0, path + "assets/haare/sim1_kopf.jpg");

    //Shirt
    let simShirt: Auswahl = new Auswahl("Sim - Shirt", 1, path + "assets/shirt/sim1_shirt.jpg");

    //Hose
    let simHose: Auswahl = new Auswahl("Sim - Hose", 2, path + "assets/hose/sim1_hose.jpg");

    export let ausgewaehltesBild: Ausgewaehlt = {haare: auswahlHaare[0], shirt: auswahlShirt[0], hose: auswahlHose[0]};

    //Sim2
    let sim2Haare: Auswahl = new Auswahl("Sim2 - Haare", 0, path + "assets/haare/sim2_kopf.jpg");
    let sim2Shirt: Auswahl = new Auswahl("Sim2 - Shirt", 1, path + "assets/shirt/sim2_shirt.jpg");
    let sim2Hose: Auswahl = new Auswahl("Sim2 - Hose", 2, path + "assets/hose/sim2_hose.jpg");

    //Sim3
    let sim3Haare: Auswahl = new Auswahl("Sim3 - Haare", 0, path + "assets/haare/sim3_kopf.jpg");
    let sim3Shirt: Auswahl = new Auswahl("Sim3 - Shirt", 1, path + "assets/shirt/sim3_shirt.jpg");
    let sim3Hose: Auswahl = new Auswahl("Sim3 - Hose", 2, path + "assets/hose/sim3_hose.jpg");

    //Sim4
    let sim4Haare: Auswahl = new Auswahl("Sim4 - Haare", 0, path + "assets/haare/sim4_kopf.jpg");
    let sim4Shirt: Auswahl = new Auswahl("Sim4 - Shirt", 1, path + "assets/shirt/sim4_shirt.jpg");
    let sim4Hose: Auswahl = new Auswahl("Sim4 - Hose", 2, path + "assets/hose/sim4_hose.jpg");

}