import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Fridge {

    let fridgeCollection: Mongo.Collection;
    let result: Item[];

    let dblink: string = "mongodb+srv://MazkDL:okazakiVfB31@gis-sose-2021.veqpi.mongodb.net/Fridge?retryWrites=true&w=majority";
    //let dblink: string = "mongodb://localhost:27017"; 

    let port: number = Number(process.env.PORT);


    if (!port)
        port = 8100;



    startingUp();

    async function startingUp(): Promise<void> {

        await connectMongo(dblink);
        startingServer(port);

    }

    async function connectMongo(_dblink: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_dblink, options);
        await mongoClient.connect();
        fridgeCollection = mongoClient.db("Fridge").collection("Refrigerator");
        console.log("Verbindung zur Datenbank wurde aufgebaut. Zugriff auf: ", fridgeCollection != undefined);

    }

    function startingServer(_port: number): void {

        console.log("Server wird gestartet!");

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);

    }


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log("I hear a request!");
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {

            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string = <string>url.pathname;

            if (path == "/showItems") {

                _response.setHeader("content-type", "text/html; charset=utf-8");
                let cursor: Mongo.Cursor = fridgeCollection.find();
                result = await cursor.toArray();
                _response.write(JSON.stringify(result));

            }
        }

        _response.end();
        console.log(_response);

    }



    function handleListen(): void {

        console.log("I'm Listening");

    }


}


