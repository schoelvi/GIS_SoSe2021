"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe_3_4;
(function (Aufgabe_3_4) {
    let dataAntwort;
    let mongoLink = "mongodb+srv://vivien_1:vivien5@gissose2021.rg9pn.mongodb.net/Daten?retryWrites=true&w=majority";
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    connectToMongo(mongoLink);
    function startServer(thisport) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(thisport);
    }
    async function connectToMongo(mongoLink) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(mongoLink, options);
        await mongoClient.connect();
        dataAntwort = mongoClient.db("Daten").collection("Collection");
        console.log("Verbindung hergestellt.", dataAntwort != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pfad = url.pathname;
            if (pfad == "/datenSenden") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                await dataAntwort.insertOne(url.query);
                _response.write("Daten gespeichert");
            }
            if (pfad == "/datenReceive") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                let allData = await dataAntwort.find().toArray();
                let allDataString = JSON.stringify(allData);
                _response.write(allDataString);
            }
            if (pfad == "/datenLoeschen") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                await dataAntwort.drop();
                _response.write("Daten gelöscht");
            }
        }
        _response.end();
    }
})(Aufgabe_3_4 = exports.Aufgabe_3_4 || (exports.Aufgabe_3_4 = {}));
//# sourceMappingURL=server.js.map