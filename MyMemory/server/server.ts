import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Memory {

    let cardsCollection: Mongo.Collection;
    let scoreCollection: Mongo.Collection;
    let result: Cards[];

    let dblink: string = "mongodb+srv://MazkDL:okazakiVfB31@gis-sose-2021.veqpi.mongodb.net/Memory?retryWrites=true&w=majority";
    //let dblink: string = "mongodb://localhost:27017"; 

    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;

    start();

    async function start(): Promise<void> {

        await connectMongo(dblink);
        startServer(port);
    }

    function startServer(_port: number | string): void {

        console.log("Server wird gestartet");

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }

    async function connectMongo(_dblink: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_dblink, options);
        await mongoClient.connect();
        cardsCollection = mongoClient.db("Memory").collection("Cards");
        scoreCollection = mongoClient.db("Memory").collection("Scores");
        console.log("Verbindung zu Mongo Cards augebaut: ", cardsCollection != undefined);
        console.log("Verbindung zu Mongo Scores augebaut: ", scoreCollection != undefined);
    }

    function handleListen(): void {
        console.log("I am Listening!");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Aaaaaah, I hear Voices!");
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {

            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string = <string>url.pathname;

            if (path == "/showCards") {

                let cursor: Mongo.Cursor = cardsCollection.find();
                result = await cursor.toArray();
                _response.write(JSON.stringify(result));

            }

            if (path == "/showTopScores") {

                let cursor: Mongo.Cursor = scoreCollection.find().sort({"time": 1});
                result = await cursor.toArray();
                _response.write(JSON.stringify(result));

            }

            if (path == "/sendScore") {

                console.log(url);
                scoreCollection.insertOne(url.query);
                _response.write("Score gespeichert");
                await connectMongo(dblink);

            }
        }
        _response.end();
        console.log(_response);

    }
}