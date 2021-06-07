"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_3_2 = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe_3_2;
(function (Aufgabe_3_2) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pfad = url.pathname;
            if (pfad == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br/>");
                }
            }
            else if (pfad == "/json") {
                _response.setHeader("content-type", "application/json");
                _response.write(JSON.stringify(url.query));
            }
        }
        _response.end();
    }
})(Aufgabe_3_2 = exports.Aufgabe_3_2 || (exports.Aufgabe_3_2 = {}));
//# sourceMappingURL=server.js.map