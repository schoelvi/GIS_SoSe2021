namespace Aufgabe2_3_2_3 {

    export class Auswahl {
        name: string;
        type: number;
        link: string;

        constructor(_name: string, _type: number, _link: string) {
            this.name = _name;
            this.type = _type;
            this.link = _link;

            if (this.type == 0) {
                auswahlHaare.push(this);
            } else if (this.type == 1) {
                auswahlShirt.push(this);
            } else if (this.type == 2) {
                auswahlHose.push(this);
            }
        }
    }

    export interface Ausgewaehlt {
        haare: Auswahl;
        shirt: Auswahl;
        hose: Auswahl;
    }

    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    
    if (path == "index.html" || path == "") {
        let bildHaare: HTMLImageElement = <HTMLImageElement>document.getElementById("bildHaare");
        let bildShirt: HTMLImageElement = <HTMLImageElement>document.getElementById("bildShirt");
        let bildHose: HTMLImageElement = <HTMLImageElement>document.getElementById("bildHose");

        window.addEventListener("load", loadImages);

        function loadImages(): void {
            bildHaare.src = ausgewaehltesBild.haare.link;
            bildShirt.src = ausgewaehltesBild.shirt.link;
            bildHose.src = ausgewaehltesBild.hose.link;
            console.log(ausgewaehltesBild);
        }
        
        let btEditTop: HTMLButtonElement = <HTMLButtonElement>document.getElementById("haareButton");
        btEditTop.addEventListener("click", openBildHaare);
        let btEditMiddle: HTMLButtonElement = <HTMLButtonElement>document.getElementById("shirtButton");
        btEditMiddle.addEventListener("click", openBildShirt);
        let btEditBottom: HTMLButtonElement = <HTMLButtonElement>document.getElementById("hoseButton");
        btEditBottom.addEventListener("click", openBildHose);

        function openBildHaare(): void {
            window.open("auswahlHaare.html", "_self");
            console.log("Open Auswahl Haare");
        }
        function openBildShirt(): void {
            window.open("auswahlShirt.html", "_self");
            console.log("Open Auswahl Shirt");
        }
        function openBildHose(): void {
            window.open("auswahlHose.html", "_self");
            console.log("Open Auswahl Hose");
        }
    }
}


