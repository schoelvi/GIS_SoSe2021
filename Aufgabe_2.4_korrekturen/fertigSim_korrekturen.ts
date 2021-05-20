namespace Aufgabe_2_4_korrektur {

    let fertigSim: HTMLElement = <HTMLElement>document.getElementById("fertigSim");
    let buttonsDiv: HTMLElement = <HTMLElement>document.getElementById("buttons");
    

    function speicherAnzeigen(): void {
     
            let imgHaare: HTMLElement = document.createElement("img");
            imgHaare.setAttribute("src", sessionStorage.getItem("haare"));
            fertigSim.appendChild(imgHaare);

            let imgShirt: HTMLElement = document.createElement("img");
            imgShirt.setAttribute("src", sessionStorage.getItem("shirt"));
            fertigSim.appendChild(imgShirt);

            let imgHose: HTMLElement = document.createElement("img");
            imgHose.setAttribute("src", sessionStorage.getItem("hose"));
            fertigSim.appendChild(imgHose);
        
        
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