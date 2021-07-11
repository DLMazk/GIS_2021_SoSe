import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { Feedback } from "./interface";


export namespace Aufgabe3_4 {

    let infoFeedback: Mongo.Collection;
    let result: Feedback[];

    let dblink: string = "mongodb+srv://MazkDL:okazakiVfB31@gis-sose-2021.veqpi.mongodb.net";
    //let dblink: string = "mongodb://localhost:27017"; 

    let port: number = Number(process.env.PORT);
    
    if (!port)
        port = 8100;

    startServer(port);
    connectToMongo(dblink);
    

    function startServer(_port: number | string): void {

        console.log("Server wird gestartet");

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }

    async function connectToMongo(_dblink: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_dblink, options);
        await mongoClient.connect();
        infoFeedback = mongoClient.db("3_4").collection("Collection 3_4");
        console.log("Verbindung zur Datenbank: ", infoFeedback != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {

            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (url.pathname == "/saveFeedback") {

                console.log(url);
                _response.setHeader("content-type", "text/html; charset=utf-8");
                infoFeedback.insertOne(url.query);
                _response.write("Feedback gespeichert");
                await connectToMongo(dblink);
            }

            if (url.pathname == "/showFeedback") {

                _response.setHeader("content-type", "text/html; charset=utf-8");
                let cursor: Mongo.Cursor = infoFeedback.find();
                result = await cursor.toArray();
                _response.write(JSON.stringify(result));
            }

            if (url.pathname == "/deleteFeedback") {

                console.log(url.query);

                _response.setHeader("content-type", "text/html; charset=utf-8");
                infoFeedback.deleteOne({ "_id": new Mongo.ObjectId(url.query._id.toString()) });
                console.log("_id: " + new Mongo.ObjectId(url.query._id.toString()));

                _response.write("Feedback gelöscht");
                await connectToMongo(dblink);
            }
        }
        _response.end();
        console.log(_response);
    }
}
