import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace Endabgabe {


    let dataUser: Mongo.Collection;
    let dataGames: Mongo.Collection;
    let mongoLink: string = "mongodb+srv://vivien_1:mongo22@cluster0.ltd0uzy.mongodb.net/?retryWrites=true&w=majority";

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    startServer(port);
    connectToMongo(mongoLink);

    function startServer(thisport: number | string): void {
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(thisport);
    }

    async function connectToMongo(mongoLink: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(mongoLink, options);
        await mongoClient.connect();
        dataUser = mongoClient.db("textAdventure").collection("user");
        dataGames = mongoClient.db("textAdventure").collection("games");
        console.log("Verbindung hergestellt.", dataUser != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        console.log(_request.url);

        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {

            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pfad: string = <string>url.pathname;

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
                let allData: string[] = await dataUser.find().sort({ Zeit: 1}).toArray();
                let allDataString: string = JSON.stringify(allData);
                _response.write(allDataString);
            }
            if (pfad == "/highscoreReceive") {
                _response.setHeader("content-type", "JSON; charset=utf-8");
                let allData: string[] = await dataUser.find().sort({ Zeit: 1}).toArray();
                let allDataString: string = JSON.stringify(allData);
                _response.write(allDataString);
            }
 
            if (pfad == "/datenReceive") {
                _response.setHeader("content-type", "JSON; charset=utf-8");
                let allData: string[] = await dataUser.find().toArray();
                let allDataString: string = JSON.stringify(allData);
                _response.write(allDataString);
            }

            if (pfad == "/bildReceive") {
                _response.setHeader("content-type", "JSON; charset=utf-8");
                let allData: string[] = await dataGames.find().toArray();
                let allDataString: string = JSON.stringify(allData);
                _response.write(allDataString);
            }

            if (pfad == "/bildLoeschen") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                console.log(url.query.name);
                await dataGames.findOneAndDelete({ "_id": new Mongo.ObjectId(<string>url.query.name) });
                _response.write("Bild gelöscht, bitte Seite neu laden.");
            }
 
            if (pfad == "/compareUserdata") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                console.log(url.query.name);
                await dataUser.findOne({ "user": new Mongo.ObjectId(<string>url.query.name) });
                _response.write("User nicht gefunden.");
            }
        }
        _response.end();

    }
}