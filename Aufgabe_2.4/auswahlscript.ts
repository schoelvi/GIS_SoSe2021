namespace Aufgabe_2_4 {


    let funktionDiv: HTMLElement = <HTMLElement>document.getElementById("funktionen");
    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    let antwort: HTMLElement = <HTMLElement>document.getElementById("antwort");
    let derzeitigAuswahl: HTMLElement = <HTMLElement>document.getElementById("derzeitigeAuswahl");
    derzeitigSim();

    let speicherButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    speicherButton.id = "speichern";
    speicherButton.innerHTML = "speichern";
    speicherButton.addEventListener("click", nächsteAuswahl);
    funktionDiv.appendChild(speicherButton);

    let abbrechenButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    abbrechenButton.id = "abbrechen";
    abbrechenButton.innerHTML = "abbrechen";
    abbrechenButton.addEventListener("click", abbrechen);
    funktionDiv.appendChild(abbrechenButton);

    let zurückButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    zurückButton.id = "zurück";
    zurückButton.innerHTML = "zurück";
    zurückButton.addEventListener("click", zurück);
    funktionDiv.appendChild(zurückButton);

    function abbrechen(): void {
        window.open("index.html", "_self");
        console.log("Abgebrochen");
    }

   

    function zurück(): void {
        let vorherigeSeite: string;
        if (path == "auswahlShirt.html") {
            vorherigeSeite = "auswahlHaare.html";
        } else if (path == "auswahlHose.html") {
            vorherigeSeite = "auswahlShirt.html";
        } else if (path == "auswahlHaare.html") {
            vorherigeSeite = "index.html";
        }
        window.open(vorherigeSeite, "_self");
    }


    let previousElement: HTMLElement = document.getElementById("funktionen");
   
    function wählen(): BildSim[] {
        let art: BildSim[] = _sim.haare;
        if (window.location.href.includes("auswahlShirt.html"))
            art = _sim.shirt;
        if (window.location.href.includes("auswahlHose.html")) 
            art = _sim.hose;
        return art;
        }

    function auswählen(): void {
        const gewaehltes: BildSim[] = wählen();
        for (let index: number = 0; index < gewaehltes.length; index++) {

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
            img.setAttribute("src", gewaehltes[index].link);
            img.addEventListener("click", function (): void {speichern(gewaehltes[index].link, gewaehltes[index].typ); derzeitigSim();
            });

            img.id = gewaehltes[index].name; 
            previousElement.appendChild(img);
        }
        
    }   
    auswählen();
    
    function nächsteAuswahl(): void {
        if (window.location.href.includes("auswahlHaare.html")) {
            if (sessionStorage.getItem("0") == null) {
                antwort.innerHTML = "BITTE WÄHLEN SIE ETWAS AUS.";
                return;
            }
            window.open("auswahlShirt.html", "_self");
        }
        if (window.location.href.includes("auswahlShirt.html")) {
            window.open("auswahlHose.html");
        }
        if (window.location.href.includes("auswahlHose.html")) {
            window.open("fertigSim.html");
        }

    } 

    function speichern(_link: string, _typ: number): void {
        
        sessionStorage.setItem(_typ.toString(), _link);
    }
           
    function derzeitigSim(): void {
        if (path == "auswahlHaare.html") {
            derzeitigAuswahl.innerHTML = "";
            let posLeft: string = "";
            let posTop: string = "";
            posLeft = (0 * 200) + "px";
            posTop = 100 + "px";

            let img: HTMLElement = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.style.margin = "10px";
            img.style.height = 200 + "px";
            img.style.width = 200 + "px";
            img.setAttribute("src", sessionStorage[0]);
            
            derzeitigAuswahl.appendChild(img);
        }
        if (path == "auswahlShirt.html") {
            derzeitigAuswahl.innerHTML = "";
            for (let index: number = 0; index < 2; index++) {

            
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
            
            derzeitigAuswahl.appendChild(img);
            }
        }
        if (path == "auswahlHose.html") {
            derzeitigAuswahl.innerHTML = "";
            for (let index: number = 0; index < 3; index++) {

            
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
            
            derzeitigAuswahl.appendChild(img);
            }
        }

        
    }   
    

}