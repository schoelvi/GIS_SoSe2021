namespace Aufgabe_2_5 {

    export let nummerHaare: number = 0;
    export let nummerShirt: number = 1;
    export let nummerHose: number = 2;
    export let auswahl: Auswahl = {haare: undefined, shirt: undefined, hose: undefined};

    export interface Sim {
        haare: BildSim[];
        shirt: BildSim[];
        hose: BildSim[];
    }

    export interface BildSim {
        link: string;
        name: string;
        typ: string;
    }

    export interface Auswahl {
        haare: BildSim;
        shirt: BildSim;
        hose: BildSim;
    }

    let bildDiv: HTMLElement = <HTMLElement>document.getElementById("auswahlButtons");

    let haareButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    haareButton.id = "Haare";
    haareButton.innerHTML = "Haare";
    bildDiv.appendChild(haareButton);
    haareButton.addEventListener("click", openHaare);
    

    function openHaare(): void {
        window.open("auswahlHaare.html", "_self");
        console.log("auswahlHaare");
    }

    

    
}