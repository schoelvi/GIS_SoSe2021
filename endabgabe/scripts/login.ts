namespace Endabgabe {

    let url: string;
    let urlsearchParameters: URLSearchParams;
    let answer: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("antwort");
    let hinweis: HTMLElement = <HTMLElement>document.getElementById("hinweis");
    let sperren1: HTMLInputElement = <HTMLInputElement>document.getElementById("sperren1");

    let signinButton: HTMLElement = <HTMLElement>document.getElementById("signIn");
    signinButton.addEventListener("click", openSend);

    let registrationButton: HTMLElement = <HTMLElement>document.getElementById("newUser");
    registrationButton.addEventListener("click", openRegistration);


    //Verlinkungen auf andere Seiten
    function openRegistration(): void {
        window.open("registration.html", "_self");
        console.log("open Registratiom");
    }

    function openHighscore(): void {
        window.open("highscore.html", "_self");
        console.log("open Highscore");
    }

    // Daten des Spielers zusammen mit den Daten (Zeit, Versuche) in die Datenbank abschicken
    async function openSend(): Promise<void> {
        if (sperren1.value == "" ) {
            hinweis.innerHTML = "Beide Felder müssen ausgefüllt sein.";
        } else {
            url = "https://softwaredesign22.herokuapp.com/";
            //url = "http://localhost:8100/";

            let formData: FormData = new FormData(document.forms[0]);
            urlsearchParameters = new URLSearchParams(<any>formData);

            url += "compareUserdata" + "?" + urlsearchParameters.toString();
            let response: Response = await fetch(url);
            let showAnswer: string = await response.text();
            answer.innerText = showAnswer;
            openHighscore();
        }
    }
}