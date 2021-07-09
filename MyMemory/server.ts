import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { Cards } from "./interface";
// import { url } from "inspector";

export namespace Memory {

    let cardsCollection: Mongo.Collection;
    let result: Cards[];

    let dblink: string = "mongodb+srv://MazkDL:okazakiVfB31@gis-sose-2021.veqpi.mongodb.net";
    //let dblink: string = "mongodb://localhost:27017"; 

    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;


    startServer(port);

    connectMongo(dblink);


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
        console.log("Verbindung augebaut: ", cardsCollection != undefined);
    }

    function handleListen(): void {
        console.log("I am Listening!");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Aaaaaah, I hear Voices!");
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access.Control_Allow-Origin", "*");

        if (_request.url) {

            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string = <string>url.pathname;

            if (path == "/showCards") {

                let cursor: Mongo.Cursor = cardsCollection.find();
                result = await cursor.toArray();
                _response.write(JSON.stringify(result));

            }
        }
        _response.end();
        console.log(_response);

    }
}