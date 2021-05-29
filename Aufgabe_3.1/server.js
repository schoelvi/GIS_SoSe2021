"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_3_1 = void 0;
const Http = require("http");
var Aufgabe_3_1;
(function (Aufgabe_3_1) {
    console.log("Starting server"); // Konsolenausgabe
    let port = Number(process.env.PORT); // Holt den aktuellen Port
    if (!port)
        port = 8100; // falls es keinen Port gibt, dann wird er auf 8100 gesetzt
    let server = Http.createServer(); // Erstellt einen neuen Http-Server
    server.addListener("request", handleRequest); //added eine Anfragefunktion 
    server.addListener("listening", handleListen); //added eine "Zuhören"-Funktion
    server.listen(port); //"hört" auf einen definierten Port
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe
    }
    // die Funktion beschäftigt sich mit Anfragen
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Antwort auf HTML
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); // Response/Antwort URL wird ausgegeben
        console.log(_request.url); // URL wird auf der Konsole ausgegeben
        _response.end(); //Ende der Antwort
    }
})(Aufgabe_3_1 = exports.Aufgabe_3_1 || (exports.Aufgabe_3_1 = {}));
//# sourceMappingURL=server.js.map