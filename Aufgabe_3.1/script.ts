namespace Aufgabe_3_1 {

    
    let btLogin: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    btLogin.addEventListener("click", login);


    async function login(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://gis2021vs.herokuapp.com/";

        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let text: string = await response.text();
        console.log("Answer:");
        console.log(text);
    }
       
}