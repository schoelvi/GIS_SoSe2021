namespace Endabgabe {

    let url: string;
    let urlsearchParameters: URLSearchParams;
    let answer: HTMLInputElement = <HTMLInputElement>document.getElementById("antwort");
    let gameName: HTMLInputElement = <HTMLInputElement>document.getElementById("gameName");
    let startX: HTMLInputElement = <HTMLInputElement>document.getElementById("startX");
    let startY: HTMLInputElement = <HTMLInputElement>document.getElementById("startY");
    let gameField: HTMLTableElement = <HTMLTableElement>document.getElementById("gameField");
    let userName = localStorage.getItem('userName');
    let sizeX: HTMLInputElement = <HTMLInputElement>document.getElementById("sizeX");
    let sizeY: HTMLInputElement = <HTMLInputElement>document.getElementById("sizeY");

    let generateGame: HTMLElement = <HTMLElement>document.getElementById("generateField");
    generateGame.addEventListener("click", generateField);

    let gameEnable: HTMLElement = <HTMLElement>document.getElementById("gameEnable");
    gameEnable.addEventListener("click", openSend);

    let field: string[][] = [];

    type gameType = {
        name: string;
        size: number[];
        startpoint: number[];
        field: string[][];
        creator: string;
        playedCounter: number;
        moveCounter: number;
    }

    //Link to other pages
    function openStartpage(): void {
        setTimeout(function () {
            window.open("startpage.html", "_self");
            console.log("open Startgame");
        }, 5000)
    }

    //generate field dynamically
    function generateField(): void {
        generateGame.style.display = "none";
        let x = Number(sizeX.value);
        let y = Number(sizeY.value);
        for (let i = 0; i < y; i++) {
            let row = document.createElement("tr");
            gameField.appendChild(row);
            field.push([]);
            for (let j = 0; j < x; j++) {
                field[i].push("");
                let cell = document.createElement("td");
                let span = document.createElement("span");
                let input = document.createElement("input");
                input.addEventListener("change", function (e: Event) {
                    const target = <HTMLInputElement>e.target;
                    field[i][j] = target.value;
                })
                row.appendChild(cell);
                cell.appendChild(span);
                cell.appendChild(input);
            }
        }
    }


    // Send Data to database (also get creator from local storage)
    async function openSend(): Promise<void> {
   
        url = "http://localhost:8100/";

        let game: gameType = {
            name: gameName.value,
            size: [Number(sizeX.value), Number(sizeY.value)],
            startpoint: [Number(startX.value), Number(startY.value)],
            field: field,
            creator: userName,
            moveCounter: 0,
            playedCounter: 0
        }

        urlsearchParameters = new URLSearchParams();
        urlsearchParameters.append("game", JSON.stringify(game));

        url += "gamedataSend" + "?" + urlsearchParameters.toString();
        let response: Response = await fetch(url);
        let showAnswer: string = await response.text();
        answer.innerText = showAnswer;
        openStartpage();
    
    }







}