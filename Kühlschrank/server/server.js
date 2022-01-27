"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refridgerator = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Refridgerator;
(function (Refridgerator) {
    let fridgeCollection;
    let result;
    let dblink = "mongodb+srv://MazkDL:okazakiVfB31@gis-sose-2021.veqpi.mongodb.net/Memory?retryWrites=true&w=majority";
    //let dblink: string = "mongodb://localhost:27017"; 
    let port = Number(process.env.PORT);
    if (!port) {
        port = 8100;
    }
    startingUp();
    async function startingUp() {
        await connectMongo(dblink);
        startingServer(port);
    }
    async function connectMongo(_dblink) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_dblink, options);
        await mongoClient.connect();
        fridgeCollection = mongoClient.db("Fridge").collection("Refrigerator");
        console.log("Verbindung zur Datenbank wurde aufgebaut. Zugriff auf: ", fridgeCollection != undefined);
    }
    function startingServer(_port) {
        console.log("Server wird gestartet!");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function handleRequest(_request, _response) {
        console.log("I hear a request!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/showItems") {
                let cursor = fridgeCollection.find();
                result = await cursor.toArray();
                _response.write(JSON.stringify(result));
            }
        }
        _response.end();
        console.log(_response);
    }
    function handleListen() {
        console.log("I'm Listening");
    }
})(Refridgerator = exports.Refridgerator || (exports.Refridgerator = {}));
//# sourceMappingURL=server.js.map