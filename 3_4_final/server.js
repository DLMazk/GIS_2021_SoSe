import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
export var Aufgabe3_4;
(function (Aufgabe3_4) {
    let infoFeedback;
    let result;
    let dblink = "mongodb+srv://MazkDL:okazakiVfB31@gis-sose-2021.veqpi.mongodb.net";
    //let databaseURL: string = "mongodb://localhost:27017"; 
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    connectToMongo(dblink);
    function startServer(_port) {
        console.log("Server wird gestartet");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToMongo(_dblink) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_dblink, options);
        await mongoClient.connect();
        infoFeedback = mongoClient.db("3_4").collection("Collection 3_4");
        console.log("Verbindung zur Datenbank: ", infoFeedback != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/saveFeedback") {
                console.log(url);
                _response.setHeader("content-type", "text/html; charset=utf-8");
                infoFeedback.insertOne(url.query);
                _response.write("Feedback gespeichert");
                await connectToMongo(dblink);
            }
            if (url.pathname == "/showFeedback") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                let cursor = infoFeedback.find();
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
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map