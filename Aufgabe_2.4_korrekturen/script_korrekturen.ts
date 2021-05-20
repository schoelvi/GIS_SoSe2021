namespace Aufgabe_2_4_korrektur {

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
        typ: number;
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

    function openHaare(): void {
        window.open("auswahlHaare.html", "_self");
        console.log("auswahlHaare");
    }

    

    
}