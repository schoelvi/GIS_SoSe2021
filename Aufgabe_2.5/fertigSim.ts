namespace Aufgabe_2_5 {

    let fertigSim: HTMLElement = <HTMLElement>document.getElementById("fertigSim");
    let buttonsDiv: HTMLElement = <HTMLElement>document.getElementById("buttons");
    interface Serverantwort {
        message: string;
        error: string;
    }

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

    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "fertigSim.html") {
        servercheck();
    }
    
    async function servercheck(): Promise<void> {
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>sessionStorage);
        let url: string = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let serverantwort: Response = await fetch(url);
        let rückmeldung: Serverantwort = await serverantwort.json();


        if (rückmeldung.error != undefined) {
            console.log(rückmeldung.error);
            let messagediv: HTMLElement = document.getElementById("error");
            messagediv.appendChild(document.createTextNode("" + rückmeldung.error));
        }
        else if (rückmeldung.message != undefined) {
            console.log(rückmeldung.message);
            let messagediv: HTMLElement = document.getElementById("message");
            messagediv.appendChild(document.createTextNode("" + rückmeldung.message));
        }

    }
}