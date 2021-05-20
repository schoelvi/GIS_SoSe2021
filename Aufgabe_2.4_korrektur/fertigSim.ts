namespace Aufgabe_2_4_korrektur {

    let fertigSim: HTMLElement = <HTMLElement>document.getElementById("fertigSim");

    function speicherAnzeigen(): void {
        for (let index: number = 0; index < sessionStorage.length; index++) {

            let posLeft: string = "";
            let posTop: string = "";
            posLeft = (index * 200) + "px";
            posTop = 100 + "px";

            let img: HTMLElement = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.style.margin = "10px";
            img.style.height = 200 + "px";
            img.style.width = 200 + "px";
            img.setAttribute("src", sessionStorage[index]);

            fertigSim.appendChild(img);
        }
        
    }   
    speicherAnzeigen();

    let startseite: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    startseite.id = "abbrechen";
    startseite.innerHTML = "Gefällt mir doch nicht, ich möchte von vorne beginnen";
    startseite.addEventListener("click", neuBeginnen);
    fertigSim.appendChild(startseite);

    function neuBeginnen(): void {
        window.open("startseite.html", "_self");
        console.log("Abgebrochen");
    }
}