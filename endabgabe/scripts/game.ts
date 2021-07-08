namespace Endabgabe {

    let einstelltungenButton: HTMLElement = <HTMLElement> document.getElementById("admin");
    einstelltungenButton.addEventListener("click", openEinstellungen);

    let showHighscoreButton: HTMLElement = <HTMLElement> document.getElementById("showHighscore");
    showHighscoreButton.addEventListener("click", openHighscore);

    let startButton: HTMLElement = <HTMLElement> document.getElementById("showHighscore");
    startButton.addEventListener("click", startGame);

    //Verlinkungen auf andere Seiten
    function openEinstellungen(): void {
        window.open("admin.html", "_self");
        console.log("open Einstellungen");
    }

    function openHighscore(): void {
        window.open("highscore.html", "_self");
        console.log("open Highscore");
    }

    function startGame(): void {
        
    }

}