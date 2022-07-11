namespace Endabgabe {

    let newGameButton: HTMLElement = <HTMLElement> document.getElementById("newGame");
    newGameButton.addEventListener("click", openGame);

    let signinButton: HTMLElement = <HTMLElement>document.getElementById("signInStart");
    signinButton.addEventListener("click", openLogin);

    let url: string;
    let gameOverview: HTMLElement = <HTMLElement>document.getElementById("gameOverview");
    receive();
    
    //Verlinkungen auf andere Seiten
    function openGame(): void {
        window.open("game.html", "_self");
        console.log("open Game");
    }

    function openLogin(): void {
        window.open("login.html", "_self");
        console.log("open Login");
    }

    // Laden der gespeichtern Daten
    async function receive(): Promise<void> {
 
        url = "https://gis2021vs.herokuapp.com/";
        //url =  "http://localhost:8100/";

        console.log("Daten empfangen");
        url += "highscoreReceive";
        let response: Response = await fetch(url);
        let showAnswer: string = await response.text();
        let daten: Daten[] = JSON.parse(showAnswer);
        gameOverview.innerText = "";
        let zaehler2: number = 1;

        for (let zaehler: number = 0; zaehler < 10; zaehler++) {
            gameOverview.innerHTML = gameOverview.innerHTML + zaehler2 + ". "  + daten[zaehler].vorname + " " +daten[zaehler].nachname + ", " + "Zeit: " + daten[zaehler].Zeit + " Sekunden "  + "(Versuche: " + daten[zaehler].Versuche + ")";
            gameOverview.innerHTML = gameOverview.innerHTML + "<br>" + "<br>";
            zaehler2++;
        }
    }

    interface Daten {
        vorname: string;
        nachname: string;
        Zeit: string;
        Versuche: string;
    }
}