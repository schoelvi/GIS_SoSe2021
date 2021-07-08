namespace Endabgabe {

    let url: string;
    let urlsearchParameters: URLSearchParams;
    let answer: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("antwort");

    let bilderDiv: HTMLElement = <HTMLElement>document.getElementById("bilderDatenbank");
    showBild();

    let bildEinfuegenButton: HTMLElement = <HTMLElement> document.getElementById("hinzufuegen");
    bildEinfuegenButton.addEventListener("click", bildHinzufuegen);

    let bildLoeschenButton: HTMLElement = <HTMLElement> document.getElementById("loeschen");
    bildLoeschenButton.addEventListener("click", deleteBild);

    async function bildHinzufuegen(): Promise<void> {
        
        //url = "https://gis2021vs.herokuapp.com/";
        url =  "http://localhost:8100/";

        let formData: FormData = new FormData(document.forms[0]);
        urlsearchParameters = new URLSearchParams(<any>formData);

        console.log("URL gesendet");
        url += "urlSenden" + "?" + urlsearchParameters.toString();
        let response: Response = await fetch(url);
        let showAnswer: string = await response.text();
        answer.innerText = showAnswer;
    }

    interface Bild{
        url: string;
    }

    async function showBild(): Promise<void> {
        
            //url = "https://gis2021vs.herokuapp.com/";
            url =  "http://localhost:8100/";
    
            console.log("Daten empfangen");
            url += "bildReceive";
            let response: Response = await fetch(url);
            let showAnswer: string = await response.text();
            let daten: Bild[] = JSON.parse(showAnswer);
    
            for (let zaehler: number = 0; zaehler < daten.length; zaehler++) {
                let bild = document.createElement("img");
                bild.className = "bilderAdmin";
                bild.src = daten[zaehler].url;
                bilderDiv.appendChild(bild);
            }
        }

    

    async function deleteBild(): Promise<void> {
      
    }
  
}