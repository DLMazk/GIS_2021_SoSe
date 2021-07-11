"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Memory;
(function (Memory) {
    let cardsCollection;
    let scoreCollection;
    let result;
    let dblink = "mongodb+srv://MazkDL:okazakiVfB31@gis-sose-2021.veqpi.mongodb.net/Memory?retryWrites=true&w=majority";
    //let dblink: string = "mongodb://localhost:27017"; 
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    start();
    async function start() {
        await connectMongo(dblink);
        startServer(port);
    }
    function startServer(_port) {
        console.log("Server wird gestartet");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectMongo(_dblink) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_dblink, options);
        await mongoClient.connect();
        cardsCollection = mongoClient.db("Memory").collection("Cards");
        scoreCollection = mongoClient.db("Memory").collection("Scores");
        console.log("Verbindung zu Mongo Cards augebaut: ", cardsCollection != undefined);
        console.log("Verbindung zu Mongo Scores augebaut: ", scoreCollection != undefined);
    }
    function handleListen() {
        console.log("I am Listening!");
    }
    async function handleRequest(_request, _response) {
        console.log("Aaaaaah, I hear Voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/showCards") {
                let cursor = cardsCollection.find();
                result = await cursor.toArray();
                _response.write(JSON.stringify(result));
            }
            if (path == "/showTopScores") {
                let cursor = scoreCollection.find().sort({ "time": 1 });
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
})(Memory = exports.Memory || (exports.Memory = {}));
//# sourceMappingURL=server.js.map