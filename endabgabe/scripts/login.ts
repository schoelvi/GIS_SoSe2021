namespace Endabgabe {

    let showHighscoreButton: HTMLElement = <HTMLElement>document.getElementById("showHighscore");
    showHighscoreButton.addEventListener("click", openSend);

    let neuerVersuchButton: HTMLElement = <HTMLElement>document.getElementById("newGame");
    neuerVersuchButton.addEventListener("click", openGame);

    // let receiveButton: HTMLElement = <HTMLElement>document.getElementById("receive");
    // receiveButton.addEventListener("click", receive);

    let url: string;
    let urlsearchParameters: URLSearchParams;
    let answer: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("antwort");


    //Verlinkungen auf andere Seiten
    function openGame(): void {
        window.open("game.html", "_self");
        console.log("open Game");
    }

    async function openSend(): Promise<void> {

        //url = "https://gis2021vs.herokuapp.com/";
        url = "http://localhost:8100/";

        let formData: FormData = new FormData(document.forms[0]);
        urlsearchParameters = new URLSearchParams(<any>formData);

        url += "datenSenden" + "?" + urlsearchParameters.toString();
        let response: Response = await fetch(url);
        let showAnswer: string = await response.text();
        answer.innerText = showAnswer;
        openHighscore();
    }

    function openHighscore(): void {
        window.open("highscore.html", "_self");
        console.log("open Highscore");
    }





}