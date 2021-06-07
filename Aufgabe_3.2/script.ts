namespace Aufgabe_3_2 {
    
    let url: string = "https://gis2021vs.herokuapp.com/";

    let answer: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("antwort");

    let btHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendHtml");
    btHtml.addEventListener("click", sendHtml);

    let btJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendJson");
    btJson.addEventListener("click", sendJson);

    async function sendHtml(): Promise<void> {
        let response: Response = await send(url + "/html");
        let text: string = await response.text();
        answer.innerHTML = "ServerAntwort:<br/>" + text;
    }

    async function sendJson(): Promise<void> {
        let response: Response = await send(url + "/json");
        let json: JSON = await response.json();
        console.log("Answer:");
        console.log(json);
        answer.innerHTML = "<pre>" + JSON.stringify(json, undefined, 2) + "</pre>";
    }
    
    async function send(_url: string): Promise<Response> {
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        return response;
    }
}
       
