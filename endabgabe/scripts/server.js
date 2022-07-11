"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let dataUser;
    let dataGames;
    let mongoLink = "mongodb+srv://vivien_1:<password>@cluster0.4ukgufj.mongodb.net/?retryWrites=true&w=majority";
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
        dataUser = mongoClient.db("textAdventure").collection("user");
        dataGames = mongoClient.db("textAdventure").collection("games");
        console.log("Verbindung hergestellt.", dataUser != undefined);
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
            console.log(pfad);
            if (pfad == "/datenSenden") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                await dataUser.insertOne(url.query);
                _response.write("Daten gespeichert");
                console.log("hallo");
            }
            if (pfad == "/urlSenden") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                await dataGames.insertOne(url.query);
                _response.write("Daten gespeichert, Seite bitte neu laden");
                console.log("hallo");
            }
            if (pfad == "/highscoreReceive") {
                _response.setHeader("content-type", "JSON; charset=utf-8");
                let allData = await dataUser.find().sort({ Zeit: 1 }).toArray();
                let allDataString = JSON.stringify(allData);
                _response.write(allDataString);
            }
            if (pfad == "/highscoreReceive") {
                _response.setHeader("content-type", "JSON; charset=utf-8");
                let allData = await dataUser.find().sort({ Zeit: 1 }).toArray();
                let allDataString = JSON.stringify(allData);
                _response.write(allDataString);
            }
            if (pfad == "/datenReceive") {
                _response.setHeader("content-type", "JSON; charset=utf-8");
                let allData = await dataUser.find().toArray();
                let allDataString = JSON.stringify(allData);
                _response.write(allDataString);
            }
            if (pfad == "/bildReceive") {
                _response.setHeader("content-type", "JSON; charset=utf-8");
                let allData = await dataGames.find().toArray();
                let allDataString = JSON.stringify(allData);
                _response.write(allDataString);
            }
            if (pfad == "/bildLoeschen") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                console.log(url.query.name);
                await dataGames.findOneAndDelete({ "_id": new Mongo.ObjectId(url.query.name) });
                _response.write("Bild gelöscht, bitte Seite neu laden.");
            }
            if (pfad == "/compareUserdata") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                console.log(url.query.name);
                await dataUser.findOne({ "user": new Mongo.ObjectId(url.query.name) });
                _response.write("User nicht gefunden.");
            }
        }
        _response.end();
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map