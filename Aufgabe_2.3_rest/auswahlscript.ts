namespace Aufgabe2_3_2_3 {
    let selected: Auswahl;
    let htmlBilder: HTMLImageElement[] = [];
    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);

    window.addEventListener("load", loadContent);

    function loadContent(): void {
        if (path == "auswahlHaare.html") {
            selected = ausgewaehltesBild.haare;
            addContentToDetailWindow(auswahlHaare);
        } else if (path == "auswahlShirt.html") {
            selected = ausgewaehltesBild.shirt;
            addContentToDetailWindow(auswahlShirt);
        } else if (path == "auswahlHose.html") {
            selected = ausgewaehltesBild.hose;
            addContentToDetailWindow(auswahlHose);
        }
    }

    function addContentToDetailWindow(images: Auswahl[]): void {
        let divToAdd: HTMLDivElement = <HTMLDivElement>document.getElementById("auswahlBilder");
        images.forEach(img => {
            let imgElement: HTMLImageElement = document.createElement("img");
            htmlBilder.push(imgElement);
            imgElement.className += "detailImg";
            imgElement.src = img.link;
            if (img == selected) {
                setSelected(img, imgElement);
            }
            imgElement.addEventListener("click", function(): void {
                setSelected(img, imgElement);
            });
            divToAdd.appendChild(imgElement);
        });
    }

    function setSelected(img: Auswahl, imgElement: HTMLImageElement): void {
        selected = img;
        imgElement.className += " selectedImage";
        console.log("selected: " + img.name);
        htmlBilder.forEach(htmlImg => {
            if (htmlImg != imgElement) {
                htmlImg.classList.remove("selectedImage");
            }
        });
    }

    let speicherButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("speicherButton");
    speicherButton.addEventListener("click", speichern);
    let abbrechenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("abbrechenButton");
    abbrechenButton.addEventListener("click", abbrechen);

    function speichern(): void {
        if (path == "auswahlHaare.html") {
            ausgewaehltesBild.haare = selected;
        } else if (path == "auswahlShirt.html") {
            ausgewaehltesBild.shirt = selected;
        } else if (path == "auswahlHose.html") {
            ausgewaehltesBild.hose = selected;
        }
        window.open("index.html", "_self");
        console.log("selected: " + selected.name);
    }

    function abbrechen(): void {
        window.open("index.html", "_self");
        console.log("Abgebrochen");
    }
}