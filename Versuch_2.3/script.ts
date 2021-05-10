namespace Aufgabe_2_3_Rest {

    export let nummerHaare: number = 0;
    export let nummerShirt: number = 0;
    export let nummerHose: number = 0;
    export let auswahl: Auswahl = {haare: undefined, shirt: undefined, hose: undefined};

    export interface Sim {
        haare: BildSim[];
        shirt: BildSim[];
        hose: BildSim[];
    }

    export interface BildSim {
        link: string;
        typ: number;
    }

    export interface Auswahl {
        haare: BildSim;
        shirt: BildSim;
        hose: BildSim;
    }

    let haareButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("haareButton");
    haareButton.addEventListener("click", openHaare);
    let shirtButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("shirtButton");
    shirtButton.addEventListener("click", openShirt);
    let hoseButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("hoseButton");
    hoseButton.addEventListener("click", openHose);

    function openHaare(): void {
        window.open("auswahlHaare.html", "_self");
    }

    function openShirt(): void {
        window.open("auswahlShirt.html", "_self");
    }

    function openHose(): void {
        window.open("auswahlHose.html", "_self");
    }



}