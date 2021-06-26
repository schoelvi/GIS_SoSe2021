

{
    
    let url: string;
    let urlsearchParameters: URLSearchParams;
    let answer: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("antwort");

    let btSend: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    btSend.addEventListener("click", send);

    let btReceive: HTMLButtonElement = <HTMLButtonElement>document.getElementById("receive");
    btReceive.addEventListener("click", receive);

    
    let btDelete: HTMLButtonElement = <HTMLButtonElement>document.getElementById("delete");
    btDelete.addEventListener("click", deleteAll);


    interface Daten {

        vorname: string;
        nachname: string;
        email: string;
        passwort: string;

    }

   
        
    async function send(): Promise<void> {

        url = "https://gis2021vs.herokuapp.com/";
        //url =  "http://localhost:8100/";

        let formData: FormData = new FormData(document.forms[0]);
        urlsearchParameters = new URLSearchParams(<any>formData);

        console.log("Daten gesendet");
        url += "datenSenden" + "?" + urlsearchParameters.toString();
        let response: Response = await fetch(url);
        let showAnswer: string = await response.text();
        answer.innerText = showAnswer;
    }

    async function receive(): Promise<void> {

        url = "https://gis2021vs.herokuapp.com/";
       //url =  "http://localhost:8100/";

       console.log("Daten empfangen");
       url += "datenReceive";
       let response: Response = await fetch(url);
       let showAnswer: string = await response.text();
       let daten: Daten[] = JSON.parse(showAnswer);
       answer.innerText = "";
       let zaehler2: number = 1;

       for (let zaehler: number = 0; zaehler < daten.length; zaehler++) {
       answer.innerHTML = answer.innerHTML + zaehler2 + ". " + "Vorname: " + daten[zaehler].vorname + ", " + "Nachname: " + daten[zaehler].nachname + ", " + "Email: " + daten[zaehler].email + ", " + "Passwort: " + daten[zaehler].passwort ;
       answer.innerHTML = answer.innerHTML + "<br>" + "<br>";
       zaehler2++;
    }
   }

    async function deleteAll(): Promise<void> {

        url = "https://gis2021vs.herokuapp.com/";
        //url =  "http://localhost:8100/";

        console.log("Daten gelöscht");
        url += "datenLoeschen";
        let response: Response = await fetch(url);
        let showAnswer: string = await response.text();
        answer.innerText = showAnswer;
    }
}