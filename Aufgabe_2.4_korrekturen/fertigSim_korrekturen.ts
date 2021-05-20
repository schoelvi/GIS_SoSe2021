namespace Aufgabe_2_4_korrektur {

    let fertigSim: HTMLElement = <HTMLElement>document.getElementById("fertigSim");
    let buttonsDiv: HTMLElement = <HTMLElement>document.getElementById("buttons");
    
    window.addEventListener("load", speicherAnzeigen);

    function speicherAnzeigen(): void {
        if (sessionStorage.getItem("" + nummerHaare) != undefined) {
            let ladeHaare: Auswahl = JSON.parse(sessionStorage.getItem("" + nummerHaare));
            let vorschauHaare: HTMLImageElement = document.createElement("img");
            vorschauHaare.src = ladeHaare.haare.link;
            fertigSim.appendChild(vorschauHaare);
        }
        if (sessionStorage.getItem("" + nummerShirt) != undefined) {
            let ladeShirt: Auswahl = JSON.parse(sessionStorage.getItem("" + nummerShirt));
            let vorschauMitte: HTMLImageElement = document.createElement("img");
            vorschauMitte.src = ladeShirt.shirt.link;
            fertigSim.appendChild(vorschauMitte);
        }
        if (sessionStorage.getItem("" + nummerHose) != undefined) {
            let ladeHose: Auswahl = JSON.parse(sessionStorage.getItem("" + nummerHose));
            let vorschauHose: HTMLImageElement = document.createElement("img");
            vorschauHose.src = ladeHose.hose.link;
            fertigSim.appendChild(vorschauHose);
        }
/*
        for (let index: number = 0; index < sessionStorage.length; index++) {

            let img: HTMLElement = document.createElement("img");
            img.setAttribute("src", sessionStorage[index]);

            fertigSim.appendChild(img);
        }
        */
    }   
    speicherAnzeigen();

    let startseite: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    startseite.id = "abbrechen";
    startseite.innerHTML = "Gefällt mir doch nicht, ich möchte von vorne beginnen";
    startseite.addEventListener("click", neuBeginnen);
    buttonsDiv.appendChild(startseite);

    function neuBeginnen(): void {
        window.open("auswahlHaare.html", "_self");
        console.log("Abgebrochen");
    }
}