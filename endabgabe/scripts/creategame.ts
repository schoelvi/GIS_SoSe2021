namespace Endabgabe {

    let url: string;
    let urlsearchParameters: URLSearchParams;
    let answer: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("antwort");
    let hinweis: HTMLElement = <HTMLElement>document.getElementById("hinweis");
    let sperren1: HTMLInputElement = <HTMLInputElement>document.getElementById("sperren1");
    let sperren2: HTMLInputElement = <HTMLInputElement>document.getElementById("sperren2");
    let sperren3: HTMLInputElement = <HTMLInputElement>document.getElementById("sperren3");
    
    let registerButtons: HTMLElement = <HTMLElement>document.getElementById("register");
    registerButtons.addEventListener("click", openSend);

    let startButton: HTMLElement = <HTMLElement>document.getElementById("startGame");
    startButton.addEventListener("click", openStartpage);

    let createButton: HTMLElement = <HTMLElement>document.getElementById("createGame");
    createButton.addEventListener("click", openCreatepage);

  
    //Verlinkungen auf andere Seiten
    /*function openRegistration(): void {
        window.open("registration.html", "_self");
        console.log("open Registratiom");
    }*/

    function openStartpage(): void {
        setTimeout(function(){
            window.open("startpage.html", "_self");
            console.log("open Startgame");
        }, 5000)
    }

    function openCreatepage(): void {
        window.open("creategame.html", "_self");
        console.log("open Creategame");
    }


    // Daten des Spielers zusammen mit den Daten (Zeit, Versuche) in die Datenbank abschicken
    async function openSend(): Promise<void> {
        if (sperren1.value == "" && sperren2.value == "" && sperren3.value == "") {
            hinweis.innerHTML = "Alle Felder müssen ausgefüllt sein.";
        } else {
            url = "https://gis2021vs.herokuapp.com/";
            //url = "http://localhost:8100/";

            let formData: FormData = new FormData(document.forms[0]);
            urlsearchParameters = new URLSearchParams(<any>formData);

            url += "datenSenden" + "?" + urlsearchParameters.toString();
            let response: Response = await fetch(url);
            let showAnswer: string = await response.text();
            answer.innerText = showAnswer;
            openStartpage();
        }
    }

    





}