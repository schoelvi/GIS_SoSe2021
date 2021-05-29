import * as Http from "http";

export namespace Aufgabe_3_1 {
    console.log("Starting server"); // Konsolenausgabe
    let port: number = Number(process.env.PORT); // Holt den aktuellen Port
    if (!port)
        port = 8100; // falls es keinen Port gibt, dann wird er auf 8100 gesetzt

    let server: Http.Server = Http.createServer(); // Erstellt einen neuen Http-Server
    server.addListener("request", handleRequest); //added eine Anfragefunktion 
    server.addListener("listening", handleListen); //added eine "Zuhören"-Funktion
    server.listen(port); //"hört" auf einen definierten Port

    function handleListen(): void { // die Funktion "hört" wann der Server bereit ist
        console.log("Listening"); //Konsolenausgabe
    }

    // die Funktion beschäftigt sich mit Anfragen
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); // Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Antwort auf HTML
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); // Response/Antwort URL wird ausgegeben
        console.log(_request.url); // URL wird auf der Konsole ausgegeben
        _response.end(); //Ende der Antwort
    }
}