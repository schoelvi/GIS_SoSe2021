namespace Aufgabe_2_3_Rest {


    let funktionDiv: HTMLElement = <HTMLElement>document.getElementById("funktionen");

    /*let speicherButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
      speicherButton.id = "speichern";
      speicherButton.addEventListener("click", speichern);
      funktionDiv.appendChild(speicherButton);*/
    let abbrechenButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    abbrechenButton.id = "abbrechen";
    abbrechenButton.innerHTML = "abbrechen";
    abbrechenButton.addEventListener("click", abbrechen);
    funktionDiv.appendChild(abbrechenButton);

    function abbrechen(): void {
        window.open("index.html", "_self");
    }

    let previousElement: HTMLElement = document.body;

    function Bildübernahme(): void {
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlHaare.html") {
            console.log("auswahlHaare");
            for (let index: number = 0; index < Haare.length; index++) {

                let posLeft: string = "";
                let posTop: string = "";
                posLeft = (index * 200) + "px";
                posTop = 100 + "px";


                let img: HTMLElement = document.createElement("img");
                img.style.position = "static";
                img.style.left = posLeft;
                img.style.top = posTop;
                img.style.margin = "10px";
                img.style.height = 200 + "px";
                img.style.width = 200 + "px";
                img.setAttribute("src", Haare[index].link);

                previousElement.appendChild(img);
            }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlShirt.html") {
                console.log("auswahlShirt");
                for (let index: number = 0; index < Shirt.length; index++) {

                    let posLeft: string = "";
                    let posTop: string = "";
                    posLeft = (index * 200) + "px";
                    posTop = 100 + "px";


                    let img: HTMLElement = document.createElement("img");
                    img.style.position = "static";
                    img.style.left = posLeft;
                    img.style.top = posTop;
                    img.style.margin = "10px";
                    img.style.height = 200 + "px";
                    img.style.width = 200 + "px";
                    img.setAttribute("src", Shirt[index].link);

                    previousElement.appendChild(img);
                }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "auswahlHose.html") {
            console.log("auswahlHose");
            for (let index: number = 0; index < Hose.length; index++) {

                let posLeft: string = "";
                let posTop: string = "";
                posLeft = (index * 200) + "px";
                posTop = 100 + "px";


                let img: HTMLElement = document.createElement("img");
                img.style.position = "static";
                img.style.left = posLeft;
                img.style.top = posTop;
                img.style.margin = "10px";
                img.style.height = 200 + "px";
                img.style.width = 200 + "px";
                img.setAttribute("src", Hose[index].link);

                previousElement.appendChild(img);
            }
    }
        

    }
    Bildübernahme();

}