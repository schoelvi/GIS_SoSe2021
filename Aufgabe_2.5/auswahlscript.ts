namespace Aufgabe_2_5 {


    let buttonsDiv: HTMLElement = <HTMLElement>document.getElementById("buttons");
    let bilderDiv: HTMLElement = document.getElementById("funktionen");
    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    let antwort: HTMLElement = <HTMLElement>document.getElementById("antwort");
    let derzeitigAuswahl: HTMLElement = <HTMLElement>document.getElementById("derzeitigeAuswahl");
    derzeitigSim();

    let speicherButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    speicherButton.id = "speichern";
    speicherButton.innerHTML = "speichern";
    speicherButton.addEventListener("click", nächsteAuswahl);
    buttonsDiv.appendChild(speicherButton);

    let abbrechenButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    abbrechenButton.id = "abbrechen";
    abbrechenButton.innerHTML = "abbrechen";
    abbrechenButton.addEventListener("click", abbrechen);
    buttonsDiv.appendChild(abbrechenButton);

    let zurückButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    zurückButton.id = "zurück";
    zurückButton.innerHTML = "zurück";
    zurückButton.addEventListener("click", zurück);
    buttonsDiv.appendChild(zurückButton);

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


   // let previousElement: HTMLElement = document.getElementById("funktionen");
   
    ladeBilderAusJSON("data.json");

    async function ladeBilderAusJSON(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let json: string = JSON.stringify(await response.json());
        let objectJson: Sim = JSON.parse(json);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlHaare.html") {

            for (let index: number = 0; index < objectJson.haare.length; index++) {
                let meinbild: HTMLImageElement = document.createElement("img");
                meinbild.addEventListener("click", function (): void { auswählen(objectJson.haare[index]); });
               // meinbild.src = objectJson.haare[index].link;
                meinbild.setAttribute("src", objectJson.haare[index].link);

                bilderDiv.appendChild(meinbild);
            }
        } else if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlShirt.html") {

            for (let index: number = 0; index < objectJson.shirt.length; index++) {
                let meinbild: HTMLImageElement = document.createElement("img");

                meinbild.addEventListener("click", function (): void {auswählen(objectJson.shirt[index]); });
               // meinbild.src = objectJson.shirt[index].link;
                meinbild.setAttribute("src", objectJson.shirt[index].link);

                bilderDiv.appendChild(meinbild);
            } 
        } else if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlHose.html") {

            for (let index: number = 0; index < objectJson.hose.length; index++) {
                let meinbild: HTMLImageElement = document.createElement("img");
                meinbild.addEventListener("click", function (): void {auswählen(objectJson.hose[index]); });
               // meinbild.src = objectJson.hose[index].link;
                meinbild.setAttribute("src", objectJson.hose[index].link);

                bilderDiv.appendChild(meinbild);
            }
        }
        
        
    }

  /*  function wauswählenhlen(): BildSim[] {
        let art: BildSim[] = derSim.haare;
        if (window.location.href.includes("auswahlShirt.html"))
            art = derSim.shirt;
        if (window.location.href.includes("auswahlHose.html")) 
            art = derSim.hose;
        return art;
        }

    */
    
    /*function auswählen(): void {
        const gewaehltes: BildSim[] = ladeBilderAusJSON();
        for (let index: number = 0; index < gewaehltes.length; index++) {

            let img: HTMLElement = document.createElement("img");
            img.setAttribute("src", gewaehltes[index].link);
            img.addEventListener("click", function event(): void {speichern(gewaehltes[index].link, gewaehltes[index].typ); derzeitigSim();
            });

            img.id = gewaehltes[index].name; 
            previousElement.appendChild(img);
        }
        
    } */

    function auswählen(_bild: BildSim): void {
        if (_bild.typ == nummerHaare) {
            auswahl.haare = _bild;
        }
        if (_bild.typ == nummerShirt) {
            auswahl.shirt = _bild;
        }
        if (_bild.typ == nummerHose) {
            auswahl.hose = _bild;
        }
        let auswahlJSON: string = JSON.stringify(auswahl);
        sessionStorage.setItem("" + _bild.typ, auswahlJSON);
    }


    
    function nächsteAuswahl(): void {
        if (window.location.href.includes("auswahlHaare.html")) {
            if (sessionStorage.getItem("haare") == null) {
                antwort.innerHTML = "BITTE WÄHLEN SIE ETWAS AUS.";
                return;
            } 
            window.open("auswahlShirt.html", "_self");
        }
        if (window.location.href.includes("auswahlShirt.html")) {
            if (sessionStorage.getItem("shirt") == null) {
                antwort.innerHTML = "BITTE WÄHLEN SIE ETWAS AUS.";
                return;
            } 
            window.open("auswahlHose.html", "_self");
        }
        if (window.location.href.includes("auswahlHose.html")) {
            if (sessionStorage.getItem("hose") == null) {
                antwort.innerHTML = "BITTE WÄHLEN SIE ETWAS AUS.";
                return;
            } 
            window.open("fertigSim.html", "_self");
        }

    } 

  //  function speichern(_link: string, _typ: string): void {
        
  //      sessionStorage.setItem(_typ, _link);
  //  }
           
    function derzeitigSim(): void {
        if (path == "auswahlHaare.html") {
            derzeitigAuswahl.innerHTML = "";

            let imgHaare: HTMLElement = document.createElement("img");
            imgHaare.setAttribute("src", (sessionStorage.getItem("haare")));
            derzeitigAuswahl.appendChild(imgHaare);
        } else if (path == "auswahlShirt.html") {
            derzeitigAuswahl.innerHTML = "";

            let imgHaare: HTMLElement = document.createElement("img");
            imgHaare.setAttribute("src", (sessionStorage.getItem("haare")));
            derzeitigAuswahl.appendChild(imgHaare);

            let imgShirt: HTMLElement = document.createElement("img");
            imgShirt.setAttribute("src", (sessionStorage.getItem("shirt")));
            derzeitigAuswahl.appendChild(imgShirt); 
        } else if (path == "auswahlHose.html") {
            derzeitigAuswahl.innerHTML = "";

            let imgHaare: HTMLElement = document.createElement("img");
            imgHaare.setAttribute("src", (sessionStorage.getItem("haare")));
            derzeitigAuswahl.appendChild(imgHaare);

            let imgShirt: HTMLElement = document.createElement("img");
            imgShirt.setAttribute("src", (sessionStorage.getItem("shirt")));
            derzeitigAuswahl.appendChild(imgShirt);

            let imgHose: HTMLElement = document.createElement("img");
            imgHose.setAttribute("src", (sessionStorage.getItem("hose")));
            derzeitigAuswahl.appendChild(imgHose);  
        }

        
    }   
    

}